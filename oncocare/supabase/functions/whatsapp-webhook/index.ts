// Meta calls this with delivery results. Deploy with --no-verify-jwt.
import {createClient} from 'npm:@supabase/supabase-js@2';
const sb=createClient(Deno.env.get('SUPABASE_URL')!,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')??JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS')??'{}')['default']!);
async function validSig(raw:string,sig:string|null){
 const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(Deno.env.get('META_APP_SECRET')!),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const mac=new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(raw)));
 return 'sha256='+[...mac].map(b=>b.toString(16).padStart(2,'0')).join('')===sig}
Deno.serve(async req=>{
 const u=new URL(req.url);
 if(req.method==='GET')return u.searchParams.get('hub.verify_token')===Deno.env.get('WA_VERIFY_TOKEN')?new Response(u.searchParams.get('hub.challenge')):new Response('forbidden',{status:403});
 const raw=await req.text();
 if(!(await validSig(raw,req.headers.get('x-hub-signature-256'))))return new Response('bad signature',{status:401});
 for(const e of JSON.parse(raw).entry??[])for(const c of e.changes??[])for(const s of c.value?.statuses??[]){
  if(s.status==='delivered')await sb.from('appointments').update({status:'Delivered'}).eq('wa_message_id',s.id).eq('status','Sent');
  else if(s.status==='read')await sb.from('appointments').update({status:'Read'}).eq('wa_message_id',s.id).in('status',['Sent','Delivered']);
  else if(s.status==='failed')await sb.from('appointments').update({status:'Failed',error:s.errors?.[0]?.title??'Delivery failed'}).eq('wa_message_id',s.id);
 }
 return new Response('ok');
});
