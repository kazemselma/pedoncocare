# OncoCare – setup guide

Three parts: **Supabase** (shared database, staff logins, daily sender), **Meta WhatsApp Business** (the sending number), and a **static host** for the app.

## 1. Supabase (shared data + logins)
1. Create a project at supabase.com. Note the Project URL, the `anon` key and the `service_role` key (never put the service key in the app).
2. SQL Editor → paste `supabase/schema.sql`. Run it as is. (The daily schedule is a separate file, `supabase/schedule.sql`, run at the very end.)
3. Authentication → Providers → Email: **turn off "Allow new users to sign up"**. Then Authentication → Users → **Invite user** for every nurse and resident. Only invited staff can sign in.
4. Edit `config.js`: set `url` and `key` (anon key).

## 2. WhatsApp Business (Meta)
1. business.facebook.com → create a Meta Business account → **Business verification** (hospital documents; takes several days).
2. developers.facebook.com → create an app → add **WhatsApp**. Add the department's dedicated phone number (must not be registered in WhatsApp/WhatsApp Business app) and verify it by SMS/voice. Add a payment method.
3. WhatsApp Manager → **Message templates** → create four **Utility** templates:
   - `procedure_reminder_ar` – Arabic – `TPL.Arabic` from `config.js` (7 variables: name, MRN, procedure, date, time, food time, liquid time)
   - `procedure_reminder_en` – English – `TPL.English`
   - `hla_reminder_ar` – Arabic – `TPL_HLA.Arabic` (5 variables: name, MRN, test, date, time) – used when HLA matching is the ONLY procedure: no fasting, bring sibling
   - `hla_reminder_en` – English – `TPL_HLA.English`
   The text must stay identical to `config.js`, otherwise the in-app preview will not match what is sent. Wait for approval.
4. Create a **System User** with a permanent access token (permissions `whatsapp_business_messaging`, `whatsapp_business_management`). Note the **Phone number ID** and the **App Secret**.

## 3. Deploy the functions (Supabase CLI)
```
supabase login && supabase link --project-ref PROJECT_REF
supabase secrets set CRON_SECRET=... WA_ACCESS_TOKEN=... WA_PHONE_NUMBER_ID=... META_APP_SECRET=... WA_VERIFY_TOKEN=choose-any-string
supabase functions deploy send-reminders --no-verify-jwt
supabase functions deploy whatsapp-webhook --no-verify-jwt
```
Meta → WhatsApp → Configuration → Webhook: callback URL `https://PROJECT_REF.supabase.co/functions/v1/whatsapp-webhook`, verify token = `WA_VERIFY_TOKEN`, subscribe to **messages**. If Meta's Graph API version has moved on, set `WA_API_VERSION` (default `v21.0`).

## 4. Host the app
Upload this folder (`index.html`, `config.js`, `sw.js`, `manifest.webmanifest`, `icons/`) to any HTTPS static host (Netlify, Cloudflare Pages, GitHub Pages). Staff open the link in Chrome → **Install app**.

## How it works day to day
- A nurse registers a procedure and ticks the caregiver-consent box. Everyone sees it instantly.
- Every day at **08:00 Baghdad time** the sender messages caregivers of all procedures happening **tomorrow**. Change the hour by editing the cron schedule (UTC) in the SQL.
- Status updates itself: Pending → Sent → Delivered → Read, or **Failed** with the reason (phone the family).
- Registered after 8:00 the day before? Open it in Schedule → **Send now**.

## Known limits
No separate roles yet (every invited user can add, edit and delete), no per-user audit view (the creator is stored in `created_by`), no inbox for caregiver replies – decide who monitors the WhatsApp number. Check hospital and Iraqi data-protection rules before storing real patient data in a cloud region.

## Notes
`send-reminders` must also be deployed with **Verify JWT off** (it checks the caller itself); otherwise the daily 8:00 job is rejected. Run `supabase/schedule.sql` last. Supabase is retiring the old `anon`/`service_role` keys by end of 2026: use the **publishable** key in `config.js`.
