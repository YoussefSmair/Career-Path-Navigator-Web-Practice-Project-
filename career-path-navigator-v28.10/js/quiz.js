/* ============================================================
   quiz.js – منطق الاختبار المهني (Assessment Quiz Logic)
   20 سؤال، 8 فئات مهنية (20 Questions, 8 Career Categories)
   ============================================================

   الفئات (Categories):
   - programming  (البرمجة)
   - design       (التصميم الجرافيكي)
   - uiux         (UI/UX)
   - finearts     (الفنون الجميلة)
   - medicine     (الطب والعلوم الصحية)
   - engineering  (الهندسة)
   - law          (الحقوق والقانون)
   - tourism      (السياحة والإرشاد)

   كيف تعمل الأوزان؟ (How the weights work)
   كل إجابة تضيف نقاطاً لفئات معينة. بعد الانتهاء من الأسئلة،
   الفئة ذات أعلى مجموع هي المسار المهني الموصى به للمستخدم.
   (Each option adds points to specific categories. After all questions,
   the highest-scoring category is the user's recommended career path.)
   ============================================================ */

var questions = [

    /* Q1 – التفكير المنطقي (Logical thinking) */
    {
        ar: 'عندما تواجه مشكلة معقدة، كيف تتعامل معها؟',
        en: 'When you face a complex problem, how do you approach it?',
        options: [
            {
                ar:  'أحللها خطوة بخطوة وأبحث عن حل منطقي ومنظم',
                en:  'I break it down step by step and look for a logical, structured solution',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 1, engineering: 3, law: 2, tourism: 0 }
            },
            {
                ar:  'أفكر بطريقة إبداعية وأخرج عن المألوف',
                en:  'I think creatively and look for out-of-the-box solutions',
                weights: { programming: 1, design: 2, uiux: 2, finearts: 3, medicine: 0, engineering: 1, law: 0, tourism: 2 }
            },
            {
                ar:  'أبحث عن الجانب الإنساني وأفكر كيف يؤثر على الناس',
                en:  'I look at the human side and think about how it affects people',
                weights: { programming: 0, design: 0, uiux: 2, finearts: 0, medicine: 3, engineering: 0, law: 2, tourism: 2 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q2 – مساعدة الآخرين (Helping people) */
    {
        ar: 'ما الذي يشعرك بالرضا أكثر في حياتك؟',
        en: 'What gives you the greatest sense of satisfaction in life?',
        options: [
            {
                ar:  'مساعدة شخص مريض أو محتاج والشعور بأنني أنقذت حياة',
                en:  'Helping someone sick or in need, feeling like I saved a life',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 0, law: 1, tourism: 1 }
            },
            {
                ar:  'بناء شيء ملموس يدوم — جسر، مبنى، نظام',
                en:  'Building something tangible that lasts — a bridge, building, or system',
                weights: { programming: 2, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'الدفاع عن حق شخص مظلوم وتحقيق العدالة',
                en:  'Defending someone\'s rights and achieving justice',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 1, engineering: 0, law: 3, tourism: 0 }
            },
            {
                ar:  'إسعاد الناس وتقديم تجارب لا تُنسى لهم',
                en:  'Making people happy and giving them unforgettable experiences',
                weights: { programming: 0, design: 1, uiux: 1, finearts: 2, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q3 – البرمجة والتكنولوجيا (Technology & coding) */
    {
        ar: 'ما موقفك من البرمجة والتكنولوجيا؟',
        en: 'What is your relationship with programming and technology?',
        options: [
            {
                ar:  'أحب كتابة الكود وبناء التطبيقات والمواقع — هذا شغفي',
                en:  'I love writing code and building apps/websites — it\'s my passion',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'أستخدم التكنولوجيا كأداة في عملي لكنها ليست غايتي',
                en:  'I use technology as a tool but it\'s not my main goal',
                weights: { programming: 1, design: 2, uiux: 2, finearts: 0, medicine: 1, engineering: 2, law: 1, tourism: 1 }
            },
            {
                ar:  'لا أميل كثيراً للتقنية، أفضل التواصل مع الناس',
                en:  'I don\'t lean much toward tech, I prefer interacting with people',
                weights: { programming: 0, design: 0, uiux: 1, finearts: 1, medicine: 2, engineering: 0, law: 2, tourism: 3 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q4 – الحس البصري والجمالي (Visual / aesthetic sense) */
    {
        ar: 'هل تلاحظ الجماليات والتصميم في الأشياء من حولك؟',
        en: 'Do you notice aesthetics and design in the things around you?',
        options: [
            {
                ar:  'نعم دائماً — أنتقد كل تصميم أراه وعندي حاسة جمالية قوية',
                en:  'Yes always — I critique every design I see and have a strong aesthetic sense',
                weights: { programming: 0, design: 3, uiux: 2, finearts: 3, medicine: 0, engineering: 0, law: 0, tourism: 1 }
            },
            {
                ar:  'أهتم بوظيفة الأشياء أكثر من شكلها',
                en:  'I care more about how things function than how they look',
                weights: { programming: 2, design: 0, uiux: 0, finearts: 0, medicine: 2, engineering: 3, law: 1, tourism: 0 }
            },
            {
                ar:  'أحياناً — عندما يكون شيء جميل أو قبيح جداً',
                en:  'Sometimes — when something is very beautiful or very ugly',
                weights: { programming: 1, design: 1, uiux: 1, finearts: 1, medicine: 0, engineering: 1, law: 0, tourism: 2 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q5 – العلوم والأحياء (Science & biology) */
    {
        ar: 'كيف كان شعورك تجاه مادة الأحياء والكيمياء في المدرسة؟',
        en: 'How did you feel about Biology and Chemistry in school?',
        options: [
            {
                ar:  'كانت من أفضل المواد عندي، أحب دراسة الجسم البشري والتفاعلات الكيميائية',
                en:  'Among my favorite subjects — I love studying the human body and chemical reactions',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 1, law: 0, tourism: 0 }
            },
            {
                ar:  'كانت صعبة لكن كنت أجيد الفيزياء والرياضيات',
                en:  'Hard, but I was good at Physics and Mathematics',
                weights: { programming: 2, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'لم تكن مفضلتي — أحب المواد الاجتماعية أو الأدبية',
                en:  'Not my favorite — I preferred social studies or literature',
                weights: { programming: 0, design: 1, uiux: 1, finearts: 2, medicine: 0, engineering: 0, law: 2, tourism: 2 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q6 – الإقناع والنقاش (Debate & persuasion) */
    {
        ar: 'هل تجد نفسك شخصاً مقنعاً وجيداً في الجدال والنقاش؟',
        en: 'Do you find yourself persuasive and good at debating and arguing?',
        options: [
            {
                ar:  'نعم، أستطيع بناء حجج منطقية قوية وإقناع الآخرين برأيي',
                en:  'Yes, I can build strong logical arguments and convince others of my view',
                weights: { programming: 1, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 3, tourism: 1 }
            },
            {
                ar:  'أفضل التعبير عن نفسي من خلال عملي وإبداعي',
                en:  'I prefer expressing myself through my work and creativity',
                weights: { programming: 1, design: 3, uiux: 2, finearts: 3, medicine: 0, engineering: 1, law: 0, tourism: 0 }
            },
            {
                ar:  'أقنع الناس من خلال التنظيم والأرقام والبيانات',
                en:  'I persuade people through organization, numbers, and data',
                weights: { programming: 2, design: 0, uiux: 1, finearts: 0, medicine: 1, engineering: 3, law: 2, tourism: 0 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q7 – السفر والثقافة (Travel & culture) */
    {
        ar: 'ما الذي يثير اهتمامك أكثر عند السفر إلى مكان جديد؟',
        en: 'What interests you most when you travel to a new place?',
        options: [
            {
                ar:  'الحضارة والتاريخ والثقافة — أحب شرح المواقع الأثرية للزوار',
                en:  'Civilization, history, and culture — I love explaining heritage sites to visitors',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 1, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            },
            {
                ar:  'الطبيعة والهندسة المعمارية والبنية التحتية',
                en:  'Nature, architecture, and infrastructure',
                weights: { programming: 0, design: 1, uiux: 0, finearts: 1, medicine: 0, engineering: 2, law: 0, tourism: 2 }
            },
            {
                ar:  'التواصل مع الناس والتعرف على أنظمة قانونية وسياسية مختلفة',
                en:  'Connecting with people and learning about different legal and political systems',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 2, tourism: 2 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q8 – تجربة المستخدم (User experience) */
    {
        ar: 'عند استخدامك لأي تطبيق أو موقع، ما الذي يستهويك أو يضايقك أكثر؟',
        en: 'When using any app or website, what attracts or bothers you most?',
        options: [
            {
                ar:  'سهولة الاستخدام وبساطة التجربة — أضيق إذا كان التطبيق معقداً',
                en:  'Ease of use and simplicity — I get frustrated when an app is complex',
                weights: { programming: 1, design: 1, uiux: 3, finearts: 0, medicine: 0, engineering: 1, law: 0, tourism: 1 }
            },
            {
                ar:  'الجماليات وجودة التصميم البصري',
                en:  'Aesthetics and quality of the visual design',
                weights: { programming: 0, design: 3, uiux: 2, finearts: 2, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            },
            {
                ar:  'سرعة الأداء وقوة الكود — لا تزعجني الواجهة بقدر ما تزعجني البطء والأخطاء',
                en:  'Performance and code quality — slow apps and bugs bother me more than aesthetics',
                weights: { programming: 3, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q9 – العمل اليدوي والبناء (Hands-on / building) */
    {
        ar: 'هل تستمتع بصنع أو بناء أشياء بيديك؟',
        en: 'Do you enjoy making or building things with your own hands?',
        options: [
            {
                ar:  'نعم — أحب النماذج والمشاريع الهندسية والمعمارية',
                en:  'Yes — I love models, engineering projects, and architecture',
                weights: { programming: 0, design: 1, uiux: 0, finearts: 1, medicine: 0, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'نعم — أرسم وأصنع أشياء فنية وإبداعية',
                en:  'Yes — I draw and create artistic and creative things',
                weights: { programming: 0, design: 2, uiux: 0, finearts: 3, medicine: 0, engineering: 1, law: 0, tourism: 0 }
            },
            {
                ar:  'أبني بيدي شيئاً غير مرئي — مثل الكود أو الخوارزميات',
                en:  'I build something invisible — like code or algorithms',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q10 – بيئة العمل المفضلة (Working with people vs. alone) */
    {
        ar: 'كيف تفضل بيئة العمل المثالية بالنسبة لك؟',
        en: 'What is your ideal work environment?',
        options: [
            {
                ar:  'أمام شاشة، أركز وحدي على حل مشاكل تقنية أو إبداعية',
                en:  'In front of a screen, focusing alone on technical or creative challenges',
                weights: { programming: 3, design: 2, uiux: 1, finearts: 2, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'في ميدان أو مختبر أو موقع بناء — أحب الحياة العملية',
                en:  'In a field, lab, or construction site — I love practical hands-on work',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 2, engineering: 3, law: 0, tourism: 1 }
            },
            {
                ar:  'في قاعة محكمة أو مكتب أتعامل فيه مع ملفات وناس كثيرين',
                en:  'In a courtroom or office dealing with files and many people',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 3, tourism: 0 }
            },
            {
                ar:  'في أماكن مختلفة كل يوم — مواقع أثرية، فنادق، طبيعة',
                en:  'In different places every day — heritage sites, hotels, nature',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 1, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q11 – التعاطف ورعاية الآخرين (Empathy & patient care) */
    {
        ar: 'هل تشعر بالارتياح عند التعامل مع أشخاص يمرون بضائقة أو مرض؟',
        en: 'Do you feel comfortable dealing with people going through hardship or illness?',
        options: [
            {
                ar:  'نعم، أشعر بدافع قوي لمساعدتهم والتخفيف عنهم',
                en:  'Yes, I feel a strong drive to help them and ease their pain',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 0, law: 1, tourism: 1 }
            },
            {
                ar:  'أساعد لكنني أفضل المساهمة عبر حلول تقنية أو هندسية لا عبر التعامل المباشر',
                en:  'I help but prefer contributing through technical/engineering solutions rather than direct contact',
                weights: { programming: 2, design: 0, uiux: 1, finearts: 0, medicine: 1, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'أفضل مساعدتهم عبر الفن أو الإبداع أو السياحة',
                en:  'I prefer helping them through art, creativity, or tourism experiences',
                weights: { programming: 0, design: 1, uiux: 0, finearts: 2, medicine: 0, engineering: 0, law: 0, tourism: 2 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q12 – العدالة وحقوق الإنسان (Law & justice) */
    {
        ar: 'هل تتأثر بقضايا الظلم الاجتماعي وتشعر بميل للدفاع عن حقوق الآخرين؟',
        en: 'Are you affected by social injustice and feel drawn to defending others\' rights?',
        options: [
            {
                ar:  'نعم بشدة — العدالة والحقوق الإنسانية من أكثر الأشياء قرباً لقلبي',
                en:  'Yes strongly — justice and human rights are very close to my heart',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 1, engineering: 0, law: 3, tourism: 0 }
            },
            {
                ar:  'نعم، لكنني أؤمن بأن التكنولوجيا والهندسة تحل أكثر المشكلات',
                en:  'Yes, but I believe technology and engineering solve most problems',
                weights: { programming: 2, design: 0, uiux: 1, finearts: 0, medicine: 0, engineering: 3, law: 1, tourism: 0 }
            },
            {
                ar:  'أهتم لكنني أعبّر عن ذلك من خلال الفن أو التصميم',
                en:  'I care but I express it through art or design',
                weights: { programming: 0, design: 2, uiux: 1, finearts: 3, medicine: 0, engineering: 0, law: 1, tourism: 1 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q13 – تنظيم المعلومات وعرضها (Organising & presenting information) */
    {
        ar: 'كيف تحب تنظيم المعلومات وعرضها على الآخرين؟',
        en: 'How do you like to organize and present information to others?',
        options: [
            {
                ar:  'بشرح شفهي مقنع وأنا أتحرك وأقنع الجمهور بقضيتي أو رحلتي',
                en:  'Through persuasive verbal explanation while moving and convincing an audience',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 1, medicine: 0, engineering: 0, law: 3, tourism: 3 }
            },
            {
                ar:  'من خلال رسومات بيانية وبيانات ومعادلات منظمة',
                en:  'Through organized charts, data, and equations',
                weights: { programming: 2, design: 0, uiux: 1, finearts: 0, medicine: 2, engineering: 3, law: 1, tourism: 0 }
            },
            {
                ar:  'من خلال تصاميم بصرية جميلة ومؤثرة',
                en:  'Through beautiful and impactful visual designs',
                weights: { programming: 0, design: 3, uiux: 3, finearts: 2, medicine: 0, engineering: 0, law: 0, tourism: 1 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q14 – إعادة اختيار المسار (Career shift mindset) */
    {
        ar: 'إذا كان بإمكانك اختيار مجال دراسة أو عمل من جديد، ما الذي سيتغير؟',
        en: 'If you could choose your field of study or work all over again, what would change?',
        options: [
            {
                ar:  'سأختار مجالاً علمياً مرتبطاً بالإنسان والطب والصحة',
                en:  'I would choose a scientific field related to humans, medicine, and health',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 1, law: 0, tourism: 0 }
            },
            {
                ar:  'سأختار مجالاً إبداعياً فنياً يسمح لي بالتعبير بحرية',
                en:  'I would choose a creative artistic field that allows free expression',
                weights: { programming: 0, design: 2, uiux: 1, finearts: 3, medicine: 0, engineering: 0, law: 0, tourism: 1 }
            },
            {
                ar:  'سأختار تقنية المعلومات أو الهندسة — مجال المستقبل',
                en:  'I would choose IT or engineering — the field of the future',
                weights: { programming: 3, design: 0, uiux: 2, finearts: 0, medicine: 0, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'سأختار مجالاً يجعلني أسافر وأكتشف العالم',
                en:  'I would choose a field that lets me travel and explore the world',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 1, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q15 – الرؤية المستقبلية (Long-term vision) */
    {
        ar: 'بعد 10 سنوات، أين تراها نفسك؟',
        en: 'In 10 years, where do you see yourself?',
        options: [
            {
                ar:  'رائد أعمال تقني أو مطور يبني شركة ناجحة في مجال التكنولوجيا',
                en:  'A tech entrepreneur or developer building a successful technology company',
                weights: { programming: 3, design: 0, uiux: 2, finearts: 0, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'طبيب أو أخصائي صحة أساعد مرضى في مستشفى أو عيادتي الخاصة',
                en:  'A doctor or health specialist helping patients in a hospital or my own clinic',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 0, law: 0, tourism: 0 }
            },
            {
                ar:  'محامٍ أو مستشار قانوني ناجح يدافع عن الحقوق',
                en:  'A successful lawyer or legal consultant defending rights',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 3, tourism: 0 }
            },
            {
                ar:  'فنان أو مصمم معروف، أو مرشد سياحي يحكي قصص الحضارات',
                en:  'A well-known artist or designer, or a tour guide telling stories of civilizations',
                weights: { programming: 0, design: 2, uiux: 0, finearts: 3, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q16 – حل المشكلات (Problem Solving) – سؤال عام جديد (New general question) */
    {
        ar: 'عندما تواجه عقبة في مشروع، ما هو رد فعلك الأول؟',
        en: 'When you hit a roadblock in a project, what is your first reaction?',
        options: [
            {
                ar:  'أبحث عن حلول تقنية وأجرب طرقاً مختلفة حتى أجد الطريق الصحيح',
                en:  'I research technical solutions and try different approaches until I find the right path',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 1, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'أستشير الآخرين وأجمع آراء مختلفة لأرى المشكلة من زوايا متعددة',
                en:  'I consult others and gather different opinions to see the problem from multiple angles',
                weights: { programming: 0, design: 1, uiux: 2, finearts: 0, medicine: 2, engineering: 1, law: 3, tourism: 2 }
            },
            {
                ar:  'أعيد التفكير من الصفر بطريقة إبداعية غير تقليدية',
                en:  'I rethink from scratch using a creative, unconventional approach',
                weights: { programming: 1, design: 3, uiux: 2, finearts: 3, medicine: 0, engineering: 1, law: 0, tourism: 1 }
            },
            {
                ar:  'لا أعرف / لم أجرب',
                en:  "I don't know / Never tried",
                weights: { programming: 0, design: 0, uiux: 0, finearts: 0, medicine: 0, engineering: 0, law: 0, tourism: 0 }
            }
        ]
    },

    /* Q17 – العمل الجماعي (Teamwork) – سؤال عام جديد (New general question) */
    {
        ar: 'ما دورك المفضل عند العمل ضمن فريق؟',
        en: 'What is your preferred role when working in a team?',
        options: [
            {
                ar:  'القائد الذي يضع الخطة ويوزع المهام ويتابع التنفيذ',
                en:  'The leader who sets the plan, assigns tasks, and monitors execution',
                weights: { programming: 1, design: 0, uiux: 2, finearts: 0, medicine: 2, engineering: 2, law: 3, tourism: 2 }
            },
            {
                ar:  'المنفذ التقني الذي يُنجز العمل الفعلي بدقة وكفاءة',
                en:  'The technical executor who delivers the actual work with precision and efficiency',
                weights: { programming: 3, design: 2, uiux: 1, finearts: 1, medicine: 1, engineering: 3, law: 0, tourism: 0 }
            },
            {
                ar:  'المبدع الذي يقدم أفكاراً خارج الصندوق وحلولاً مبتكرة',
                en:  'The creative who brings out-of-the-box ideas and innovative solutions',
                weights: { programming: 1, design: 3, uiux: 3, finearts: 3, medicine: 0, engineering: 1, law: 1, tourism: 2 }
            },
            {
                ar:  'الوسيط الذي يحل النزاعات ويحافظ على تناسق الفريق',
                en:  'The mediator who resolves conflicts and maintains team harmony',
                weights: { programming: 0, design: 0, uiux: 1, finearts: 0, medicine: 3, engineering: 0, law: 2, tourism: 2 }
            }
        ]
    },

    /* Q18 – الإبداع (Creativity) – سؤال عام جديد (New general question) */
    {
        ar: 'كيف تعبّر عن إبداعك في حياتك اليومية؟',
        en: 'How do you express your creativity in daily life?',
        options: [
            {
                ar:  'أكتب كوداً أو أبني مشاريع تقنية تحل مشكلات حقيقية',
                en:  'I write code or build technical projects that solve real problems',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 0, engineering: 2, law: 0, tourism: 0 }
            },
            {
                ar:  'أرسم أو أصمم أو أعمل على مشاريع بصرية فنية',
                en:  'I draw, design, or work on visual/artistic projects',
                weights: { programming: 0, design: 3, uiux: 2, finearts: 3, medicine: 0, engineering: 0, law: 0, tourism: 1 }
            },
            {
                ar:  'أكتب قصصاً أو مقالات أو أشارك في النقاشات الفكرية',
                en:  'I write stories or articles, or participate in intellectual discussions',
                weights: { programming: 0, design: 0, uiux: 0, finearts: 2, medicine: 1, engineering: 0, law: 3, tourism: 1 }
            },
            {
                ar:  'أنظم رحلات أو فعاليات وأخلق تجارب ممتعة للآخرين',
                en:  'I organize trips or events and create enjoyable experiences for others',
                weights: { programming: 0, design: 1, uiux: 1, finearts: 1, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q19 – اتخاذ القرارات (Decision Making) – سؤال عام جديد (New general question) */
    {
        ar: 'كيف تتخذ قراراتك المهمة في الحياة؟',
        en: 'How do you make important decisions in life?',
        options: [
            {
                ar:  'أجمع البيانات والأرقام وأحللها قبل أي قرار',
                en:  'I gather data and numbers and analyze them before any decision',
                weights: { programming: 3, design: 0, uiux: 1, finearts: 0, medicine: 2, engineering: 3, law: 2, tourism: 0 }
            },
            {
                ar:  'أثق بحدسي وشعوري الداخلي أكثر من الأرقام',
                en:  'I trust my intuition and inner feelings more than numbers',
                weights: { programming: 0, design: 2, uiux: 2, finearts: 3, medicine: 1, engineering: 0, law: 0, tourism: 2 }
            },
            {
                ar:  'أستشير المختصين والخبراء قبل أن أقرر',
                en:  'I consult specialists and experts before deciding',
                weights: { programming: 1, design: 0, uiux: 1, finearts: 0, medicine: 2, engineering: 1, law: 3, tourism: 1 }
            },
            {
                ar:  'أختار ما يمنحني الحرية والتنوع في حياتي',
                en:  'I choose what gives me freedom and variety in my life',
                weights: { programming: 1, design: 1, uiux: 1, finearts: 2, medicine: 0, engineering: 0, law: 0, tourism: 3 }
            }
        ]
    },

    /* Q20 – أسلوب التعلم (Learning Style) – سؤال عام جديد (New general question) */
    {
        ar: 'ما هو أسلوبك المفضل في التعلم واكتساب مهارات جديدة؟',
        en: 'What is your preferred style for learning and acquiring new skills?',
        options: [
            {
                ar:  'التعلم بالممارسة التطبيقية — أجرب وأخطئ وأتعلم من التجربة',
                en:  'Learning by doing — I try, make mistakes, and learn from experience',
                weights: { programming: 3, design: 2, uiux: 2, finearts: 2, medicine: 1, engineering: 3, law: 0, tourism: 1 }
            },
            {
                ar:  'الدراسة النظرية المعمقة أولاً، ثم التطبيق لاحقاً',
                en:  'Deep theoretical study first, then application later',
                weights: { programming: 1, design: 0, uiux: 0, finearts: 0, medicine: 3, engineering: 2, law: 3, tourism: 0 }
            },
            {
                ar:  'التعلم من خلال مشاهدة الآخرين وتقليد أساليبهم',
                en:  'Learning by watching others and emulating their styles',
                weights: { programming: 0, design: 3, uiux: 2, finearts: 3, medicine: 1, engineering: 0, law: 1, tourism: 2 }
            },
            {
                ar:  'التعلم الاجتماعي — مناقشة الأفكار مع الفريق والتعلم من الحوار',
                en:  'Social learning — discussing ideas with a team and learning through dialogue',
                weights: { programming: 0, design: 0, uiux: 2, finearts: 0, medicine: 2, engineering: 1, law: 2, tourism: 3 }
            }
        ]
    }

]; // نهاية مصفوفة الأسئلة (end questions array)

/* ----------------------------------------------------------
   حالة الاختبار – ديناميكية بناءً على عدد الأسئلة
   (Quiz state – dynamic based on number of questions)
   ---------------------------------------------------------- */
var currentIndex = 0;
/* إنشاء مصفوفة الإجابات بحجم ديناميكي يساوي عدد الأسئلة
   (Create answers array with dynamic size equal to questions count) */
var userAnswers  = new Array(questions.length).fill(null);

/* ----------------------------------------------------------
   عناصر الصفحة (Page elements – DOM references)
   ---------------------------------------------------------- */
var progressFill     = document.getElementById('progressFill');
var progressText     = document.getElementById('progressText');
var questionLabel    = document.getElementById('questionLabel');
var questionText     = document.getElementById('questionText');
var optionsContainer = document.getElementById('optionsContainer');
var prevBtn          = document.getElementById('prevBtn');
var nextBtn          = document.getElementById('nextBtn');

/* ----------------------------------------------------------
   تحميل السؤال الحالي (Load the current question)
   ---------------------------------------------------------- */
function loadQuestion() {
    /* قراءة اللغة الحالية من الصفحة (Read current language from page) */
    var lang  = getCurrentLang ? getCurrentLang() : (localStorage.getItem('lang') || 'ar');
    var q     = questions[currentIndex];
    var total = questions.length; /* ديناميكي دائماً (always dynamic) */

    /* حساب نسبة التقدم بناءً على الأسئلة المُجاب عليها فعلاً
       (Calculate progress based on actually answered questions)
       تبدأ من 0% ولا تصل 100% إلا بعد الإجابة على جميع الأسئلة
       (Starts at 0% and reaches 100% only after answering all questions) */
    var answered = userAnswers.filter(function(a) { return a !== null; }).length;
    var pct      = Math.round((answered / total) * 100);

    /* تحديث شريط التقدم البصري (Update the visual fill bar width) */
    if (progressFill) progressFill.style.width = pct + '%';

    /* تحديث نص "السؤال X من Y" (Update the "Question X of Y" text label) */
    if (progressText) {
        progressText.textContent = lang === 'ar'
            ? 'السؤال ' + (currentIndex + 1) + ' من ' + total
            : 'Question ' + (currentIndex + 1) + ' of ' + total;
    }

    /* تحديث النسبة المئوية المعروضة (Update the displayed percentage number)
       هذا العنصر موجود في assessment.html بمعرف progressPercent
       (This element exists in assessment.html as id="progressPercent") */
    var progressPercent = document.getElementById('progressPercent');
    if (progressPercent) progressPercent.textContent = pct + '%';

    /* تحديث رقم السؤال (Update the question number label) */
    if (questionLabel) {
        questionLabel.textContent = lang === 'ar'
            ? 'السؤال ' + (currentIndex + 1)
            : 'Question ' + (currentIndex + 1);
    }
    /* عرض نص السؤال (Display question text) */
    if (questionText) questionText.textContent = q[lang];

    /* بناء أزرار الإجابات (Build answer option buttons) */
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        q.options.forEach(function (option, index) {
            var btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option[lang];
            /* تمييز الإجابة المختارة مسبقاً (Highlight previously selected answer) */
            if (userAnswers[currentIndex] === index) btn.classList.add('selected');
            btn.addEventListener('click', function () { selectOption(index); });
            optionsContainer.appendChild(btn);
        });
    }

    /* إخفاء/إظهار زر السابق (Show/hide Previous button) */
    if (prevBtn) prevBtn.style.display = currentIndex > 0 ? 'inline-flex' : 'none';

    /* تحديث نص زر التالي أو "إظهار النتائج" (Update Next/Show Results button text) */
    if (nextBtn) {
        nextBtn.textContent = currentIndex === questions.length - 1
            ? (lang === 'ar' ? 'إظهار النتائج 🎯' : 'Show Results 🎯')
            : (lang === 'ar' ? 'التالي ←' : 'Next →');
    }
}

/* ----------------------------------------------------------
   اختيار إجابة (Select an answer option)
   ---------------------------------------------------------- */
function selectOption(index) {
    /* حفظ الإجابة وتحديث التحديد البصري (Save answer and update visual selection) */
    userAnswers[currentIndex] = index;
    var allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(function (btn) { btn.classList.remove('selected'); });
    allBtns[index].classList.add('selected');
    /* تحديث شريط التقدم بعد الإجابة (Update progress bar after answering) */
    loadQuestion();
}

/* ----------------------------------------------------------
   حساب النتائج النهائية (Calculate final scores)
   ---------------------------------------------------------- */
function calculateResults() {
    var scores = {
        programming: 0, design: 0, uiux: 0, finearts: 0,
        medicine: 0, engineering: 0, law: 0, tourism: 0
    };
    /* جمع أوزان كل إجابة لكل فئة (Sum weights of each answer for every category) */
    userAnswers.forEach(function (answerIndex, qIndex) {
        if (answerIndex !== null) {
            var w = questions[qIndex].options[answerIndex].weights;
            for (var key in w) { scores[key] += w[key]; }
        }
    });
    /* حفظ النقاط في localStorage لصفحة النتائج (Save scores to localStorage for results page) */
    localStorage.setItem('careerScores', JSON.stringify(scores));
}

/* ----------------------------------------------------------
   أحداث الأزرار (Button events)
   ---------------------------------------------------------- */
if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        var lang = getCurrentLang ? getCurrentLang() : 'ar';
        /* التحقق من اختيار إجابة (Check that an answer was selected) */
        if (userAnswers[currentIndex] === null) {
            alert(lang === 'ar' ? 'الرجاء اختيار إجابة أولاً' : 'Please select an answer first');
            return;
        }
        if (currentIndex === questions.length - 1) {
            /* السؤال الأخير – احسب النتائج واذهب لصفحتها
               (Last question – calculate results and go to results page) */
            calculateResults();
            window.location.href = 'results.html';
        } else {
            currentIndex++;
            loadQuestion();
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', function () {
        /* الرجوع للسؤال السابق (Go back to previous question) */
        if (currentIndex > 0) { currentIndex--; loadQuestion(); }
    });
}

/* إعادة تحميل السؤال عند تغيير اللغة لتحديث نص الأسئلة والخيارات
   (Reload question on language change to update question and option text) */
window.addEventListener('languageChanged', function () { loadQuestion(); });

/* تشغيل الاختبار عند وجود عنصر السؤال في الصفحة
   (Start the quiz when the question element exists on the page) */
if (document.getElementById('questionText')) { loadQuestion(); }
