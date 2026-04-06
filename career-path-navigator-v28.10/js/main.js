/* ============================================================
   main.js – مبدّل اللغة لجميع الصفحات (Language Switcher – Full Site, All Pages)
   ============================================================

   كيف يعمل نظام الترجمة؟ (How the translation system works)
   ────────────────────────────────────────────────
   1. كل نص مترجم في HTML يحمل data-i18n="key_name"
      (Every translated text in HTML uses data-i18n="key_name")
   2. كائن translations يحتوي نص عربي وإنجليزي لكل مفتاح
      (The translations object holds AR and EN text for every key)
   3. applyLanguage(lang) تحدّث كل [data-i18n] عند التبديل
      (applyLanguage(lang) updates every [data-i18n] element on toggle)
   4. اختيار اللغة محفوظ في localStorage
      (Language choice is stored in localStorage across pages)

   كيف تضيف نصاً مترجماً؟ (How to add a new translated text)
   ────────────────────────────────────────────────
   1. أضف data-i18n="my_key" للعنصر في HTML
      (Add data-i18n="my_key" to the HTML element)
   2. أضف ar: { my_key: 'النص' } و en: { my_key: 'Text' }
      (Add ar: { my_key: 'Arabic text' } and en: { my_key: 'English text' })
   ============================================================ */


/* ───────────────────────────────────────────────────────────
   قاموس الترجمات – مجمَّع حسب الصفحة / القسم
   (Translations object – grouped by page/section for easy navigation)
   ─────────────────────────────────────────────────────────── */
