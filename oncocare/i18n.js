/* OncoCare i18n: EN | AR interface switch (full right-to-left).
   How it works (plain words): the app writes English text on screen. When Arabic is on,
   this file looks up each piece of text in the dictionary below and swaps it for Arabic.
   It remembers the original English of every piece, so switching back restores it exactly.
   It never touches patient data, the WhatsApp message text, or the message-language buttons. */
(function(){'use strict';
var LS='oncocare-lang',lang='en',D=Object.create(null),SIZE=0;
function add(l){for(var i=0;i<l.length;i+=2){if(!(l[i] in D))SIZE++;D[l[i]]=l[i+1]}}

/* ---------- dictionary: exact English text -> Arabic ---------- */
add([
/* header, titles, footer */
'OncoCare Reminder','تذكير OncoCare',
'Procedure Reminder · Pediatric Hematology & Oncology','تذكير الإجراءات · أمراض الدم والأورام عند الأطفال',
'OncoCare · Pediatric Hematology & Oncology','OncoCare · أمراض الدم والأورام عند الأطفال',
'Procedure management','إدارة الإجراءات',
'Register procedures and send caregiver reminders on WhatsApp.','سجّل الإجراءات وأرسل تذكيرات لمقدّمي الرعاية عبر واتساب.',
'Language','اللغة',
'Install OncoCare','تثبيت OncoCare',
/* sign in */
'Staff sign in','تسجيل دخول الموظفين',
'Request access','طلب الوصول',
'Use your department account. New staff can request access; the administrator must approve it.','استخدم حساب القسم. يمكن للموظفين الجدد طلب الوصول، ويجب أن يوافق عليه المسؤول.',
'Full name *','الاسم الكامل *',
'Email','البريد الإلكتروني',
'Password','كلمة المرور',
'Confirm password *','تأكيد كلمة المرور *',
'Show password','إظهار كلمة المرور',
'Hide password','إخفاء كلمة المرور',
'Sign in','تسجيل الدخول',
'New staff? Request access','موظف جديد؟ اطلب الوصول',
'Already approved? Sign in','تمت الموافقة عليك؟ سجّل الدخول',
'Send access request','إرسال طلب الوصول',
'Please enter your full name.','يرجى إدخال اسمك الكامل.',
'Password must be at least 8 characters.','يجب ألا تقل كلمة المرور عن 8 أحرف.',
'The two passwords do not match.','كلمتا المرور غير متطابقتين.',
'Request sent. If Supabase emails you a confirmation link, open it, then sign in.','تم إرسال الطلب. إذا أرسل لك Supabase رابط تأكيد بالبريد الإلكتروني، فافتحه ثم سجّل الدخول.',
'The app could not load its sign-in library. Check the internet connection (or blocked websites) and refresh.','تعذّر على التطبيق تحميل مكتبة تسجيل الدخول. تحقّق من اتصال الإنترنت (أو المواقع المحجوبة) ثم حدّث الصفحة.',
'The file config.js is missing from the website. Upload the whole folder again.','الملف config.js غير موجود في الموقع. ارفع المجلد كاملاً من جديد.',
'The app could not reach the server. Close other OncoCare tabs or windows, then refresh with Ctrl+Shift+R.','تعذّر على التطبيق الوصول إلى الخادم. أغلق علامات تبويب أو نوافذ OncoCare الأخرى ثم حدّث الصفحة بالضغط على Ctrl+Shift+R.',
/* pending */
'Waiting for approval','بانتظار الموافقة',
'Your request was sent. The administrator must approve it before you can see any patient information. Sign in again later, or press “Check again”.','تم إرسال طلبك. يجب أن يوافق عليه المسؤول قبل أن تتمكن من رؤية أي معلومات عن المرضى. سجّل الدخول لاحقاً، أو اضغط «تحقق مرة أخرى».',
'Your access request was declined. Please contact the department administrator.','تم رفض طلب الوصول. يرجى التواصل مع مسؤول القسم.',
'Check again','تحقق مرة أخرى',
'Sign out','تسجيل الخروج',
/* privacy key */
'Department privacy key','مفتاح خصوصية القسم',
'Patient names and MRNs are scrambled with a secret key that is never sent online. Enter the department key once on this device. Ask the owner if you do not have it.','تُشفَّر أسماء المرضى وأرقام ملفاتهم (MRN) بمفتاح سري لا يُرسل عبر الإنترنت أبداً. أدخل مفتاح القسم مرة واحدة على هذا الجهاز. اسأل المالك إن لم يكن لديك.',
'Privacy key','مفتاح الخصوصية',
'Unlock','فتح',
'The key must be at least 12 characters. A short phrase of several words works well.','يجب ألا يقل المفتاح عن 12 حرفاً. تصلح عبارة قصيرة من عدة كلمات.',
'That is not the department key. Check it and try again.','هذا ليس مفتاح القسم. تحقّق منه وحاول مرة أخرى.',
'The owner has not created the department key yet. Ask the owner to unlock the app first.','لم ينشئ المالك مفتاح القسم بعد. اطلب من المالك فتح التطبيق أولاً.',
'You are creating the department privacy key for the first time.','أنت تنشئ مفتاح خصوصية القسم لأول مرة.',
'Write it down and keep it safe. If it is ever lost, patients saved before cannot be found by search.','دوّنه واحفظه في مكان آمن. إذا فُقد، فلن يمكن العثور على المرضى المحفوظين سابقاً بالبحث.',
'Continue?','هل تريد المتابعة؟',
'The privacy key is not unlocked on this device.','مفتاح الخصوصية غير مفتوح على هذا الجهاز.',
/* counters, tabs */
'Registered','مسجّلة',
'Pending','قيد الانتظار',
'Sent','تم الإرسال',
'Dashboard','لوحة المتابعة',
'Register','تسجيل',
'Schedule','الجدول',
'Account','الحساب',
/* dashboard header and filters */
'Welcome to OncoCare','مرحباً بك في OncoCare',
'Refresh','تحديث',
'Operations','العمليات',
'QI Analytics','تحليلات الجودة (QI)',
'Category','الفئة',
'All procedures','كل الإجراءات',
'Appointment readiness','جاهزية المواعيد',
'(today and later)','(اليوم وما بعده)',
"Today's Procedures",'إجراءات اليوم',
'Requires Staff Attention','تحتاج إلى انتباه الموظفين',
'Recent Activity','النشاط الأخير',
/* readiness (green = reminder sent, yellow = pending, red = needs action) */
'Ready','جاهز',
'Needs action','يحتاج إلى إجراء',
'reminder sent','تم إرسال التذكير',
'not due or not sent yet','لم يحن موعده أو لم يُرسل بعد',
'failed, overdue or family not told','فشل أو تأخر أو لم تُبلَّغ الأسرة',
'Completed and missed appointments are not recorded in the app yet, so they are not shown.','المواعيد المكتملة والفائتة لا تُسجَّل في التطبيق بعد، لذلك لا تظهر.',
/* operations cards */
"Today's appointments",'مواعيد اليوم',
'Upcoming (after today)','القادمة (بعد اليوم)',
'Pending reminders','تذكيرات قيد الانتظار',
'Failed WhatsApp messages','رسائل واتساب الفاشلة',
'No procedures on this day.','لا توجد إجراءات في هذا اليوم.',
'Nothing needs attention right now.','لا شيء يحتاج إلى انتباه الآن.',
/* attention list */
'Cancelled – family not notified','أُلغي – لم تُبلَّغ الأسرة',
'Open & notify','افتح وأبلغ',
'Reminder failed – retry sending','فشل التذكير – أعد المحاولة',
'Open & retry','افتح وأعد المحاولة',
'Appointment today – no reminder sent','الموعد اليوم – لم يُرسل تذكير',
'Appointment tomorrow – reminder not sent yet','الموعد غداً – لم يُرسل التذكير بعد',
'Open & send','افتح وأرسل',
'Reminder sent – family has not confirmed','أُرسل التذكير – لم تؤكد الأسرة',
'Open','فتح',
'Appointment changed – family not notified','تغيّر الموعد – لم تُبلَّغ الأسرة',
'Incomplete: caregiver phone missing','بيانات ناقصة: رقم هاتف مقدّم الرعاية مفقود',
'Incomplete: MRN or name code not saved (cannot be searched)','بيانات ناقصة: لم يُحفظ رمز MRN أو الاسم (لا يمكن البحث عنه)',
'View','عرض',
/* QI analytics */
'Period','الفترة',
'(by appointment date, Iraq time)','(حسب تاريخ الموعد، بتوقيت العراق)',
'30d','30 يوماً',
'90d','90 يوماً',
'6m','6 أشهر',
'12m','12 شهراً',
'Custom','مخصص',
'Key indicators','المؤشرات الرئيسية',
'Monthly appointment volume','عدد المواعيد شهرياً',
'teal = scheduled · red = cancelled','الأزرق المخضر = مجدول · الأحمر = ملغى',
'Readiness trend by month','اتجاه الجاهزية حسب الشهر',
'green = reminder sent · yellow = pending · red = needed action','الأخضر = تم إرسال التذكير · الأصفر = قيد الانتظار · الأحمر = يحتاج إلى إجراء',
'Monthly attendance trend','اتجاه الحضور شهرياً',
'Not available. Attendance, no-shows and preparation are not recorded in the app yet, so no monthly attendance figures can be shown.','غير متاح. الحضور والغياب والتحضير لا تُسجَّل في التطبيق بعد، لذلك لا يمكن عرض أرقام الحضور الشهرية.',
'Communication Performance','أداء التواصل',
'Procedure classification','تصنيف الإجراءات',
'Daily volume','العدد اليومي',
'Monthly summary (de-identified)','الملخص الشهري (بدون بيانات تعريفية)',
'Download summary (CSV)','تنزيل الملخص (CSV)',
'Not available','غير متاح',
'Not available (not recorded)','غير متاح (غير مسجَّل)',
'Appointments registered','المواعيد المسجّلة',
'Cancelled (cancellation rate)','الملغاة (نسبة الإلغاء)',
'Attendance rate','نسبة الحضور',
'No-show rate','نسبة الغياب',
'Preparation compliance','الالتزام بالتحضير',
'Green: reminder sent','الأخضر: تم إرسال التذكير',
'Upcoming appointments','المواعيد القادمة',
'Individual patients','عدد المرضى',
'Reminders due','التذكيرات المستحقة',
'Successfully submitted','أُرسلت بنجاح',
'Delivered (reported by WhatsApp)','تم التسليم (بحسب واتساب)',
'Failed','فشل',
'Sent manually','أُرسلت يدوياً',
'Confirmed by family','أكدتها الأسرة',
'Family confirmation rate (of reminders sent)','نسبة تأكيد الأسرة (من التذكيرات المرسلة)',
'Not yet attempted','لم تُجرَّب بعد',
'Sending success (submitted ÷ attempted)','نجاح الإرسال (المرسل ÷ المحاول)',
'Coverage (submitted ÷ due)','التغطية (المرسل ÷ المستحق)',
'Delivery confirmation is not available until automatic WhatsApp sending is in use.','تأكيد التسليم غير متاح إلى أن يُستخدم الإرسال التلقائي عبر واتساب.',
'No appointments in this period.','لا توجد مواعيد في هذه الفترة.',
'No procedures in this period.','لا توجد إجراءات في هذه الفترة.',
/* activity log */
'New appointment registered','تم تسجيل موعد جديد',
'Appointment edited','تم تعديل الموعد',
'Appointment rescheduled','تم تغيير موعد الإجراء',
'Appointment cancelled','تم إلغاء الموعد',
'Appointment deleted','تم حذف الموعد',
'Reminder submitted to WhatsApp','أُرسل التذكير إلى واتساب',
'Reminder marked as sent (manual)','تم تعليم التذكير كمرسل (يدوياً)',
'Reminder failed','فشل التذكير',
'Change/cancellation notice sent','أُرسل إشعار التغيير/الإلغاء',
'Notice failed','فشل الإشعار',
'Family confirmed the appointment','أكدت الأسرة الموعد',
'Family confirmation removed','أُزيل تأكيد الأسرة',
'Staff access requested','طُلب وصول موظف',
'Staff access approved','تمت الموافقة على وصول موظف',
'Staff access declined','رُفض وصول موظف',
'Staff access removed','أُزيل وصول موظف',
'The activity log is not set up yet. Run dashboard.sql in Supabase.','سجل النشاط غير مُعدّ بعد. شغّل الملف dashboard.sql في Supabase.',
'No activity recorded yet.','لم يُسجَّل أي نشاط بعد.',
'Clear recent activity','مسح النشاط الأخير',
'Clear all recent activity for everyone?','هل تريد مسح كل النشاط الأخير للجميع؟',
'This cannot be undone. It removes the activity list shown here; appointments are not affected.','لا يمكن التراجع عن هذا. سيُزيل قائمة النشاط المعروضة هنا؛ ولا تتأثر المواعيد.',
'Nothing was deleted. The database does not allow administrators to clear activity yet. Run clear-activity.sql in Supabase.','لم يُحذف شيء. قاعدة البيانات لا تسمح للمسؤولين بمسح النشاط بعد. شغّل الملف clear-activity.sql في Supabase.',
/* register form */
'Register a procedure','تسجيل إجراء',
'Edit procedure','تعديل الإجراء',
'Saved procedures are visible to all department staff.','الإجراءات المحفوظة تظهر لجميع موظفي القسم.',
'Patient name *','اسم المريض *',
'Medical record number (MRN) *','رقم الملف الطبي (MRN) *',
'Diagnosis','التشخيص',
'(optional · shown on our schedule only, never sent to the family)','(اختياري · يظهر في جدولنا فقط ولا يُرسل إلى الأسرة أبداً)',
'Privacy: the name and MRN are processed on this device only. Online, only the initials and scrambled codes are saved. The diagnosis and phone number are saved encrypted.','الخصوصية: يُعالَج الاسم ورقم MRN على هذا الجهاز فقط. عبر الإنترنت تُحفظ الأحرف الأولى ورموز مشفّرة فقط. ويُحفظ التشخيص ورقم الهاتف مشفّرَين.',
'Caregiver WhatsApp number *','رقم واتساب لمقدّم الرعاية *',
'Procedure(s)','الإجراء/الإجراءات',
'tap to select one or more','اضغط لاختيار واحد أو أكثر',
'HLA matching','تطابق HLA',
'Please choose at least one procedure.','يرجى اختيار إجراء واحد على الأقل.',
'Infant on breast milk only','رضيع يتغذى على حليب الأم فقط',
'breast milk stops','يتوقف حليب الأم',
'before the procedure (instead of 6 hours for food)','قبل الإجراء (بدلاً من 6 ساعات للطعام)',
'Procedure date *','تاريخ الإجراء *',
'Procedure time *','وقت الإجراء *',
'Message language','لغة الرسالة',
'Arabic','العربية',
'English','الإنجليزية',
'Fasting times (calculated from procedure time)','أوقات الصيام (تُحسب من وقت الإجراء)',
'Choose a procedure to see the fasting information','اختر إجراءً لعرض معلومات الصيام',
'No sedation procedure selected','لم يُختر إجراء يتطلب تخديراً',
'No solid food · 6 hours before','لا طعام صلب · قبل 6 ساعات',
'No liquids · 2 hours before','لا سوائل · قبل ساعتين',
'No breast milk · 4 hours before','لا حليب أم · قبل 4 ساعات',
'No other liquids · 2 hours before','لا سوائل أخرى · قبل ساعتين',
'No fasting needed (HLA blood test)','لا حاجة للصيام (فحص دم HLA)',
'Bring sibling','أحضروا الأخ أو الأخت',
'No fasting instruction is sent','لا تُرسل تعليمات صيام',
"Confirm with the child's anesthesia team; individual instructions may differ.",'تأكّد من فريق التخدير المعالج للطفل؛ قد تختلف التعليمات من حالة لأخرى.',
'Message preview','معاينة الرسالة',
'Updates automatically','تتحدّث تلقائياً',
'Choose at least one procedure and set the date and time to see the message.','اختر إجراءً واحداً على الأقل وحدّد التاريخ والوقت لعرض الرسالة.',
'The caregiver agreed to receive WhatsApp reminders about this procedure. *','وافق مقدّم الرعاية على استلام تذكيرات واتساب عن هذا الإجراء. *',
'Save procedure','حفظ الإجراء',
'Save changes','حفظ التعديلات',
'Cancel editing','إلغاء التعديل',
'leave blank to keep','اتركه فارغاً للإبقاء عليه',
'This family was already messaged. If you change the date, time or procedures, you will be asked to send them an “appointment changed” notice.','سبق أن أُرسلت رسالة إلى هذه الأسرة. إذا غيّرت التاريخ أو الوقت أو الإجراءات فسيُطلب منك إرسال إشعار «تغيّر الموعد» إليهم.',
'No message has been sent yet, so the family will receive the updated details.','لم تُرسل أي رسالة بعد، لذا ستصل الأسرة التفاصيل المحدّثة.',
"Enter the caregiver's WhatsApp number.",'أدخل رقم واتساب لمقدّم الرعاية.',
'Iraqi mobile numbers start with 07.','أرقام الموبايل العراقية تبدأ بـ 07.',
'Enter the patient name and the MRN.','أدخل اسم المريض ورقم MRN.',
'Please enter a phone number.','يرجى إدخال رقم هاتف.',
'Possible duplicate: this patient (same MRN or same name) already has a procedure on this date:','احتمال تكرار: لدى هذا المريض (نفس رقم MRN أو نفس الاسم) إجراء في هذا التاريخ:',
'Save anyway?','هل تريد الحفظ على أي حال؟',
'This family was already messaged about the old date/time.','سبق أن أُرسلت رسالة إلى هذه الأسرة عن الموعد القديم.',
'Send them the “appointment changed” notice on WhatsApp now?','هل تريد إرسال إشعار «تغيّر الموعد» إليهم على واتساب الآن؟',
'(If you press Cancel, you can send it later from this screen. The schedule will keep reminding you.)','(إذا ضغطت «إلغاء» فيمكنك إرساله لاحقاً من هذه الشاشة. وسيستمر الجدول بتذكيرك.)',
/* schedule */
'Procedure schedule','جدول الإجراءات',
'Reminders go out automatically at 8:00 AM the day before. Procedures marked “Send today” are due.','تُرسل التذكيرات تلقائياً الساعة 8:00 ص في اليوم السابق. الإجراءات المعلَّمة «أرسل اليوم» مستحقة.',
'Search name, MRN, phone, diagnosis','ابحث بالاسم أو MRN أو الهاتف أو التشخيص',
'Upcoming','القادمة',
'Past','السابقة',
'Cancelled','ملغاة',
'All','الكل',
'Select','تحديد',
'Select all shown','تحديد كل المعروض',
'Done selecting','تم التحديد',
'Clear filter','مسح التصفية',
'No procedures registered yet.','لا توجد إجراءات مسجّلة بعد.',
'No procedure matches your search.','لا يوجد إجراء يطابق بحثك.',
'Nothing in this view.','لا شيء في هذا العرض.',
'No exact match. Showing procedures with the same initials: check the details carefully.','لا يوجد تطابق تام. تُعرض الإجراءات ذات الأحرف الأولى نفسها: تحقّق من التفاصيل بعناية.',
'infant','رضيع',
'(locked)','(مقفل)',
'Family confirmed','أكدت الأسرة',
'Send today','أرسل اليوم',
'Cancelled · tell family','ملغى · أبلغ الأسرة',
'Notice failed','فشل الإشعار',
'Tell family: changed','أبلغ الأسرة: تغيّر الموعد',
'Sending','جارٍ الإرسال',
'Delivered','تم التسليم',
'Read','تمت القراءة',
'read','مقروءة',
'delivered','تم تسليمه',
'sent','أُرسل',
'failed','فشل',
'sending…','جارٍ الإرسال…',
'not sent yet','لم يُرسل بعد',
'Sending…','جارٍ الإرسال…',
'Sent (submitted)','أُرسل (تم تسليمه لواتساب)',
'Sent (manual)','أُرسل (يدوياً)',
/* fasting text on dashboard rows */
'Fasting required (breast-milk infant: 4 h)','يتطلب الصيام (رضيع على حليب الأم: 4 ساعات)',
'Fasting required','يتطلب الصيام',
'No fasting (HLA)','لا صيام (HLA)',
'No fasting instruction','لا تعليمات صيام',
'Confirmed','تم التأكيد',
/* detail */
'Caregiver message','رسالة مقدّم الرعاية',
'This procedure was cancelled.','تم إلغاء هذا الإجراء.',
'Family confirmed the appointment','أكدت الأسرة الموعد',
'Undo','تراجع',
'Send now on WhatsApp','أرسل الآن عبر واتساب',
'Retry sending','أعد محاولة الإرسال',
'Resend','أعد الإرسال',
'Copy message','نسخ الرسالة',
'Copied!','تم النسخ!',
'Open WhatsApp (manual)','فتح واتساب (يدوياً)',
'Mark as sent (manual)','تعليم كمرسل (يدوياً)',
'Edit','تعديل',
'Cancel procedure','إلغاء الإجراء',
'Delete','حذف',
'“Send now” uses the approved template and updates the status automatically. Manual WhatsApp opens a draft from your own phone and is not tracked.','«أرسل الآن» يستخدم القالب المعتمد ويحدّث الحالة تلقائياً. أما واتساب اليدوي فيفتح مسودة من هاتفك الشخصي ولا يُتتبَّع.',
'Cancellation notice','إشعار الإلغاء',
'Appointment-change notice','إشعار تغيير الموعد',
'Send notice on WhatsApp','أرسل الإشعار عبر واتساب',
'Retry sending notice','أعد محاولة إرسال الإشعار',
'Resend notice','أعد إرسال الإشعار',
'Copy','نسخ',
'Mark as sent','تعليم كمرسل',
'Message text missing: update templates.js on the website.','نص الرسالة مفقود: حدّث الملف templates.js في الموقع.',
'Notice texts are missing: add templates.js to the website.','نصوص الإشعارات مفقودة: أضف الملف templates.js إلى الموقع.',
'This message was already sent. Send it again?','أُرسلت هذه الرسالة من قبل. هل تريد إرسالها مرة أخرى؟',
'This notice was already sent. Send it again?','أُرسل هذا الإشعار من قبل. هل تريد إرساله مرة أخرى؟',
'Remove the family confirmation for this appointment?','هل تريد إزالة تأكيد الأسرة لهذا الموعد؟',
'Mark the reminder as sent? Only do this if you already sent it to the family yourself.','هل تريد تعليم التذكير كمرسل؟ افعل ذلك فقط إذا أرسلته إلى الأسرة بنفسك.',
'Mark this notice as sent? Only do this if you already told the family.','هل تريد تعليم هذا الإشعار كمرسل؟ افعل ذلك فقط إذا أبلغت الأسرة بنفسك.',
'Clipboard unavailable. Select and copy the message manually.','الحافظة غير متاحة. حدّد الرسالة وانسخها يدوياً.',
'Delete this procedure for everyone?','هل تريد حذف هذا الإجراء للجميع؟',
'Cancel this procedure?','هل تريد إلغاء هذا الإجراء؟',
'The family was already messaged, so you will be asked to send them a cancellation notice.','سبق أن أُرسلت رسالة إلى الأسرة، لذا سيُطلب منك إرسال إشعار إلغاء إليهم.',
'The family has not been messaged yet, so no notice is needed.','لم تُرسل رسالة إلى الأسرة بعد، لذا لا حاجة لإشعار.',
'This cannot be undone.','لا يمكن التراجع عن هذا.',
'Send the cancellation notice to the family on WhatsApp now?','هل تريد إرسال إشعار الإلغاء إلى الأسرة عبر واتساب الآن؟',
'This cannot be undone and removes them for everyone. They will also stop counting in the dashboard statistics (the activity log keeps a record of the deletion).','لا يمكن التراجع عن هذا، وسيُحذف للجميع. كما ستتوقف عن الظهور في إحصاءات لوحة المتابعة (ويحتفظ سجل النشاط بسجل للحذف).',
/* account */
'Forget privacy key on this device','نسيان مفتاح الخصوصية على هذا الجهاز',
'Share this app (QR code)','مشاركة التطبيق (رمز QR)',
'Colleagues can scan this code with their phone camera. New staff tap “Request access” and wait for approval.','يمكن للزملاء مسح هذا الرمز بكاميرا هواتفهم. يضغط الموظفون الجدد «طلب الوصول» وينتظرون الموافقة.',
'QR code to open OncoCare','رمز QR لفتح OncoCare',
'QR code','رمز QR',
'Show full screen','عرض بملء الشاشة',
'Copy link','نسخ الرابط',
'Download QR picture','تنزيل صورة QR',
'Scan to open OncoCare','امسح الرمز لفتح OncoCare',
'Tap anywhere to close','اضغط في أي مكان للإغلاق',
'Copy this link:','انسخ هذا الرابط:',
'Open the app from its website address to see the QR code.','افتح التطبيق من عنوان موقعه لرؤية رمز QR.',
'Phone notifications','إشعارات الهاتف',
'Turn on notifications on this device','تشغيل الإشعارات على هذا الجهاز',
'Turn off notifications on this device','إيقاف الإشعارات على هذا الجهاز',
'Notifications are ON for this device.','الإشعارات مفعّلة على هذا الجهاز.',
'Get a notification when an appointment is added.','احصل على إشعار عند إضافة موعد.',
'Get a notification when an appointment is added or when someone asks for access.','احصل على إشعار عند إضافة موعد أو عندما يطلب شخص ما الوصول.',
'Notifications are not available here. On iPhone, first add the app to your Home Screen (Share → Add to Home Screen) and open it from there.','الإشعارات غير متاحة هنا. على آيفون، أضف التطبيق أولاً إلى الشاشة الرئيسية (مشاركة ← إضافة إلى الشاشة الرئيسية) ثم افتحه من هناك.',
'Notifications are not available here. On iPhone, add the app to the Home Screen and open it from there.','الإشعارات غير متاحة هنا. على آيفون، أضف التطبيق إلى الشاشة الرئيسية ثم افتحه من هناك.',
'Notifications are not set up yet: the vapid line is missing in config.js.','الإشعارات غير مُعدّة بعد: سطر vapid مفقود في الملف config.js.',
'Notifications were not allowed in this browser.','لم يُسمح بالإشعارات في هذا المتصفح.',
'Phone number protection (owner)','حماية أرقام الهواتف (المالك)',
'Caregiver numbers are saved encrypted. The sending program needs a server key to read them when it sends a message.','تُحفظ أرقام مقدّمي الرعاية مشفّرة. يحتاج برنامج الإرسال إلى مفتاح الخادم لقراءتها عند إرسال الرسالة.',
'Show server key','عرض مفتاح الخادم',
'Encrypt numbers saved earlier','تشفير الأرقام المحفوظة سابقاً',
'Copy this key. In Supabase go to Edge Functions, then Secrets, and add a secret named PHONE_KEY with this value. Keep it private.','انسخ هذا المفتاح. في Supabase افتح Edge Functions ثم Secrets وأضف سراً باسم PHONE_KEY بهذه القيمة. أبقِه خاصاً.',
'Nothing to do: no readable phone numbers are saved.','لا شيء لفعله: لا توجد أرقام هواتف مقروءة محفوظة.',
'Staff access','وصول الموظفين',
'Approve colleagues who asked for access. Pending requests are listed first.','وافق على الزملاء الذين طلبوا الوصول. الطلبات المعلّقة تُعرض أولاً.',
'Owner','المالك',
'Administrator','مسؤول',
'Approved','تمت الموافقة',
'Declined','مرفوض',
'Remove access','إزالة الوصول',
'Approve','موافقة',
'Decline','رفض',
'Remove admin','إزالة صلاحية المسؤول',
'Make admin','جعله مسؤولاً',
'Decline this request? They will not get access.','هل تريد رفض هذا الطلب؟ لن يحصلوا على الوصول.',
'Remove administrator rights?','هل تريد إزالة صلاحيات المسؤول؟',
'Allow this person to approve other staff?','هل تريد السماح لهذا الشخص بالموافقة على موظفين آخرين؟',
'Please confirm again','يرجى التأكيد مرة أخرى'
]);

/* ---------- names of days and months (Iraqi Arabic, as in the WhatsApp messages) ---------- */
var DAY={Sunday:'الأحد',Monday:'الاثنين',Tuesday:'الثلاثاء',Wednesday:'الأربعاء',Thursday:'الخميس',Friday:'الجمعة',Saturday:'السبت'};
var MON={January:'كانون الثاني',February:'شباط',March:'آذار',April:'نيسان',May:'أيار',June:'حزيران',July:'تموز',August:'آب',September:'أيلول',October:'تشرين الأول',November:'تشرين الثاني',December:'كانون الأول'};
var MS={Sept:'September',Jan:'January',Feb:'February',Mar:'March',Apr:'April',Jun:'June',Jul:'July',Aug:'August',Sep:'September',Oct:'October',Nov:'November',Dec:'December'};
var MONRE='January|February|March|April|May|June|July|August|September|October|November|December|Sept|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec';
function monAr(m){return MON[MS[m]||m]||m}
/* a phone number with "+" must stay left-to-right inside Arabic text */
function ltr(x){return '\u2066'+x+'\u2069'}
/* small plural helpers (Arabic counts) */
function nHours(n){n=+n;return n===1?'ساعة':n===2?'ساعتان':n<=10?n+' ساعات':n+' ساعة'}
function nAppt(n){n=+n;return n===1?'موعد واحد':n===2?'موعدان':n<=10?n+' مواعيد':n+' موعداً'}
function nProc(n){n=+n;return n===1?'إجراء واحد':n===2?'إجراءان':n<=10?n+' إجراءات':n+' إجراءً'}

/* ---------- messages that start with a fixed phrase (the rest, such as a server error, is kept as is) ---------- */
var PFX=[['Could not load schedule: ','تعذّر تحميل الجدول: '],['Could not send: ','تعذّر الإرسال: '],['Could not save: ','تعذّر الحفظ: '],['Could not delete: ','تعذّر الحذف: '],['Could not clear activity: ','تعذّر مسح النشاط: '],['Could not unlock: ','تعذّر الفتح: '],['Could not change notifications: ','تعذّر تغيير الإشعارات: '],['Could not make the QR code: ','تعذّر إنشاء رمز QR: '],['Sign-in failed: ','فشل تسجيل الدخول: '],['Request failed: ','فشل الطلب: '],['Stopped: ','توقّف: '],['Last error: ','آخر خطأ: '],['Sending failed.','فشل الإرسال.']];

/* ---------- text with numbers or names inside ---------- */
var P=[
[/^Account \((\d+)\)$/,function(m){return 'الحساب ('+m[1]+')'}],
[/^Delete selected \((\d+)\)$/,function(m){return 'حذف المحدد ('+m[1]+')'}],
[/^Last refreshed: (.+)$/,function(m){return 'آخر تحديث: '+m[1]}],
[/^Procedures on (.+)$/,function(m){return 'الإجراءات بتاريخ '+m[1]}],
[/^Filter: (.+)$/,function(m,t){return 'التصفية: '+t(m[1])}],
[/^Readiness: (.+)$/,function(m,t){return 'الجاهزية: '+t(m[1])}],
[/^Reminder: (.+)$/,function(m,t){return 'التذكير: '+t(m[1])}],
[/^(.+), added by (.+)$/,function(m,t){return t(m[1])+'، أضافه '+m[2]}],
[/^Dx: (.+)$/,function(m){return 'التشخيص: '+m[1]}],
[/^category: (.+)$/,function(m,t){return 'الفئة: '+t(m[1])}],
[/^WhatsApp number: (.+)$/,function(m){return 'رقم واتساب: '+ltr(m[1])}],
[/^(\d+) exact match(?:es)?\.$/,function(m){return 'تطابق تام: '+m[1]+'.'}],
[/^International numbers need 8 to 15 digits \(you typed (\d+)\)\.$/,function(m){return 'الأرقام الدولية تحتاج من 8 إلى 15 رقماً (كتبتَ '+m[1]+').'}],
[/^Iraqi numbers have 11 digits, like (.+)\. You typed (\d+)\.$/,function(m){return 'الأرقام العراقية من 11 رقماً، مثل '+m[1]+'. كتبتَ '+m[2]+'.'}],
[/^(\d+) hours?$/,function(m){return nHours(m[1])}],
[/^Appointments dated (\S+) to (\S+?)(?: · category: (.+?))?\. Counts are appointments, not patients\.$/,function(m,t){return 'مواعيد بين '+m[1]+' و'+m[2]+(m[3]?' · الفئة: '+t(m[3]):'')+'. الأعداد تخص المواعيد لا المرضى.'}],
[/^Period: (\S+) to (\S+?)\. “Sent” means submitted to WhatsApp, not confirmed delivery\.$/,function(m){return 'الفترة: من '+m[1]+' إلى '+m[2]+'. «تم الإرسال» تعني أنها سُلّمت إلى واتساب، لا أنها وصلت فعلاً.'}],
[/^Green share: (.+)\. Based on each appointment’s current status\.$/,function(m){return 'نسبة الأخضر: '+m[1]+'. بحسب الحالة الحالية لكل موعد.'}],
[/^busiest day: (\d+) procedures?$/,function(m){return 'أكثر الأيام ازدحاماً: '+nProc(m[1])}],
[/^(\S+): (\d+) scheduled, (\d+) cancelled$/,function(m){return m[1]+': '+m[2]+' مجدول، '+m[3]+' ملغى'}],
[new RegExp('^((?:'+MONRE+') \\d{2}): (.+)$'),function(m){var w={sched:'مجدول',canc:'ملغى',green:'أخضر',yellow:'أصفر',red:'أحمر'};return m[1]+': '+m[2].replace(/\b(sched|canc|green|yellow|red)\b/g,function(x){return w[x]})}],
[/^Signed in as (.+?)( \(administrator\))?$/,function(m){return 'تم تسجيل الدخول باسم '+m[1]+(m[2]?' (مسؤول)':'')}],
[/^Encrypt (\d+) saved phone number\(s\)\? The readable copies will be removed\.$/,function(m){return 'هل تريد تشفير '+m[1]+' من أرقام الهواتف المحفوظة؟ ستُحذف النسخ المقروءة.'}],
[/^Done\. (\d+) number\(s\) are now encrypted\.$/,function(m){return 'تم. أصبح '+m[1]+' من الأرقام مشفّراً الآن.'}],
[/^Permanently delete (\d+) appointments?\?$/,function(m){return 'هل تريد حذف '+nAppt(m[1])+' نهائياً؟'}],
[/^Please confirm again: (\d+) appointments will be deleted for good\.$/,function(m){return 'يرجى التأكيد مرة أخرى: سيُحذف '+nAppt(m[1])+' نهائياً.'}]
];

/* ---------- engine ---------- */
var DEC='[\\s\\u00a0\\u2713\\u2714\\u2715\\u2716\\u2705\\u274c\\u26a0\\u2610\\u2611\\u27f3\\u25a6\\u25a4\\uff0b\\u263a\\u2022\\u2192\\u2013\\u2014\\-\\ufe0f\\u200d\\p{Extended_Pictographic}]';
var RE=new RegExp('^('+DEC+'*)([\\s\\S]*?)('+DEC+'*)$','u');
function tc(c,exact){ /* translate the core text (no decoration around it) */
 if(c in D)return D[c];
 if(exact)return c;
 var i,m;
 for(i=0;i<P.length;i++){m=P[i][0].exec(c);if(m)return P[i][1](m,tr)}
 for(i=0;i<PFX.length;i++)if(c.indexOf(PFX[i][0])===0)return PFX[i][1]+c.slice(PFX[i][0].length);
 if(c.indexOf('·')>-1){var a=c.split(/(\s*·\s*)/),o=[],k;for(k=0;k<a.length;k++){if(k%2)o.push(a[k]);else{var x=tr(a[k]);if(!(k>1&&x===o[o.length-2]&&x!==a[k]))o.push(x);else o.pop()}}return o.join('')}
 if(c.indexOf(' + ')>-1){return c.split(' + ').map(tr).join(' + ')}
 return c}
function post(s){
 return s.replace(/\b(\d{1,2}:\d{2})\s?(AM|PM|am|pm)\b/g,function(_,t,a){return t+' '+(/^a/i.test(a)?'ص':'م')})
  .replace(/\b(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)(,?)/g,function(_,w,c){return DAY[w]+(c?'،':'')})
  .replace(new RegExp('\\b(\\d{1,2}) ('+MONRE+')\\b','g'),function(_,d,m){return d+' '+monAr(m)})
  .replace(new RegExp('\\b('+MONRE+') (\\d{2})\\b','g'),function(_,m,y){return monAr(m)+' '+y})}
function tr(s,exact){
 if(typeof s!=='string'||!s.trim())return s;
 var m=RE.exec(s);if(!m||!m[2])return s;
 var r=tc(m[2],exact);if(!exact)r=post(r);
 var out=m[1]+r+m[3];return out}
function trMsg(s){s=String(s);if(s in D)return D[s];return s.split('\n').map(function(l){return l?tr(l):l}).join('\n')}

/* ---------- walking the page ---------- */
var TS=new WeakMap(),AS=new WeakMap(),ATTR=['placeholder','aria-label','title','alt'],obs=null;
/* 0 = translate, 1 = leave alone, 2 = only exact dictionary matches (message previews) */
function zone(n){var e=n.nodeType===3?n.parentNode:n;while(e&&e.nodeType===1){var t=e.tagName;if(t==='SCRIPT'||t==='STYLE'||t==='TEXTAREA'||t==='NOSCRIPT')return 1;if(e.getAttribute('translate')==='no')return 1;if(e.classList&&e.classList.contains('preview'))return 2;e=e.parentNode}return 0}
function doText(n){var z=zone(n);if(z===1)return;var r=TS.get(n);if(r&&n.data===r.out)return;var src=n.data,out=tr(src,z===2);TS.set(n,{src:src,out:out});if(out!==src)n.data=out}
function doAttr(el,a){if(!el.hasAttribute(a)||zone(el)===1)return;var v=el.getAttribute(a),m=AS.get(el)||{},r=m[a];if(r&&v===r.out)return;var out=tr(v,zone(el)===2);m[a]={src:v,out:out};AS.set(el,m);if(out!==v)el.setAttribute(a,out)}
function walk(root){
 if(root.nodeType===3){doText(root);return}
 if(root.nodeType!==1&&root.nodeType!==9)return;
 var w=document.createTreeWalker(root,5),n=root.nodeType===1?root:null;
 if(n)ATTR.forEach(function(a){doAttr(n,a)});
 while(n=w.nextNode()){if(n.nodeType===3)doText(n);else ATTR.forEach(function(a){doAttr(n,a)})}}
function unwalk(){
 var w=document.createTreeWalker(document,5),n;
 while(n=w.nextNode()){
  if(n.nodeType===3){var r=TS.get(n);if(r&&n.data===r.out)n.data=r.src;TS.delete(n)}
  else{var m=AS.get(n);if(m){for(var a in m)if(n.getAttribute(a)===m[a].out)n.setAttribute(a,m[a].src);AS.delete(n)}}}}
function onMut(list){try{list.forEach(function(r){
 if(r.type==='characterData')doText(r.target);
 else if(r.type==='attributes')doAttr(r.target,r.attributeName);
 else r.addedNodes.forEach(function(x){walk(x)})})}catch(e){}}

/* ---------- switching ---------- */
var AL=window.alert,CF=window.confirm,PR=window.prompt;
window.alert=function(m){return AL.call(window,lang==='ar'?trMsg(m):m)};
window.confirm=function(m){return CF.call(window,lang==='ar'?trMsg(m):m)};
window.prompt=function(m,d){return PR.call(window,lang==='ar'?trMsg(m):m,d)};
function marks(){var e=document.getElementById('lgEn'),a=document.getElementById('lgAr');if(e)e.setAttribute('aria-pressed',String(lang==='en'));if(a)a.setAttribute('aria-pressed',String(lang==='ar'))}
function set(l,keep){
 l=l==='ar'?'ar':'en';
 if(l===lang&&keep!==true)return;
 lang=l;var h=document.documentElement;
 try{if(!keep)localStorage.setItem(LS,l)}catch(e){}
 if(l==='ar'){h.setAttribute('lang','ar');h.setAttribute('dir','rtl');walk(document);
  if(!obs)obs=new MutationObserver(onMut);obs.observe(document,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTR})}
 else{if(obs){obs.disconnect();obs.takeRecords()}unwalk();h.setAttribute('lang','en');h.removeAttribute('dir')}
 marks()}
function init(){
 var e=document.getElementById('lgEn'),a=document.getElementById('lgAr');
 if(e)e.addEventListener('click',function(){set('en')});if(a)a.addEventListener('click',function(){set('ar')});
 var s=null;try{s=localStorage.getItem(LS)}catch(x){}
 if(s==='ar')set('ar',true);else marks()}
window.I18N={set:set,get:function(){return lang},t:tr,msg:trMsg,size:function(){return SIZE},patterns:P.length};
init();
})();
