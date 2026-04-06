/* ============================================================
   results.js – صفحة النتائج (Results Page - 8 Career Categories)
   ============================================================ */

/* تفاصيل المسارات المهنية الـ 8 (8 CAREER PATH DETAILS) */
var careerDetails = {
    programming: {
        emoji: '💻',
        titleAr: 'تطوير البرمجيات',
        titleEn: 'Software Development',
        descAr:  'أنت شخص تحليلي يحب المنطق وحل المشكلات. مجال البرمجة — Frontend, Backend, أو Mobile — يناسبك تماماً.',
        descEn:  'You are analytical and love logic. Software development — Frontend, Backend, or Mobile — is your perfect fit.',
        roadmapTab: 'programming'
    },
    design: {
        emoji: '🎨',
        titleAr: 'التصميم الجرافيكي',
        titleEn: 'Graphic Design',
        descAr:  'لديك عين فنية رائعة. أنت مناسب لمجال التصميم الجرافيكي وإنشاء الهويات البصرية.',
        descEn:  'You have a wonderful artistic eye. Graphic Design and visual identity creation is where you shine.',
        roadmapTab: 'design'
    },
    uiux: {
        emoji: '📱',
        titleAr: 'تصميم واجهة وتجربة المستخدم (UI/UX)',
        titleEn: 'UI/UX Design',
        descAr:  'أنت تمزج بين الإبداع والمنطق وتهتم بسهولة استخدام المنتجات الرقمية. UI/UX هو مسارك.',
        descEn:  'You blend creativity and logic, caring about digital product usability. UI/UX is your path.',
        roadmapTab: 'uiux'
    },
    finearts: {
        emoji: '🖌️',
        titleAr: 'الفنون الجميلة والرسوم التوضيحية',
        titleEn: 'Fine Arts & Illustration',
        descAr:  'أنت مبدع يعبّر بحرية عن أفكاره عبر الفن. الرسم والتصوير والفنون الجميلة هي عالمك.',
        descEn:  'You are a free creative spirit. Drawing, painting, and Fine Arts is your world.',
        roadmapTab: 'finearts'
    },
    medicine: {
        emoji: '🏥',
        titleAr: 'الطب والعلوم الصحية',
        titleEn: 'Medicine & Health Sciences',
        descAr:  'أنت شخص يهتم بالإنسان وصحته. مجال الطب والتخصصات الصحية يناسب شخصيتك التعاطفية والعلمية.',
        descEn:  'You care deeply about people and their well-being. Medicine and health sciences suit your empathetic and scientific personality.',
        roadmapTab: 'medicine'
    },
    engineering: {
        emoji: '⚙️',
        titleAr: 'الهندسة',
        titleEn: 'Engineering',
        descAr:  'أنت تحب بناء الأشياء وحل المشكلات التقنية. الهندسة — مدنية، كيميائية، ميكانيكية — هي مسارك.',
        descEn:  'You love building things and solving technical problems. Engineering — civil, chemical, mechanical — is your path.',
        roadmapTab: 'engineering'
    },
    law: {
        emoji: '⚖️',
        titleAr: 'الحقوق والقانون',
        titleEn: 'Law & Legal Studies',
        descAr:  'أنت مقنع وتؤمن بالعدالة. مجال الحقوق والمحاماة يتيح لك الدفاع عن حقوق الناس.',
        descEn:  'You are persuasive and believe in justice. Law and legal advocacy lets you defend people\'s rights.',
        roadmapTab: 'law'
    },
    tourism: {
        emoji: '✈️',
        titleAr: 'السياحة والإرشاد السياحي',
        titleEn: 'Tourism & Tour Guiding',
        descAr:  'أنت محب للتنوع الثقافي والسفر والتواصل مع الناس. السياحة والإرشاد هو المجال المثالي لك.',
        descEn:  'You love cultural diversity, travel, and connecting with people. Tourism and tour guiding is ideal for you.',
        roadmapTab: 'tourism'
    }
};

/* قراءة الدرجات من localStorage (Read scores) */
var scores = JSON.parse(localStorage.getItem('careerScores')) || {
    programming: 5, design: 3, uiux: 7, finearts: 2,
    medicine: 4, engineering: 6, law: 3, tourism: 4
};

var radarChartInstance = null;

