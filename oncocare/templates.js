// ALL WhatsApp message texts. They contain NO patient name and NO MRN.
// Create these 10 templates in Meta (category Utility) with EXACTLY this text:
//   procedure_reminder_ar / _en  (5 variables)  used when BMA, IT or MRD is included (fasting instructions)
//   hla_reminder_ar / _en        (3 variables)  HLA without BMA/IT/MRD (no fasting, bring sibling)
//   chemo_reminder_ar / _en      (3 variables)  chemotherapy only (no fasting statement)
//   procedure_changed_ar / _en   (3 variables)   procedure_cancelled_ar / _en  (3 variables)
// Reminder: {{1}} procedure(s) {{2}} date {{3}} time {{4}} food-stop time {{5}} liquids-stop time
// HLA / changed / cancelled: {{1}} procedure(s) {{2}} date {{3}} time
// (This file replaces the TPL texts that may still be inside config.js.)
Object.assign(window.ONCOCARE,{
TPL:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود تذكيركم بموعد إجراء طفلكم لدى قسم أمراض الدم والأورام للأطفال:

🩺 الإجراء: {{1}}
📅 التاريخ: {{2}}
⏰ الوقت: {{3}}

تعليمات الصيام:
🔴 الامتناع عن الطعام قبل 6 ساعات من موعد الإجراء، أي ابتداءً من الساعة {{4}}.
🔴 الامتناع عن السوائل قبل ساعتين من موعد الإجراء، أي ابتداءً من الساعة {{5}}.

يرجى الحضور إلى المستشفى في الوقت المحدد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

نتمنى لطفلكم الصحة والسلامة ❤️
مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

This is a reminder of your child's upcoming procedure at the Pediatric Hematology & Oncology department:

🩺 Procedure: {{1}}
📅 Date: {{2}}
⏰ Time: {{3}}

Fasting instructions:
🔴 No food for 6 hours before the procedure – from {{4}}.
🔴 No liquids for 2 hours before the procedure – from {{5}}.

Please arrive at the hospital at the scheduled time. If you have any questions, please contact the department.

Wishing your child good health.
Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`},
TPL_HLA:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود تذكيركم بموعد طفلكم لدى قسم أمراض الدم والأورام للأطفال:

🩺 الإجراء: {{1}}
📅 التاريخ: {{2}}
⏰ الوقت: {{3}}

✅ لا يلزم الصيام لفحص تطابق الأنسجة (HLA).
👫 يرجى إحضار أخ/أخت الطفل معكم في الموعد.

يرجى الحضور إلى المستشفى في الوقت المحدد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

نتمنى لطفلكم الصحة والسلامة ❤️
مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

This is a reminder of your child's upcoming appointment at the Pediatric Hematology & Oncology department:

🩺 Procedure: {{1}}
📅 Date: {{2}}
⏰ Time: {{3}}

✅ No fasting is needed for the HLA blood test.
👫 Please bring your child's sibling with you to the appointment.

Please arrive at the hospital at the scheduled time. If you have any questions, please contact the department.

Wishing your child good health.
Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`},
TPL_CHEMO:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود تذكيركم بموعد طفلكم لدى قسم أمراض الدم والأورام للأطفال:

🩺 الإجراء: {{1}}
📅 التاريخ: {{2}}
⏰ الوقت: {{3}}

يرجى اتباع تعليمات الفريق المعالج لطفلكم بخصوص الطعام والأدوية.

يرجى الحضور إلى المستشفى في الوقت المحدد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

نتمنى لطفلكم الصحة والسلامة ❤️
مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

This is a reminder of your child's upcoming appointment at the Pediatric Hematology & Oncology department:

🩺 Procedure: {{1}}
📅 Date: {{2}}
⏰ Time: {{3}}

Please follow the instructions given by your child's treating team about food and medicines.

Please arrive at the hospital at the scheduled time. If you have any questions, please contact the department.

Wishing your child good health.
Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`},
TPL_CHANGED:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نود إعلامكم بأنه تم تغيير موعد إجراء طفلكم لدى قسم أمراض الدم والأورام للأطفال. يرجى اعتماد التفاصيل الجديدة أدناه وتجاهل الموعد السابق:

🩺 الإجراء: {{1}}
📅 التاريخ الجديد: {{2}}
⏰ الوقت الجديد: {{3}}

⚠️ يرجى تجاهل أي تعليمات صيام أُرسلت سابقاً. ستصلكم رسالة تذكير بالتعليمات الصحيحة قبل الموعد الجديد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

Your child's appointment at the Pediatric Hematology & Oncology department has been changed. Please follow the new details below and disregard the previous date and time:

🩺 Procedure: {{1}}
📅 New date: {{2}}
⏰ New time: {{3}}

⚠️ Please disregard any fasting instructions sent earlier. You will receive a reminder with the correct instructions before the new appointment. If you have any questions, please contact the department.

Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`},
TPL_CANCEL:{
Arabic:`السلام عليكم ورحمة الله وبركاته،

نأسف لإعلامكم بأنه تم إلغاء موعد إجراء طفلكم لدى قسم أمراض الدم والأورام للأطفال:

🩺 الإجراء: {{1}}
📅 التاريخ الملغى: {{2}}
⏰ الوقت: {{3}}

⚠️ يرجى عدم الحضور في هذا الموعد وتجاهل أي تعليمات صيام أُرسلت سابقاً. سيتواصل معكم القسم بخصوص موعد جديد. وفي حال وجود أي استفسار يرجى التواصل مع القسم.

مستشفى المجتبى لأمراض الدم وزرع النخاع`,
English:`Hello,

We are sorry to inform you that your child's appointment at the Pediatric Hematology & Oncology department has been cancelled:

🩺 Procedure: {{1}}
📅 Cancelled date: {{2}}
⏰ Time: {{3}}

⚠️ Please do not come for this appointment, and disregard any fasting instructions sent earlier. The department will contact you about a new date. If you have any questions, please contact the department.

Al-Mujtaba Hospital for Hematology & Bone Marrow Transplant`}
});
