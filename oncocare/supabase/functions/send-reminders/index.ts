// Sends approved WhatsApp templates. Called by the daily cron (x-cron-secret) or by a signed-in nurse ({id}) for "Send now".
import {createClient} from 'npm:@supabase/supabase-js@2';
const sb=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')??JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS')??'{}')['default']!);
const TZ='Asia/Baghdad',ORDER=['BMA','IT','MRD','HLA'];
const PN:any={BMA:{en:'Bone Marrow Aspiration (BMA)',ar:'سحب عينة نخاع العظم (BMA)'},IT:{en:'Intrathecal Chemotherapy (IT)',ar:'العلاج الكيماوي داخل السائل الشوكي (IT)'},MRD:{en:'MRD testing',ar:'فحص المرض المتبقي (MRD)'},HLA:{en:'HLA Matching (tissue typing)',ar:'فحص تطابق الأنسجة (HLA)'}};
const fD=(d:Date,ar:boolean)=>d.toLocaleDateString(ar?'ar-IQ-u-nu-latn':'en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:TZ});
const fT=(d:Date,ar:boolean)=>{const b=new Date(d.getTime()+3*3600e3),h=b.getUTCHours(),m=String(b.getUTCMinutes()).padStart(2,'0');return `${h%12||12}:${m} ${ar?(h<12?'ص':'م'):(h<12?'AM':'PM')}`};
const at=(d:Date,w:Date,ar:boolean)=>fT(d,ar)+(fD(d,ar)===fD(w,ar)?'':` (${fD(d,ar)})`);
function params(a:any){const ar=a.lang==='Arabic',w=new Date(`${a.proc_date}T${a.proc_time.slice(0,5)}:00+03:00`);
 const names=ORDER.filter(x=>a.procs.includes(x)).map(x=>PN[x][ar?'ar':'en']).join(ar?'، ':', ');
 return [a.patient_name,a.mrn||'—',names,fD(w,ar),fT(w,ar),at(new Date(w.getTime()-6*3600e3),w,ar),at(new Date(w.getTime()-2*3600e3),w,ar)].map(t=>({type:'text',text:String(t).replace(/\s+/g,' ')}))}
const waNum=(p:string)=>{const plus=p.trim().startsWith('+'),n=p.replace(/\D/g,'');if(plus)return n;if(n.startsWith('00'))return n.slice(2);if(n.startsWith('0'))return '964'+n.slice(1);if(n.length===10&&n[0]==='7')return '964'+n;return n};

async function send(a:any){
 const claim=await sb.from('appointments').update({status:'Sending'}).eq('id',a.id).in('status',['Pending','Failed']).select('id');
 if(!claim.data?.length)return 'skipped';
 const ar=a.lang==='Arabic',hla=a.procs.length===1&&a.procs[0]==='HLA';
 try{
  const r=await fetch(`https://graph.facebook.com/${Deno.env.get('WA_API_VERSION')??'v21.0'}/${Deno.env.get('WA_PHONE_NUMBER_ID')}/messages`,{method:'POST',
   headers:{Authorization:`Bearer ${Deno.env.get('WA_ACCESS_TOKEN')}`,'Content-Type':'application/json'},
   body:JSON.stringify({messaging_product:'whatsapp',to:waNum(a.phone),type:'template',template:{name:`${hla?'hla':'procedure'}_reminder_${ar?'ar':'en'}`,language:{code:ar?'ar':'en'},components:[{type:'body',parameters:params(a).slice(0,hla?5:7)}]}})});
  const j=await r.json();
  if(!r.ok)throw new Error(j?.error?.message??'WhatsApp error '+r.status);
  await sb.from('appointments').update({status:'Sent',wa_message_id:j.messages[0].id,sent_at:new Date().toISOString(),error:null}).eq('id',a.id);return 'sent';
 }catch(e){await sb.from('appointments').update({status:'Failed',error:String(e.message??e).slice(0,300)}).eq('id',a.id);return 'failed'}
}

Deno.serve(async req=>{
 const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, content-type, x-client-info, apikey'};
 if(req.method==='OPTIONS')return new Response('ok',{headers:cors});
 let id:string|null=null;
 if(req.headers.get('x-cron-secret')!==Deno.env.get('CRON_SECRET')){
  const {data:{user}}=await sb.auth.getUser((req.headers.get('Authorization')??'').replace('Bearer ',''));
  if(!user)return new Response('unauthorized',{status:401,headers:cors});
  id=(await req.json()).id}
 let q=sb.from('appointments').select('*').eq('consent',true);
 if(id)q=q.eq('id',id);
 else{const t=new Date(Date.now()+3*3600e3+86400e3).toISOString().slice(0,10);q=q.eq('proc_date',t).eq('status','Pending')}
 const {data}=await q;const out:any={sent:0,failed:0,skipped:0};
 for(const a of data??[]){const r=await send(a);out[r==='sent'?'sent':r==='failed'?'failed':'skipped']++}
 return new Response(JSON.stringify(out),{headers:{...cors,'Content-Type':'application/json'}});
});
