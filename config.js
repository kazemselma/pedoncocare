// 1) Fill in url + key from Supabase > Project Settings > API (use the anon/public key, never the service key).
// 2) The four templates below must be created in Meta WhatsApp Manager with EXACTLY this text
//    (names: procedure_reminder_ar / _en and hla_reminder_ar / _en). See SETUP.md.
window.ONCOCARE={
url:'https://YOUR-PROJECT.supabase.co',
key:'YOUR-ANON-PUBLIC-KEY',
TPL:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود تذكيركم بموعد إجراء طفلكم لدى قسم أمراض الدم والأورام للأطفال:

👤 اسم المريض: {{1}}
🆔 رقم الملف الطبي (MRN): {{2}}
🩺 الإجراء: {{3}}
📅 التاريخ: {{4}}
⏰ الوقت: {{5}}

تعليمات الصيام:
🔴 الامتناع عن الطعام قبل 6 ساعات من موعد الإجراء، أي ابتداءً من الساعة {{6}}.
🔴 الامتناع عن السوائل قبل ساعتين من موعد الإجراء، أي ابتداءً من الساعة {{7}}.

يرجى الحضور إلى المستشفى في الوقت المحدد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

نتمنى لطفلكم الصحة والسلامة ❤️
مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

This is a reminder of your child's upcoming procedure at the Pediatric Hematology & Oncology department:

👤 Patient: {{1}}
🆔 MRN: {{2}}
🩺 Procedure: {{3}}
📅 Date: {{4}}
⏰ Time: {{5}}

Fasting instructions:
🔴 No food for 6 hours before the procedure – from {{6}}.
🔴 No liquids for 2 hours before the procedure – from {{7}}.

Please arrive at the hospital at the scheduled time. If you have any questions, please contact the department.

Wishing your child good health.
Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`},
// Used ONLY when HLA matching is the only procedure selected (no fasting, bring sibling).
// Create as templates hla_reminder_ar and hla_reminder_en in Meta.
TPL_HLA:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود تذكيركم بموعد فحص طفلكم لدى قسم أمراض الدم والأورام للأطفال:

👤 اسم المريض: {{1}}
🆔 رقم الملف الطبي (MRN): {{2}}
🩺 الفحص: {{3}}
📅 التاريخ: {{4}}
⏰ الوقت: {{5}}

✅ لا يلزم الصيام لهذا الفحص.
👫 يرجى إحضار أخ/أخت الطفل معكم في الموعد.

يرجى الحضور إلى المستشفى في الوقت المحدد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

نتمنى لطفلكم الصحة والسلامة ❤️
مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

This is a reminder of your child's upcoming test at the Pediatric Hematology & Oncology department:

👤 Patient: {{1}}
🆔 MRN: {{2}}
🩺 Test: {{3}}
📅 Date: {{4}}
⏰ Time: {{5}}

✅ No fasting is needed for this test.
👫 Please bring your child's sibling with you to the appointment.

Please arrive at the hospital at the scheduled time. If you have any questions, please contact the department.

Wishing your child good health.
Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`}
};
