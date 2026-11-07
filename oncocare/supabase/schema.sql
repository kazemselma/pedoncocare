-- Run once in Supabase > SQL Editor.
create extension if not exists pg_cron;
create extension if not exists pg_net;

create table public.appointments(
 id uuid primary key default gen_random_uuid(),
 patient_name text not null,
 mrn text not null,
 phone text not null,
 procs text[] not null check (cardinality(procs)>0),
 proc_date date not null,
 proc_time time not null,
 lang text not null default 'Arabic' check (lang in ('Arabic','English')),
 consent boolean not null default false,
 status text not null default 'Pending' check (status in ('Pending','Sending','Sent','Delivered','Read','Failed')),
 wa_message_id text,
 error text,
 sent_at timestamptz,
 created_by uuid default auth.uid(),
 created_at timestamptz not null default now());
create index on public.appointments(proc_date,status);
create index on public.appointments(wa_message_id);

alter table public.appointments enable row level security;
-- Only signed-in (invited) staff can use the table. Anonymous visitors get nothing.
create policy staff_all on public.appointments for all to authenticated using(true) with check(true);

alter publication supabase_realtime add table public.appointments;