var translations = {
    /* ══════════ النصوص العربية (Arabic translations) ══════════ */
    ar: {
        page_title_roadmap: 'Career Path Navigator | خارطة التعلم',
        page_title_courses: 'Career Path Navigator | الكورسات',
        road_h2_programming: '💻 خارطة تعلم تطوير الواجهات',
        road_h2_design: '🎨 خارطة تعلم التصميم الجرافيكي',
        road_h2_uiux: '📱 خارطة تعلم تصميم واجهة وتجربة المستخدم',
        road_h2_finearts: '🖌️ خارطة تعلم الفنون التشكيلية',
        road_h2_medicine: '🏥 خارطة تعلم الطب والعلوم الصحية',
        road_h2_engineering: '⚙️ خارطة تعلم الهندسة',
        road_h2_law: '⚖️ خارطة تعلم القانون',
        road_h2_tourism: '✈️ خارطة تعلم السياحة والإرشاد',
        rm_programming_s1_title: 'أساسيات HTML',
        rm_programming_s1_desc: 'تعلم بنية صفحات الويب: العناصر، الوسوم، النماذج، الجداول.',
        rm_programming_s2_title: 'التنسيق وتصميم التخطيط بـ CSS',
        rm_programming_s2_desc: 'Flexbox, Grid، الألوان، الخطوط، التصميم المتجاوب.',
        rm_programming_s3_title: 'أساسيات JavaScript',
        rm_programming_s3_desc: 'المتغيرات، الدوال، الحلقات، الأحداث، والتعديل على DOM.',
        rm_programming_s4_title: 'إدارة النسخ: Git & GitHub',
        rm_programming_s4_desc: 'تعلم إدارة الكود باستخدام Git ونشر المشاريع على GitHub.',
        rm_programming_s5_title: 'إطارات العمل: React / Vue',
        rm_programming_s5_desc: 'تعلم إطار عمل JavaScript لبناء تطبيقات ويب ديناميكية.',
        rm_programming_s6_title: 'بناء ونشر المشاريع',
        rm_programming_s6_desc: 'أنشئ 3-5 مشاريع حقيقية وانشرها على Netlify أو Vercel.',
        rm_programming_s7_title: 'موقع أعمالك (Portfolio)',
        rm_programming_s7_desc: 'أنشئ موقع Portfolio احترافي يعرض مهاراتك ومشاريعك.',
        rm_design_s1_title: 'مبادئ التصميم',
        rm_design_s1_desc: 'اللون، التباين، التوازن، الفضاء الأبيض، التسلسل البصري.',
        rm_design_s2_title: 'الطباعة والخطوط',
        rm_design_s2_desc: 'اختيار الخطوط، التباعد، التسلسل الهرمي في النصوص.',
        rm_design_s3_title: 'Adobe Photoshop',
        rm_design_s3_desc: 'تعديل الصور، تصميم البوسترات، الإعلانات الرقمية.',
        rm_design_s4_title: 'Adobe Illustrator / Inkscape',
        rm_design_s4_desc: 'الرسومات المتجهية Vector، تصميم الشعارات والأيقونات.',
        rm_design_s5_title: 'تصميم الهوية البصرية',
        rm_design_s5_desc: 'تصميم هوية بصرية متكاملة: شعار + ألوان + خطوط + تطبيقات.',
        rm_design_s6_title: 'معرض الأعمال على Behance & Dribbble',
        rm_design_s6_desc: 'انشر أعمالك وابدأ العمل الحر على Fiverr أو Upwork.',
        rm_uiux_s1_title: 'بحث تجربة المستخدم',
        rm_uiux_s1_desc: 'مقابلات المستخدمين، الاستبيانات، تحليل المنافسين.',
        rm_uiux_s2_title: 'هيكلة المعلومات',
        rm_uiux_s2_desc: 'تنظيم محتوى المنتج وبناء الهيكل المعلوماتي.',
        rm_uiux_s3_title: 'التخطيط الهيكلي والنماذج الأولية',
        rm_uiux_s3_desc: 'رسم التخطيطات الهيكلية وبناء النموذج الأولي.',
        rm_uiux_s4_title: 'احتراف تصميم الواجهات',
        rm_uiux_s4_desc: 'تصميم واجهات ديناميكية، التخطيط التلقائي، المكونات.',
        rm_uiux_s5_title: 'اختبار سهولة الاستخدام',
        rm_uiux_s5_desc: 'اختبار النموذج مع مستخدمين حقيقيين وتحليل النتائج.',
        rm_uiux_s6_title: 'نظام التصميم ومعرض الأعمال',
        rm_uiux_s6_desc: 'بناء نظام تصميم قابل للتوسع ونشر دراسات حالة احترافية.',
        rm_finearts_s1_title: 'أساسيات الرسم',
        rm_finearts_s1_desc: 'الخطوط، الأشكال، المنظور، التشريح الفني للجسم البشري.',
        rm_finearts_s2_title: 'نظرية الألوان',
        rm_finearts_s2_desc: 'دوائر الألوان، التناسق اللوني، العواطف المرتبطة بالألوان.',
        rm_finearts_s3_title: 'الوسائط التقليدية',
        rm_finearts_s3_desc: 'الرسم بالقلم الرصاص، الألوان المائية، الأكريلك، الزيتية.',
        rm_finearts_s4_title: 'الرسم الرقمي',
        rm_finearts_s4_desc: 'Procreate، Adobe Fresco، رسم رقمي احترافي على التابلت.',
        rm_finearts_s5_title: 'تطوير أسلوبك الخاص',
        rm_finearts_s5_desc: 'جرب أساليب مختلفة وطور أسلوبك الفني الخاص المميز.',
        rm_finearts_s6_title: 'النشر والربح',
        rm_finearts_s6_desc: 'استخدام Instagram و ArtStation لبيع المطبوعات والمنتجات.',
        rm_medicine_s1_title: 'العلوم الأساسية',
        rm_medicine_s1_desc: 'أحياء متقدمة، كيمياء عضوية، فيزياء طبية — التأسيس الأكاديمي.',
        rm_medicine_s2_title: 'الدراسات التمهيدية للطب',
        rm_medicine_s2_desc: 'الاختبارات المكافئة واختيار التخصص الطبي المناسب.',
        rm_medicine_s3_title: 'كلية الطب والبرامج الصحية',
        rm_medicine_s3_desc: '6 سنوات طب بشري أو 4 سنوات في التخصصات الصحية المساندة.',
        rm_medicine_s4_title: 'التدريب السريري',
        rm_medicine_s4_desc: 'الإقامة في المستشفيات والتعامل مع الحالات الطبية الحقيقية.',
        rm_medicine_s5_title: 'التخصص',
        rm_medicine_s5_desc: 'اختر تخصصك: جراحة، أطفال، نساء وتوليد، طب طوارئ، وغيرها.',
        rm_medicine_s6_title: 'الترخيص والممارسة',
        rm_medicine_s6_desc: 'الحصول على الترخيص المهني والعمل في مستشفى أو عيادة خاصة.',
        rm_engineering_s1_title: 'أساسيات الرياضيات والفيزياء',
        rm_engineering_s1_desc: 'حساب تفاضل وتكامل، جبر خطي، فيزياء هندسية متقدمة.',
        rm_engineering_s2_title: 'اختيار المسار الهندسي',
        rm_engineering_s2_desc: 'مدنية، ميكانيكية، كهربائية، كيميائية، حاسوبية — اختر تخصصك.',
        rm_engineering_s3_title: 'أساسيات الهندسة',
        rm_engineering_s3_desc: 'ميكانيكا المواد، ديناميكا الحرارة، دوائر كهربائية، برمجة هندسية.',
        rm_engineering_s4_title: 'البرامج الهندسية (CAD)',
        rm_engineering_s4_desc: 'استخدام AutoCAD، SolidWorks، MATLAB، ANSYS حسب تخصصك.',
        rm_engineering_s5_title: 'التدريب والمشاريع الميدانية',
        rm_engineering_s5_desc: 'تدريب صيفي في شركات هندسية وتنفيذ مشاريع ميدانية حقيقية.',
        rm_engineering_s6_title: 'ترخيص الهندسة المهنية',
        rm_engineering_s6_desc: 'اجتياز اختبارات الترخيص المهني والحصول على الشهادة.',
        rm_law_s1_title: 'أسس القانون',
        rm_law_s1_desc: 'نظرية القانون، أنواعه، المصطلحات القانونية الأساسية.',
        rm_law_s2_title: 'مواد القانون الأساسية',
        rm_law_s2_desc: 'القانون المدني، التجاري، الجنائي، الدستوري، الإداري.',
        rm_law_s3_title: 'البحث والكتابة القانونية',
        rm_law_s3_desc: 'كتابة المذكرات والعرائض القانونية والبحث في السوابق القضائية.',
        rm_law_s4_title: 'المحاكم الصورية والتدريب',
        rm_law_s4_desc: 'تدريب على المحاكم الصورية والتدريب في مكاتب المحاماة.',
        rm_law_s5_title: 'امتحان النقابة والترخيص',
        rm_law_s5_desc: 'اجتياز امتحان نقابة المحامين والحصول على ترخيص المزاولة.',
        rm_law_s6_title: 'التخصص القانوني',
        rm_law_s6_desc: 'محاماة، القضاء، الاستشارات، القانون الدولي، حقوق الإنسان.',
        rm_tourism_s1_title: 'أساسيات السياحة',
        rm_tourism_s1_desc: 'أنواع السياحة، صناعة الضيافة، الجغرافيا السياحية.',
        rm_tourism_s2_title: 'التاريخ والتراث',
        rm_tourism_s2_desc: 'الحضارات القديمة، المواقع الأثرية، التراث الإنساني لليونسكو.',
        rm_tourism_s3_title: 'اللغات',
        rm_tourism_s3_desc: 'إتقان لغة ثانية وثالثة — الإنجليزية، الفرنسية، الإسبانية.',
        rm_tourism_s4_title: 'تخطيط وإدارة الجولات',
        rm_tourism_s4_desc: 'تخطيط جولات سياحية، إدارة المجموعات، التعامل مع الطوارئ.',
        rm_tourism_s5_title: 'التدريب الميداني',
        rm_tourism_s5_desc: 'تدريب في وكالات سياحة ومواقع أثرية مع مجموعات حقيقية.',
        rm_tourism_s6_title: 'رخصة الإرشاد السياحي',
        rm_tourism_s6_desc: 'الحصول على ترخيص المرشد السياحي الرسمي والبدء في العمل.',
        crs_programming_1_title: 'HTML & CSS للمبتدئين',
        crs_programming_1_desc: 'أسس بناء صفحات الويب بالـ HTML والـ CSS من الصفر.',
        crs_programming_2_title: 'بناء مواقع متجاوبة',
        crs_programming_2_desc: 'تصميم مواقع متجاوبة باستخدام CSS Grid وFlexbox.',
        crs_programming_3_title: 'JavaScript: الدليل الشامل',
        crs_programming_3_desc: 'JavaScript من المبتدئ إلى الاحتراف مع مشاريع فعلية.',
        crs_programming_4_title: 'إدارة النسخ باستخدام Git',
        crs_programming_4_desc: 'إدارة الكود والتعاون باستخدام Git وGitHub من Atlassian.',
        crs_programming_5_title: 'شهادة مطور React',
        crs_programming_5_desc: 'بناء تطبيقات React احترافية مع Hooks وContext API.',
        crs_programming_6_title: 'تطوير ويب Full-Stack',
        crs_programming_6_desc: 'بناء ونشر تطبيقات ويب كاملة من IBM.',
        crs_programming_7_title: 'بناء موقع أعمالك (Portfolio)',
        crs_programming_7_desc: 'أنشئ موقع Portfolio احترافي يعرض مهاراتك ومشاريعك.',
        crs_design_1_title: 'التخصص في التصميم الجرافيكي',
        crs_design_1_desc: 'مبادئ التصميم والطباعة والهوية البصرية من CalArts.',
        crs_design_2_title: 'مقدمة في الطباعة والخطوط',
        crs_design_2_desc: 'أساسيات الخطوط والطباعة والتسلسل الهرمي في النصوص من CalArts.',
        crs_design_3_title: 'Adobe Photoshop CC – احترافي',
        crs_design_3_desc: 'تحرير الصور، التركيب الفوتوغرافي، وتصميم الإعلانات.',
        crs_design_4_title: 'Adobe Illustrator CC – الشامل',
        crs_design_4_desc: 'رسم الشعارات والرسوم المتجهية بشكل احترافي.',
        crs_design_5_title: 'تصميم الهوية البصرية',
        crs_design_5_desc: 'تصميم هوية بصرية متكاملة: شعار + ألوان + خطوط.',
        crs_design_6_title: 'العمل الحر للمصممين',
        crs_design_6_desc: 'انشر أعمالك على Behance وDribbble وابدأ العمل الحر.',
        crs_uiux_1_title: 'شهادة Google في تصميم UX',
        crs_uiux_1_desc: 'مسار شامل لتصميم تجربة المستخدم من Google.',
        crs_uiux_2_title: 'هيكلة المعلومات والتصميم',
        crs_uiux_2_desc: 'تنظيم محتوى المنتج وبناء الهيكل المعلوماتي.',
        crs_uiux_3_title: 'التخطيط الهيكلي والنماذج الأولية',
        crs_uiux_3_desc: 'رسم التخطيطات الهيكلية وبناء النماذج الأولية.',
        crs_uiux_4_title: 'المعسكر التدريبي لـ Figma',
        crs_uiux_4_desc: 'Figma من الصفر: Components، Auto-Layout، Prototyping.',
        crs_uiux_5_title: 'أبحاث UX واختبار سهولة الاستخدام',
        crs_uiux_5_desc: 'اختبار النموذج مع مستخدمين حقيقيين وتحليل النتائج.',
        crs_uiux_6_title: 'نظام التصميم ومعرض الأعمال',
        crs_uiux_6_desc: 'بناء نظام تصميم قابل للتوسع ونشر Case Studies احترافية.',
        crs_finearts_1_title: 'أساسيات الرسم والتخطيط',
        crs_finearts_1_desc: 'الرسم من الصفر: خطوط، أشكال، منظور، تضليل.',
        crs_finearts_2_title: 'نظرية الألوان للفنانين',
        crs_finearts_2_desc: 'دوائر الألوان، التناسق اللوني، والعواطف المرتبطة بالألوان.',
        crs_finearts_3_title: 'الرسم بالألوان المائية',
        crs_finearts_3_desc: 'الرسم بالألوان المائية: تقنيات الطبقات والغسيل والتفاصيل.',
        crs_finearts_4_title: 'الرسم الرقمي بـ Procreate',
        crs_finearts_4_desc: 'الرسم الرقمي على iPad بأسلوب احترافي.',
        crs_finearts_5_title: 'الفن الحديث والمعاصر',
        crs_finearts_5_desc: 'تاريخ الفن الحديث والمعاصر من MoMA بنيويورك.',
        crs_finearts_6_title: 'بيع الأعمال الفنية أونلاين',
        crs_finearts_6_desc: 'بيع أعمالك الفنية على Etsy وArtStation وInstagram.',
        crs_medicine_1_title: 'مقدمة في علم الأحياء – MIT',
        crs_medicine_1_desc: 'أساسيات علم الأحياء من معهد ماساتشوستس للتكنولوجيا.',
        crs_medicine_2_title: 'التحضير لاختبار MCAT',
        crs_medicine_2_desc: 'تحضير شامل لاختبار القبول في كليات الطب الأمريكية.',
        crs_medicine_3_title: 'الطب في العصر الرقمي',
        crs_medicine_3_desc: 'الطب الرقمي والذكاء الاصطناعي في الرعاية الصحية.',
        crs_medicine_4_title: 'حل المشكلات السريرية',
        crs_medicine_4_desc: 'حل المشكلات السريرية والتشخيص الطبي من UCSF.',
        crs_medicine_5_title: 'علم التشريح – جامعة ميشيغان',
        crs_medicine_5_desc: 'علم التشريح البشري من جامعة ميشيغان.',
        crs_medicine_6_title: 'الصحة العالمية – هارفارد',
        crs_medicine_6_desc: 'الصحة العالمية والسياسات الصحية من جامعة هارفارد.',
        crs_engineering_1_title: 'حساب التفاضل والتكامل – UPenn',
        crs_engineering_1_desc: 'حساب التفاضل والتكامل الأساسي للهندسة والعلوم.',
        crs_engineering_2_title: 'مقدمة في الهندسة',
        crs_engineering_2_desc: 'مقدمة في الهندسة وأنواعها وتطبيقاتها الحديثة.',
        crs_engineering_3_title: 'ميكانيكا هندسية – Statics',
        crs_engineering_3_desc: 'ميكانيكا المواد والقوى الهندسية من Georgia Tech.',
        crs_engineering_4_title: 'دورة AutoCAD الشاملة',
        crs_engineering_4_desc: 'رسم هندسي رقمي باحتراف باستخدام AutoCAD.',
        crs_engineering_5_title: 'إدارة المشاريع الهندسية',
        crs_engineering_5_desc: 'إدارة المشاريع الهندسية والتدريب الميداني من Rice.',
        crs_engineering_6_title: 'ميكانيكا المواد – MIT',
        crs_engineering_6_desc: 'ميكانيكا المواد الهندسية من معهد ماساتشوستس.',
        crs_law_1_title: 'مقدمة في القانون',
        crs_law_1_desc: 'مقدمة في القانون ونظرياته وأنواعه من University of London.',
        crs_law_2_title: 'القانون العام الإنجليزي',
        crs_law_2_desc: 'القانون العام الإنجليزي: المبادئ الأساسية والسوابق القضائية.',
        crs_law_3_title: 'الكتابة والبحث القانوني',
        crs_law_3_desc: 'كتابة المذكرات والعرائض القانونية والبحث في السوابق.',
        crs_law_4_title: 'القانون الجنائي الدولي',
        crs_law_4_desc: 'القانون الجنائي الدولي والمحاكم الدولية من Case Western.',
        crs_law_5_title: 'قانون العقود – هارفارد',
        crs_law_5_desc: 'قانون العقود وإدارتها من منظور أكاديمي – هارفارد.',
        crs_law_6_title: 'القانون الدولي – Leiden',
        crs_law_6_desc: 'القانون الدولي وحقوق الإنسان من Universiteit Leiden.',
        crs_tourism_1_title: 'إدارة السياحة والضيافة',
        crs_tourism_1_desc: 'إدارة السياحة والفنادق وتنظيم الفعاليات.',
        crs_tourism_2_title: 'علم المصريات – UPenn',
        crs_tourism_2_desc: 'علم المصريات والحضارات القديمة من جامعة بنسلفانيا.',
        crs_tourism_3_title: 'إنجليزي للسياحة والضيافة',
        crs_tourism_3_desc: 'إنجليزي متخصص للسياحة والضيافة.',
        crs_tourism_4_title: 'أساسيات الإرشاد السياحي',
        crs_tourism_4_desc: 'مهارات الإرشاد السياحي والتعامل مع المجموعات.',
        crs_tourism_5_title: 'السياحة المستدامة',
        crs_tourism_5_desc: 'السياحة المستدامة والمسؤولة من Wageningen University.',
        crs_tourism_6_title: 'التراث المصري والآثار',
        crs_tourism_6_desc: 'التراث الأثري المصري ومواقع اليونسكو.',
        nav_home: 'الرئيسية', nav_assessment: 'الاختبار', nav_about: 'عن المشروع',
        hero_badge: '🚀 اكتشف مسارك المهني',
        hero_title: 'Career Path Navigator',
        hero_subtitle: 'اكتشف المسار المهني الذي يتناسب حقًا مع شخصيتك ومهاراتك من خلال اختبار تفاعلي ذكي.',
        start_btn: 'ابدأ الاختبار الآن',
        learn_more_btn: 'اعرف أكثر',
        how_title: 'كيف يعمل الموقع؟',
        how_subtitle: 'ثلاث خطوات بسيطة لاكتشاف مسارك المهني',
        step1_title: 'أجب على الأسئلة',
        step1_desc: 'أجب عن 20 سؤالاً شاملاً تتعلق باهتماماتك وطريقة تفكيرك.',
        step2_title: 'نحلل إجاباتك',
        step2_desc: 'يحسب الموقع درجاتك في 8 مجالات مهنية مختلفة.',
        step3_title: 'احصل على توصياتك',
        step3_desc: 'تحصل على خارطة تعليمية وكورسات مقترحة تناسب مجالك.',
        fields_title: 'المجالات المهنية التي يغطيها الاختبار',
        fields_sub: '8 مجالات متنوعة تشمل التقنية، الصحة، الفنون، والقانون',
        stat1_label: 'مجالات مهنية',
        stat2_label: 'سؤالاً شاملاً',
        stat3_label: 'كورس موصى به',
        stat4_label: 'مدة الاختبار',
        stat4_num: '٥ دقائق',
        testimonials_title: 'ماذا يقول مستخدمونا؟',
        testimonials_sub: 'شاهد كيف ساعد Career Path Navigator طلاباً ومحترفين في اختيار مسارهم',
        cta_title: 'مستعد لاكتشاف مسارك؟',
        cta_subtitle: 'لا تستغرق أكثر من 5 دقائق. جرّب الاختبار الآن مجاناً!',
        cta_btn: 'ابدأ الاختبار',
        assessment_title: 'اختبار المسار المهني',
        assessment_subtext: 'أجب بصدق – لا توجد إجابات خاطئة!',
        prev_btn: 'السابق', next_btn: 'التالي', finish_btn: 'إظهار النتائج',
        results_title: 'نتيجتك',
        results_sub: 'بناءً على إجاباتك، هذا هو المسار المهني الأنسب لك',
        top_paths_title: 'المسارات الموصى بها',
        view_roadmap: 'عرض خارطة التعلم',
        roadmap_title: '🗺️ خارطة التعلم',
        roadmap_sub: 'اختر مسارك لعرض الخطوات التعليمية التفصيلية',
        tab_programming: 'البرمجة', tab_design: 'التصميم', tab_uiux: 'UI/UX',
        tab_finearts: 'الفنون', tab_medicine: 'الطب', tab_engineering: 'الهندسة',
        tab_law: 'الحقوق', tab_tourism: 'السياحة',
        courses_title: '📚 الكورسات التعليمية',
        courses_sub: 'موارد تعليمية منتقاة لكل مسار مهني',
        watch_btn: 'شاهد الكورس',
        all_filter: 'الكل',   /* زر الفلتر "الكل" (All filter button) */
        filter_all: 'الكل',   /* مفتاح احتياطي للتوافق (backup key for compatibility) */
        /* روابط الكورسات في نهاية كل مسار بخارطة التعلم (Roadmap "view courses" link buttons) */
        roadmap_link_programming: '📚 كورسات البرمجة',
        roadmap_link_design: '📚 كورسات التصميم',
        roadmap_link_uiux: '📚 كورسات UI/UX',
        roadmap_link_finearts: '📚 كورسات الفنون',
        roadmap_link_medicine: '📚 موارد الطب والصحة',
        roadmap_link_engineering: '📚 موارد الهندسة',
        roadmap_link_law: '📚 موارد الحقوق',
        roadmap_link_tourism: '📚 موارد السياحة',
        about_title: 'عن المشروع', about_sub: 'Career Path Navigator – مشروع تخرج تعليمي',
        mission_title: 'مهمتنا', team_title: 'فريق العمل',

        /* نص فقرة المهمة – النسخة العربية (Mission paragraph – Arabic version) */
        mission_desc: 'نساعد الطلاب والمهنيين على اتخاذ قرار مهني واعٍ بناءً على اهتماماتهم الحقيقية وطريقة تفكيرهم، من خلال اختبار تفاعلي يحلل شخصيتهم ويوصي بمسار تعليمي واضح عبر 8 مجالات مهنية.',

        about_fields_title: 'ما المجالات التي يغطيها الموقع؟',
        about_fields_sub: 'يشمل الاختبار 8 مسارات مهنية لجميع التوجهات:',
        about_built_title: '🛠️ كيف تم بناء المشروع؟',
        about_built_desc: 'تم بناء هذا المشروع ليكون أداة تفاعلية سريعة وموثوقة، حيث اعتمدنا على لغات تقنية أساسية تشمل <strong>HTML5</strong> لبناء الهيكل، و <strong>CSS3</strong> لتصميم الواجهات، و <strong>Vanilla JS (JavaScript)</strong> لبرمجة المنطق والتفاعلات، بالإضافة إلى مكتبة <strong>Chart.js</strong> لعرض نتائج الاختبار شكل رسوم بيانية توضيحية.',
        about_team_sub: 'طلاب نظم معلومات – الفرقة الرابعة',
        about_cta: '📝 جرّب الاختبار الآن',
        about_stat1_label: 'مجال مهني مدعوم',
        about_stat2_label: 'سؤال تفاعلي',
        about_stat3_label: 'كورس موصى به',
        about_stat4_label: 'مدة الاختبار',
        about_stat4_num: '٥ دقائق',
        footer_text: '© 2025 Career Path Navigator – مشروع تعليمي',
        field_programming: '💻 البرمجة',
        field_design: '🎨 التصميم الجرافيكي',
        field_uiux: '📱 UI/UX',
        field_finearts: '🖌️ الفنون الجميلة',
        field_medicine: '🏥 الطب والصحة',
        field_engineering: '⚙️ الهندسة',
        field_law: '⚖️ الحقوق والقانون',
        field_tourism: '✈️ السياحة والإرشاد',
        mark_completed: 'اكتمل',
        team_photo_placeholder: 'صورة شخصية',
        team1_name: 'يوسف سمير كمال',
        team1_dept: 'نظم معلومات – الفرقة الرابعة',
        team1_role: 'Web Design & Data Analysis',
        team1_detail: 'مسؤول عن تصميم الواجهة وتجربة المستخدم، وتحليل البيانات وتفسير نتائج الاختبار.',
        team2_name: 'أحمد علي رياض',
        team2_dept: 'نظم معلومات – الفرقة الرابعة',
        team2_role: 'Mobile App Developer & UI/UX',
        team2_detail: 'مسؤول عن تطوير تطبيقات الموبايل وتصميم تجربة المستخدم والواجهات التفاعلية.',
        team3_name: 'أحمد أشرف شلبي',
        team3_dept: 'نظم معلومات – الفرقة الرابعة',
        team3_role: 'Front-end Developer',
        team3_detail: 'مسؤول عن بناء هيكل الموقع، منطق الاختبار، وتطوير صفحة النتائج بـ JavaScript.'
    },
    /* ══════════ النصوص الإنجليزية (English translations) ══════════ */
    en: {
        page_title_roadmap: 'Career Path Navigator | Roadmap',
        page_title_courses: 'Career Path Navigator | Courses',
        road_h2_programming: '💻 Frontend Development Roadmap',
        road_h2_design: '🎨 Graphic Design Roadmap',
        road_h2_uiux: '📱 UI/UX Design Roadmap',
        road_h2_finearts: '🖌️ Fine Arts & Illustration Roadmap',
        road_h2_medicine: '🏥 Medicine & Health Sciences Roadmap',
        road_h2_engineering: '⚙️ Engineering Roadmap',
        road_h2_law: '⚖️ Law & Legal Studies Roadmap',
        road_h2_tourism: '✈️ Tourism & Tour Guiding Roadmap',
        rm_programming_s1_title: 'HTML Basics',
        rm_programming_s1_desc: 'Learn web page structure: elements, tags, forms, tables.',
        rm_programming_s2_title: 'CSS Styling & Layout',
        rm_programming_s2_desc: 'Flexbox, Grid, colors, fonts, and Responsive Design.',
        rm_programming_s3_title: 'JavaScript Fundamentals',
        rm_programming_s3_desc: 'Variables, functions, loops, events, and DOM manipulation.',
        rm_programming_s4_title: 'Version Control: Git & GitHub',
        rm_programming_s4_desc: 'Learn code management with Git and publishing projects on GitHub.',
        rm_programming_s5_title: 'React / Vue Framework',
        rm_programming_s5_desc: 'Learn JavaScript frameworks to build dynamic web applications.',
        rm_programming_s6_title: 'Build & Deploy Projects',
        rm_programming_s6_desc: 'Create 3-5 real projects and deploy them on Netlify or Vercel.',
        rm_programming_s7_title: 'Portfolio Website',
        rm_programming_s7_desc: 'Create a professional portfolio site that showcases your skills and projects.',
        rm_design_s1_title: 'Design Principles',
        rm_design_s1_desc: 'Color, contrast, balance, white space, and visual hierarchy.',
        rm_design_s2_title: 'Typography',
        rm_design_s2_desc: 'Font selection, spacing, and text hierarchy.',
        rm_design_s3_title: 'Adobe Photoshop',
        rm_design_s3_desc: 'Photo editing, poster design, and digital advertisements.',
        rm_design_s4_title: 'Adobe Illustrator / Inkscape',
        rm_design_s4_desc: 'Vector graphics, logo, and icon design.',
        rm_design_s5_title: 'Brand Identity Design',
        rm_design_s5_desc: 'Designing complete visual identities: logos, colors, typography, applications.',
        rm_design_s6_title: 'Portfolio on Behance & Dribbble',
        rm_design_s6_desc: 'Publish your work and start freelancing on Fiverr or Upwork.',
        rm_uiux_s1_title: 'UX Research',
        rm_uiux_s1_desc: 'User Interviews, Surveys, and Competitor Analysis.',
        rm_uiux_s2_title: 'Information Architecture',
        rm_uiux_s2_desc: 'Organizing product content and building the information architecture.',
        rm_uiux_s3_title: 'Wireframing & Prototyping',
        rm_uiux_s3_desc: 'Drawing structural wireframes and building prototypes.',
        rm_uiux_s4_title: 'Master UI Design',
        rm_uiux_s4_desc: 'Designing dynamic interfaces, Auto-Layout, Components, and Variants.',
        rm_uiux_s5_title: 'Usability Testing',
        rm_uiux_s5_desc: 'Testing prototypes with real users and analyzing the results.',
        rm_uiux_s6_title: 'Design System & Portfolio',
        rm_uiux_s6_desc: 'Building scalable design systems and publishing professional case studies.',
        rm_finearts_s1_title: 'Drawing Fundamentals',
        rm_finearts_s1_desc: 'Lines, shapes, perspective, and human body artistic anatomy.',
        rm_finearts_s2_title: 'Color Theory',
        rm_finearts_s2_desc: 'Color wheels, color harmony, and emotions associated with colors.',
        rm_finearts_s3_title: 'Traditional Media',
        rm_finearts_s3_desc: 'Pencil drawings, watercolors, acrylics, and oil paintings.',
        rm_finearts_s4_title: 'Digital Illustration',
        rm_finearts_s4_desc: 'Procreate, Adobe Fresco, professional digital illustration on tablets.',
        rm_finearts_s5_title: 'Develop Your Style',
        rm_finearts_s5_desc: 'Experiment with different styles and develop your unique signature art style.',
        rm_finearts_s6_title: 'Publish & Monetize',
        rm_finearts_s6_desc: 'Use Instagram and ArtStation to sell art prints and products.',
        rm_medicine_s1_title: 'Sciences Foundation',
        rm_medicine_s1_desc: 'Advanced biology, organic chemistry, medical physics — academic foundation.',
        rm_medicine_s2_title: 'Pre-Medical Studies',
        rm_medicine_s2_desc: 'MCAT or equivalent exams + choosing the appropriate medical specialty.',
        rm_medicine_s3_title: 'Medical School / Health Program',
        rm_medicine_s3_desc: '6 years of medical school or 4 years in allied health specialties.',
        rm_medicine_s4_title: 'Clinical Training',
        rm_medicine_s4_desc: 'Hospital residency and dealing with real medical cases.',
        rm_medicine_s5_title: 'Specialization',
        rm_medicine_s5_desc: 'Choose your specialty: surgery, pediatrics, OB-GYN, emergency medicine, etc.',
        rm_medicine_s6_title: 'Licensing & Practice',
        rm_medicine_s6_desc: 'Obtaining professional licensing and working in a hospital or private clinic.',
        rm_engineering_s1_title: 'Mathematics & Physics Foundation',
        rm_engineering_s1_desc: 'Calculus, linear algebra, and advanced engineering physics.',
        rm_engineering_s2_title: 'Choose Your Engineering Track',
        rm_engineering_s2_desc: 'Civil, mechanical, electrical, chemical, computer — choose your specialty.',
        rm_engineering_s3_title: 'Engineering Fundamentals',
        rm_engineering_s3_desc: 'Mechanics of materials, thermodynamics, electrical circuits, and engineering programming.',
        rm_engineering_s4_title: 'CAD & Engineering Software',
        rm_engineering_s4_desc: 'AutoCAD, SolidWorks, MATLAB, ANSYS depending on your specialty.',
        rm_engineering_s5_title: 'Internships & Field Projects',
        rm_engineering_s5_desc: 'Summer training at engineering firms and implementing real field projects.',
        rm_engineering_s6_title: 'Professional Engineering License',
        rm_engineering_s6_desc: 'Passing professional licensing exams (PE/SE) and getting certified.',
        rm_law_s1_title: 'Legal Foundations',
        rm_law_s1_desc: 'Theory of law, its types, and basic legal terminology.',
        rm_law_s2_title: 'Core Law Subjects',
        rm_law_s2_desc: 'Civil, commercial, criminal, constitutional, and administrative law.',
        rm_law_s3_title: 'Legal Research & Writing',
        rm_law_s3_desc: 'Writing legal memos and briefs, and researching past case law.',
        rm_law_s4_title: 'Moot Court & Internship',
        rm_law_s4_desc: 'Moot court practice and training at law firms.',
        rm_law_s5_title: 'Bar Exam & Licensing',
        rm_law_s5_desc: 'Passing the bar association exam and obtaining practice license.',
        rm_law_s6_title: 'Specialize',
        rm_law_s6_desc: 'Lawyering, judiciary, consulting, international law, and human rights.',
        rm_tourism_s1_title: 'Tourism Fundamentals',
        rm_tourism_s1_desc: 'Types of tourism, the hospitality industry, and tourism geography.',
        rm_tourism_s2_title: 'History & Heritage',
        rm_tourism_s2_desc: 'Ancient civilizations, archaeological sites, and UNESCO human heritage.',
        rm_tourism_s3_title: 'Languages',
        rm_tourism_s3_desc: 'Mastering a second and third language — English, French, Spanish.',
        rm_tourism_s4_title: 'Tour Planning & Management',
        rm_tourism_s4_desc: 'Planning tourist tours, managing groups, and handling emergencies.',
        rm_tourism_s5_title: 'Practical Training',
        rm_tourism_s5_desc: 'Training in tourism agencies and archaeological sites with real groups.',
        rm_tourism_s6_title: 'Tour Guide License',
        rm_tourism_s6_desc: 'Obtaining the official tour guide license and starting to work.',
        crs_programming_1_title: 'HTML & CSS for Beginners',
        crs_programming_1_desc: 'Fundamentals of building web pages with HTML and CSS from scratch.',
        crs_programming_2_title: 'Build Responsive Websites',
        crs_programming_2_desc: 'Designing responsive websites with CSS Grid and Flexbox.',
        crs_programming_3_title: 'JavaScript: The Complete Guide',
        crs_programming_3_desc: 'JavaScript from beginner to professional with real-world projects.',
        crs_programming_4_title: 'Version Control with Git',
        crs_programming_4_desc: 'Code management and collaboration using Git and GitHub by Atlassian.',
        crs_programming_5_title: 'React Developer Certificate',
        crs_programming_5_desc: 'Build professional React applications with Hooks and Context API.',
        crs_programming_6_title: 'Full-Stack Web Development',
        crs_programming_6_desc: 'Build and deploy complete web applications by IBM.',
        crs_programming_7_title: 'Build Your Developer Portfolio',
        crs_programming_7_desc: 'Create a professional portfolio showcasing your skills and projects.',
        crs_design_1_title: 'Graphic Design Specialization',
        crs_design_1_desc: 'Design principles, typography, and visual branding from CalArts.',
        crs_design_2_title: 'Introduction to Typography',
        crs_design_2_desc: 'Font fundamentals, spacing, and text hierarchy from CalArts.',
        crs_design_3_title: 'Adobe Photoshop CC – Masterclass',
        crs_design_3_desc: 'Photo editing, photo manipulation, and advertisement design.',
        crs_design_4_title: 'Adobe Illustrator CC – Complete',
        crs_design_4_desc: 'Professional logo design and vector art illustration.',
        crs_design_5_title: 'Brand Identity Design',
        crs_design_5_desc: 'Complete visual identity design: logo + colors + typography.',
        crs_design_6_title: 'Freelancing for Designers',
        crs_design_6_desc: 'Publish your work on Behance & Dribbble and start freelancing.',
        crs_uiux_1_title: 'Google UX Design Certificate',
        crs_uiux_1_desc: 'A comprehensive track for user experience design by Google.',
        crs_uiux_2_title: 'Information Architecture & Design',
        crs_uiux_2_desc: 'Organizing product content and building information architecture.',
        crs_uiux_3_title: 'Wireframing & Prototyping',
        crs_uiux_3_desc: 'Drawing structural wireframes and building prototypes.',
        crs_uiux_4_title: 'Figma UI Design Bootcamp',
        crs_uiux_4_desc: 'Figma from scratch: Components, Auto-Layout, and Prototyping.',
        crs_uiux_5_title: 'UX Research & Usability Testing',
        crs_uiux_5_desc: 'Testing prototypes with real users and analyzing the results.',
        crs_uiux_6_title: 'Design Systems & Portfolio',
        crs_uiux_6_desc: 'Building scalable design systems and publishing professional case studies.',
        crs_finearts_1_title: 'Drawing & Sketching Fundamentals',
        crs_finearts_1_desc: 'Drawing from scratch: lines, shapes, perspective, and shading.',
        crs_finearts_2_title: 'Color Theory for Artists',
        crs_finearts_2_desc: 'Color wheels, color harmony, and emotions associated with colors.',
        crs_finearts_3_title: 'Watercolor Painting for Beginners',
        crs_finearts_3_desc: 'Watercolor painting: layering, washes, and detail techniques.',
        crs_finearts_4_title: 'Digital Illustration with Procreate',
        crs_finearts_4_desc: 'Professional digital drawing and illustration on the iPad.',
        crs_finearts_5_title: 'Modern & Contemporary Art',
        crs_finearts_5_desc: 'History of modern and contemporary art from MoMA New York.',
        crs_finearts_6_title: 'Selling Art Online – Monetize',
        crs_finearts_6_desc: 'Sell your artwork on Etsy, ArtStation, and Instagram.',
        crs_medicine_1_title: 'Introduction to Biology – MIT',
        crs_medicine_1_desc: 'Biology fundamentals from the Massachusetts Institute of Technology.',
        crs_medicine_2_title: 'MCAT Test Preparation',
        crs_medicine_2_desc: 'Comprehensive preparation for American medical school admission tests.',
        crs_medicine_3_title: 'Medicine in the Digital Age',
        crs_medicine_3_desc: 'Digital medicine and artificial intelligence in healthcare.',
        crs_medicine_4_title: 'Clinical Problem Solving',
        crs_medicine_4_desc: 'Clinical problem solving and medical diagnosis from UCSF.',
        crs_medicine_5_title: 'Anatomy – University of Michigan',
        crs_medicine_5_desc: 'Human anatomy from the University of Michigan.',
        crs_medicine_6_title: 'Global Health – Harvard',
        crs_medicine_6_desc: 'Global health and health policy from Harvard University.',
        crs_engineering_1_title: 'Calculus – University of Pennsylvania',
        crs_engineering_1_desc: 'Fundamental calculus for engineering and science.',
        crs_engineering_2_title: 'Introduction to Engineering',
        crs_engineering_2_desc: 'Introduction to engineering, its branches, and modern applications.',
        crs_engineering_3_title: 'Engineering Mechanics – Statics',
        crs_engineering_3_desc: 'Mechanics of materials and engineering forces from Georgia Tech.',
        crs_engineering_4_title: 'AutoCAD Complete Course',
        crs_engineering_4_desc: 'Professional digital engineering drafting using AutoCAD.',
        crs_engineering_5_title: 'Engineering Project Management',
        crs_engineering_5_desc: 'Engineering project management and field training from Rice.',
        crs_engineering_6_title: 'Mechanics of Materials – MIT',
        crs_engineering_6_desc: 'Engineering mechanics of materials course from MIT.',
        crs_law_1_title: 'Introduction to Law',
        crs_law_1_desc: 'Introduction to law, its theories, and types from University of London.',
        crs_law_2_title: 'English Common Law',
        crs_law_2_desc: 'English common law: core principles and case precedents.',
        crs_law_3_title: 'Legal Writing & Research',
        crs_law_3_desc: 'Writing legal memos, briefs, and researching case law.',
        crs_law_4_title: 'International Criminal Law',
        crs_law_4_desc: 'International criminal law and international courts from Case Western.',
        crs_law_5_title: 'Contract Law – HarvardX',
        crs_law_5_desc: 'Contract law and administration from an academic perspective – Harvard.',
        crs_law_6_title: 'International Law – Leiden',
        crs_law_6_desc: 'International law and human rights from Universiteit Leiden.',
        crs_tourism_1_title: 'Tourism & Hospitality Management',
        crs_tourism_1_desc: 'Management of tourism, hotels, and event organization.',
        crs_tourism_2_title: 'Egyptology – UPenn',
        crs_tourism_2_desc: 'Egyptology and ancient civilizations from the University of Pennsylvania.',
        crs_tourism_3_title: 'English for Tourism & Hospitality',
        crs_tourism_3_desc: 'Specialized English for tourism and hospitality.',
        crs_tourism_4_title: 'Tour Guiding Essentials',
        crs_tourism_4_desc: 'Tour guiding skills and managing tour groups effectively.',
        crs_tourism_5_title: 'Sustainable Tourism',
        crs_tourism_5_desc: 'Sustainable and responsible tourism from Wageningen University.',
        crs_tourism_6_title: 'Egyptian Heritage & Antiquities',
        crs_tourism_6_desc: 'Egyptian archaeological heritage and UNESCO World Heritage sites.',
        nav_home: 'Home', nav_assessment: 'Assessment', nav_about: 'About',
        hero_badge: '🚀 Discover Your Career Path',
        hero_title: 'Career Path Navigator',
        hero_subtitle: 'Discover the career path that truly matches your personality and skills through a smart interactive quiz.',
        start_btn: 'Start the Assessment',
        learn_more_btn: 'Learn More',
        how_title: 'How It Works',
        how_subtitle: 'Three simple steps to discover your career path',
        step1_title: 'Answer Questions',
        step1_desc: 'Answer 20 comprehensive questions about your interests and thinking style.',
        step2_title: 'We Analyze',
        step2_desc: 'The site calculates your scores across 8 different career fields.',
        step3_title: 'Get Recommendations',
        step3_desc: 'Receive a learning roadmap and suggested courses tailored to your field.',
        fields_title: 'Career Fields Covered by the Assessment',
        fields_sub: '8 diverse fields including Technology, Health, Arts, and Law',
        stat1_label: 'Career Fields',
        stat2_label: 'Comprehensive Questions',
        stat3_label: 'Recommended Courses',
        stat4_label: 'Assessment Duration',
        stat4_num: '5 min',
        testimonials_title: 'What Our Users Say',
        testimonials_sub: 'See how Career Path Navigator helped students and professionals choose their path',
        cta_title: 'Ready to Discover Your Path?',
        cta_subtitle: "It takes less than 5 minutes. Try the quiz now — it's free!",
        cta_btn: 'Start the Assessment',
        assessment_title: 'Career Assessment Quiz',
        assessment_subtext: 'Answer honestly – there are no wrong answers!',
        prev_btn: 'Previous', next_btn: 'Next', finish_btn: 'Show Results',
        results_title: 'Your Results',
        results_sub: 'Based on your answers, here is your best career path match',
        top_paths_title: 'Recommended Career Paths',
        view_roadmap: 'View Learning Roadmap',
        roadmap_title: '🗺️ Learning Roadmap',
        roadmap_sub: 'Select your track to view detailed learning steps',
        tab_programming: 'Programming', tab_design: 'Design', tab_uiux: 'UI/UX',
        tab_finearts: 'Fine Arts', tab_medicine: 'Medicine', tab_engineering: 'Engineering',
        tab_law: 'Law', tab_tourism: 'Tourism',
        courses_title: '📚 Educational Courses',
        courses_sub: 'Carefully selected resources for each career path',
        watch_btn: 'Watch Course',
        all_filter: 'All',    /* زر الفلتر "الكل" (All filter button) */
        filter_all: 'All',    /* مفتاح احتياطي للتوافق (backup key for compatibility) */
        /* Roadmap "view courses" link buttons (روابط الكورسات في خارطة التعلم) */
        roadmap_link_programming: '📚 Programming Courses',
        roadmap_link_design: '📚 Design Courses',
        roadmap_link_uiux: '📚 UI/UX Courses',
        roadmap_link_finearts: '📚 Fine Arts Courses',
        roadmap_link_medicine: '📚 Medicine Resources',
        roadmap_link_engineering: '📚 Engineering Resources',
        roadmap_link_law: '📚 Law Resources',
        roadmap_link_tourism: '📚 Tourism Resources',
        /* صفحة "عن المشروع" (About page section) */
        about_title: 'About the Project', about_sub: 'Career Path Navigator – An Educational Graduation Project',
        mission_title: 'Our Mission', team_title: 'Meet the Team',

        /* نص فقرة المهمة – النسخة الإنجليزية (Mission paragraph – English version) */
        mission_desc: 'We help students and career-changers make an informed decision based on their real interests, through an interactive quiz that recommends a clear learning roadmap across 8 professional fields.',

        about_fields_title: 'What Fields Does the Site Cover?',
        about_fields_sub: 'The assessment covers 8 career paths for all directions:',
        about_built_title: '🛠️ How Was the Project Built?',
        about_built_desc: 'This project was built to be a fast and reliable interactive tool, relying on core languages and technologies including <strong>HTML5</strong> for structure, <strong>CSS3</strong> for interface design, and <strong>Vanilla JS (JavaScript)</strong> for logic and interactions, along with the <strong>Chart.js</strong> library to display test results in clear visual charts.',
        about_team_sub: 'Information Systems Students – 4th Year',
        about_cta: '📝 Try the Assessment Now',
        about_stat1_label: 'Supported Career Fields',
        about_stat2_label: 'Interactive Questions',
        about_stat3_label: 'Recommended Courses',
        about_stat4_label: 'Assessment Duration',
        about_stat4_num: '5 min',
        footer_text: '© 2025 Career Path Navigator – Educational Project',
        field_programming: '💻 Programming',
        field_design: '🎨 Graphic Design',
        field_uiux: '📱 UI/UX',
        field_finearts: '🖌️ Fine Arts',
        field_medicine: '🏥 Medicine & Health',
        field_engineering: '⚙️ Engineering',
        field_law: '⚖️ Law',
        field_tourism: '✈️ Tourism & Guiding',
        mark_completed: 'Completed',
        /* أسماء وأدوار أعضاء الفريق (Team member names and roles – about.html) */
        team_photo_placeholder: 'Personal Photo',
        team1_name: 'Youssef Samir Kamal',
        team1_dept: 'Information Systems – 4th Year',
        team1_role: 'Web Design & Data Analysis',
        team1_detail: 'Responsible for UI design, user experience, and analyzing quiz results and data.',
        team2_name: 'Ahmed Ali Riad',
        team2_dept: 'Information Systems – 4th Year',
        team2_role: 'Mobile App Developer & UI/UX',
        team2_detail: 'Responsible for mobile app development and interactive UI/UX design.',
        team3_name: 'Ahmed Ashraf Shalaby',
        team3_dept: 'Information Systems – 4th Year',
        team3_role: 'Front-end Developer',
        team3_detail: 'Responsible for building the site structure, quiz logic, and results page with JavaScript.'
    }
};