/* رسم المخطط الراداري بـ 8 محاور (Draw Radar Chart with 8 axes) */
function drawRadarChart() {
    var canvas = document.getElementById('radarChart');
    if (!canvas) return;

    var lang      = getCurrentLang ? getCurrentLang() : (localStorage.getItem('lang') || 'ar');
    var isDark    = document.body.classList.contains('dark-mode');
    var gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)';
    var textColor = isDark ? '#e8ecf8' : '#1e2235';

    var labels = lang === 'ar'
        ? ['البرمجة', 'التصميم', 'UI/UX', 'الفنون', 'الطب', 'الهندسة', 'الحقوق', 'السياحة']
        : ['Programming', 'Design', 'UI/UX', 'Fine Arts', 'Medicine', 'Engineering', 'Law', 'Tourism'];

    if (radarChartInstance) radarChartInstance.destroy();

    radarChartInstance = new Chart(canvas.getContext('2d'), {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: lang === 'ar' ? 'درجاتك' : 'Your Scores',
                data: [
                    scores.programming, scores.design, scores.uiux, scores.finearts,
                    scores.medicine, scores.engineering, scores.law, scores.tourism
                ],
                backgroundColor: 'rgba(79, 110, 247, 0.2)',
                borderColor:     'rgba(79, 110, 247, 1)',
                pointBackgroundColor: 'rgba(79, 110, 247, 1)',
                pointBorderColor: '#fff',
                pointRadius: 5,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor, font: { size: 12 } } }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    /* تمت إزالة الحد الأقصى الثابت للسماح بالتكيف التلقائي مع أعلى نتيجة (Removed hardcoded max to allow dynamic scaling based on highest score) */
                    grid:       { color: gridColor },
                    angleLines: { color: gridColor },
                    ticks:      { color: textColor, backdropColor: 'transparent', font: { size: 10 } },
                    pointLabels: { color: textColor, font: { size: 11, weight: 'bold' } }
                }
            }
        }
    });
}

/* إظهار بطاقة الشخصية للمسار الأعلى (Show top persona card) */
function showPersonaCard() {
    var lang   = getCurrentLang ? getCurrentLang() : (localStorage.getItem('lang') || 'ar');
    var sorted = Object.keys(scores).sort(function (a, b) { return scores[b] - scores[a]; });
    var topKey = sorted[0];
    var career = careerDetails[topKey];

    var emojiEl    = document.getElementById('careerEmoji');
    var titleEl    = document.getElementById('careerTitle');
    var descEl     = document.getElementById('careerDesc');
    var roadmapBtn = document.getElementById('roadmapBtn');

    if (emojiEl)    emojiEl.textContent    = career.emoji;
    if (titleEl)    titleEl.textContent    = lang === 'ar' ? career.titleAr : career.titleEn;
    if (descEl)     descEl.textContent     = lang === 'ar' ? career.descAr  : career.descEn;

    localStorage.setItem('topCareer', topKey);

    if (roadmapBtn) {
        roadmapBtn.href        = 'roadmap.html?tab=' + career.roadmapTab;
        roadmapBtn.textContent = lang === 'ar' ? 'عرض خارطة التعلم 🗺️' : 'View Learning Roadmap 🗺️';
    }
}

/* إظهار أعلى مسارين موصى بهما (Show top 2 path cards) */
function showTopPaths() {
    var lang = getCurrentLang ? getCurrentLang() : (localStorage.getItem('lang') || 'ar');
    var container = document.getElementById('pathsContainer');
    if (!container) return;

    var sorted = Object.keys(scores).sort(function (a, b) { return scores[b] - scores[a]; });
    var rankLabels = lang === 'ar' ? ['الأفضل لك 🥇', 'الثاني الأنسب 🥈'] : ['Best Match 🥇', 'Second Match 🥈'];

    container.innerHTML = '';
    sorted.slice(0, 2).forEach(function (key, i) {
        var career = careerDetails[key];
        var card   = document.createElement('div');
        card.className = 'path-card';
        card.innerHTML =
            '<div class="path-rank">' + rankLabels[i] + '</div>' +
            '<h4>' + career.emoji + ' ' + (lang === 'ar' ? career.titleAr : career.titleEn) + '</h4>' +
            '<p>' + (lang === 'ar' ? career.descAr : career.descEn) + '</p>' +
            '<a href="roadmap.html?tab=' + career.roadmapTab + '" class="btn btn-outline">' +
            (lang === 'ar' ? 'عرض خارطة التعلم' : 'View Roadmap') + '</a>';
        container.appendChild(card);
    });
}

function renderResults() {
    drawRadarChart();
    showPersonaCard();
    showTopPaths();
}

document.addEventListener('DOMContentLoaded', function () {
    renderResults();
    window.addEventListener('languageChanged', renderResults);
    window.addEventListener('themeChanged', renderResults);
});
