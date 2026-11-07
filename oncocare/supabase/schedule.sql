-- Run LAST, after the functions are deployed. Replace PROJECT_REF and CRON_SECRET first.
create extension if not exists pg_cron;
create extension if not exists pg_net;
-- Daily sender: 05:00 UTC = 08:00 Baghdad. Replace PROJECT_REF and CRON_SECRET (same value you set as a function secret).
select cron.schedule('oncocare-daily-reminders','0 5 * * *',$$
 select net.http_post(
  url:='https://PROJECT_REF.supabase.co/functions/v1/send-reminders',
  headers:='{"Content-Type":"application/json","x-cron-secret":"CRON_SECRET"}'::jsonb,
  body:='{}'::jsonb)$$);