/* اللغة الحالية – محفوظة في localStorage (Current language – persisted in localStorage) */
var currentLang = localStorage.getItem('lang') || 'ar';

/* تحويل الأرقام الغربية إلى أرقام عربية هندية (Convert Western digits to Arabic-Indic numerals) */
function toArabicNum(str) {
    return String(str).replace(/[0-9]/g, function(d) {
        return '٠١٢٣٤٥٦٧٨٩'[parseInt(d)];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    /* تطبيق اللغة المحفوظة عند تحميل الصفحة (Apply saved language on page load) */
    applyLanguage(currentLang);

    /* زر تبديل اللغة – يبدّل بين AR و EN (Language toggle button – switches between AR and EN) */
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', currentLang);
            applyLanguage(currentLang);
            /* إطلاق حدث تغيير اللغة لتحديث الاختبار (Dispatch language change event to update quiz) */
            window.dispatchEvent(new Event('languageChanged'));
        });
    }

    /* زر الهامبرغر للموبايل – يفتح/يغلق قائمة التنقل
       (Hamburger button for mobile – opens/closes the navigation menu) */
    var hamburger = document.getElementById('hamburger');
    var navbar    = document.querySelector('.navbar');
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            navbar.classList.toggle('nav-open');
        });
        /* إغلاق القائمة عند النقر على أي رابط (Close menu when any nav link is clicked) */
        var navLinks = navbar.querySelectorAll('.nav-links a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                navbar.classList.remove('nav-open');
            });
        });
    }

    /* ============================================================
       Roadmap Progress Tracking (Checkboxes)
       ============================================================ */
    var timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach(function(item) {
            var card = item.querySelector('.timeline-card');
            if (card) {
                /* Add a checkbox wrapper */
                var progressWrapper = document.createElement('div');
                progressWrapper.classList.add('progress-check');
                progressWrapper.style.marginTop = '1rem';
                progressWrapper.style.display = 'flex';
                progressWrapper.style.alignItems = 'center';
                progressWrapper.style.gap = '0.5rem';
                progressWrapper.style.justifyContent = 'center';
                progressWrapper.style.width = '100%';
                progressWrapper.style.paddingTop = '0.75rem';
                progressWrapper.style.borderTop = '1px solid var(--border)';
                progressWrapper.style.marginTop = 'auto';

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                /* Generate a unique ID based on the tab and step number */
                var contentWrapper = item.closest('.roadmap-content');
                var tabId = contentWrapper ? contentWrapper.id : 'default_tab';
                var stepTag = card.querySelector('.step-tag');
                var stepNum = stepTag ? stepTag.getAttribute('data-step-num') : '1';
                var storageKey = 'progress_' + tabId + '_' + stepNum;
                checkbox.id = storageKey;
                checkbox.checked = localStorage.getItem(storageKey) === 'true';

                var label = document.createElement('label');
                label.htmlFor = storageKey;
                label.setAttribute('data-i18n', 'mark_completed');
                label.textContent = currentLang === 'ar' ? 'اكتمل' : 'Completed';
                label.style.fontSize = '0.85rem';
                label.style.color = 'var(--text-muted)';
                label.style.cursor = 'pointer';
                checkbox.style.cursor = 'pointer';

                checkbox.addEventListener('change', function() {
                    localStorage.setItem(storageKey, this.checked);
                    if (this.checked) {
                        card.style.opacity = '0.6';
                        card.style.transform = 'scale(0.97)';
                        card.style.border = '1px dashed var(--border)';
                    } else {
                        card.style.opacity = '1';
                        card.style.transform = '';
                        card.style.border = '1px solid var(--border)';
                    }
                });

                /* Apply initial styles if checked */
                if (checkbox.checked) {
                    card.style.opacity = '0.6';
                    card.style.transform = 'scale(0.97)';
                    card.style.border = '1px dashed var(--border)';
                }

                progressWrapper.appendChild(checkbox);
                progressWrapper.appendChild(label);
                card.appendChild(progressWrapper);
            }
        });
    }

    /* ============================================================
       AOS (Animate On Scroll) Logic
       ============================================================ */
    var animateElements = document.querySelectorAll('.quiz-card, .persona-card, .path-card, .course-card, .team-card, .timeline-card');
    
    if (animateElements.length > 0 && typeof IntersectionObserver !== 'undefined') {
        animateElements.forEach(function(el) {
            el.classList.add('aos-init');
        });

        var observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    obs.unobserve(entry.target); /* Animate only once */
                }
            });
        }, {
            threshold: 0.1 /* Trigger when 10% visible */
        });

        animateElements.forEach(function(el) {
            observer.observe(el);
        });
    }
});

/* ================================================================
   applyLanguage – تطبيق اللغة على جميع عناصر الصفحة
   (Apply the chosen language to all translatable elements on the page)
   ================================================================ */
function applyLanguage(lang) {
    /* تحديث سمة اللغة على عنصر HTML (Update lang attribute on html element) */
    document.documentElement.lang = lang;
    /* الاتجاه يبقى RTL دائماً – لا يتغير عند تبديل اللغة
       (Direction stays RTL always – layout must not flip when language toggles) */

    /* تحديث نص زر تبديل اللغة (Update language toggle button text)
       يعرض "🌐 EN" عند العربية و "🌐 AR" عند الإنجليزية
       (Shows "🌐 EN" in Arabic mode and "🌐 AR" in English mode) */
    var langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = lang === 'ar' ? '🌐 EN' : '🌐 AR';

    /* ── ترجمة جميع عناصر [data-i18n] (Translate all [data-i18n] elements) ──────────
       يحدّث textContent لكل عنصر يحمل data-i18n من كائن الترجمات
       (Sets textContent of every data-i18n element from the translations object)
       استثناء: about_built_desc يستخدم innerHTML لأنه يحتوي وسوم HTML
       (Exception: about_built_desc uses innerHTML because it contains HTML tags) */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            if (key === 'about_built_desc') {
                /* هذا المفتاح يحتوي وسوم <strong> – يستخدم innerHTML (Contains <strong> tags – use innerHTML) */
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    /* ── ترجمة الأرقام في [data-i18n-num] (Translate numbers in [data-i18n-num] elements) ──
       يحوّل الأرقام إلى أرقام هندية عند العربية ويعكسها عند الإنجليزية
       (Converts digits to Arabic-Indic in AR mode, reverts to Western in EN mode) */
    document.querySelectorAll('[data-i18n-num]').forEach(function (el) {
        var val = el.getAttribute('data-i18n-num');
        el.textContent = lang === 'ar' ? toArabicNum(val) : val;
    });

    /* ── ترجمة تسميات خطوات خارطة التعلم (.step-tag) ─────────────────────────────
       (Translate roadmap step tags – .step-tag elements)
       خطوة أولى: استخراج رقم الخطوة وتخزينه في data-step-num
       (First run: extract step number and store in data-step-num)
       ثم: تحديث النص بحسب اللغة (Then: update text according to language)
       عربي: "الخطوة 3"  |  English: "Step 3" */
    document.querySelectorAll('.step-tag').forEach(function (el) {
        if (!el.hasAttribute('data-step-num')) {
            var text = el.textContent.trim();
            var match = text.match(/(\d+)/);
            var num = match ? match[1] : '1';
            el.setAttribute('data-step-num', num);
        }
        var num = el.getAttribute('data-step-num');
        el.textContent = lang === 'ar' ? 'الخطوة ' + num : 'Step ' + num;
    });

    /* ── ترجمة شارة الخطوة في بطاقات الكورسات (.course-step-badge) ──────── */
    document.querySelectorAll('.course-step-badge').forEach(function (el) {
        var num = el.getAttribute('data-step-num') || '1';
        el.textContent = lang === 'ar' ? 'الخطوة ' + num : 'Step ' + num;
    });

    /* ── ترجمة مستوى الكورس (.course-level) ───────────────────────────────────────
       (Translate course difficulty levels – .course-level elements)
       خطوة أولى: تحديد المستوى وتخزين مفتاحه الموحّد في data-level-key
       (First run: detect level and store normalized key in data-level-key)
       ثم: ترجمة المستوى حسب اللغة (Then: translate level based on language)

       تعيين المستويات (Level mapping):
         AR → EN: مبتدئ → Beginner | متوسط → Intermediate | متقدم → Advanced
         EN → AR: Beginner → مبتدئ | Intermediate → متوسط | Advanced → متقدم */
    document.querySelectorAll('.course-level').forEach(function (el) {
        /* استخراج الرمز التعبيري والنص (Extract emoji and text parts) */
        var text = el.textContent.trim();

        /* إذا لم يُخزَّن مفتاح المستوى بعد، نستنتجه من النص
           (If level key not yet stored, infer it from current text) */
        if (!el.hasAttribute('data-level-key')) {
            var key;
            /* الكشف عن المستوى سواء كان عربياً أو إنجليزياً
               (Detect level whether Arabic or English text) */
            if (text.indexOf('مبتدئ') !== -1 || text.toLowerCase().indexOf('beginner') !== -1) {
                key = 'beginner';
            } else if (text.indexOf('متوسط') !== -1 || text.toLowerCase().indexOf('intermediate') !== -1) {
                key = 'intermediate';
            } else if (text.indexOf('متقدم') !== -1 || text.toLowerCase().indexOf('advanced') !== -1) {
                key = 'advanced';
            } else {
                key = 'beginner'; /* قيمة افتراضية (default fallback) */
            }
            el.setAttribute('data-level-key', key);
        }

        /* خريطة المستويات حسب اللغة (Level labels by language) */
        var levelKey = el.getAttribute('data-level-key');
        var labels = {
            ar: { beginner: '🟢 مبتدئ', intermediate: '🟡 متوسط', advanced: '🔴 متقدم' },
            en: { beginner: '🟢 Beginner', intermediate: '🟡 Intermediate', advanced: '🔴 Advanced' }
        };
        /* تعيين النص المترجم (Set translated text) */
        el.textContent = labels[lang][levelKey] || text;
    });

    /* ── تحديث خط الصفحة حسب اللغة (Update page font based on language) ──────────
       Cairo مُحسَّن للعربية | Inter مُحسَّن للإنجليزية
       (Cairo is optimized for Arabic; Inter is used for English) */
    document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
}

/* دالة مساعدة لقراءة اللغة الحالية من الصفحة (Helper to read current lang from the page) */
function getCurrentLang() {
    return document.documentElement.lang || currentLang || 'ar';
}
