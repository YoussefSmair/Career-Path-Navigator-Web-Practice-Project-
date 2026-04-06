/* ============================================================
   theme.js – تبديل الوضع الليلي / الفاتح (Dark / Light Mode Toggle)
   ============================================================

   كيف يعمل؟ (HOW IT WORKS):
   - نحفظ تفضيلات المستخدم للوضع في localStorage
     (We store the user's theme preference in localStorage)
   - عند تحميل الصفحة، نتحقق من localStorage ونطبق الوضع المحفوظ
     (When the page loads, we check localStorage and apply the saved theme)
   - عند النقر على الزر، نقوم بتبديل كلاس .dark-mode على عنصر <body>
     (When the button is clicked, we toggle the .dark-mode class on <body>)
   ============================================================ */

// التشغيل بمجرد تحميل هذا السكربت (Run as soon as this script loads - before DOMContentLoaded)
// هذا يمنع وميض الصفحة بالوضع الخاطئ (This prevents the page from flashing the wrong theme)
(function () {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
})();

// انتظار انتهاء تحميل الصفحة قبل الوصول للأزرار (Wait for the page to finish loading before accessing buttons)
document.addEventListener('DOMContentLoaded', function () {

    var themeBtn = document.getElementById('themeToggle');

    // إذا لم يكن الزر موجوداً في هذه الصفحة، توقف هنا (If button doesn't exist on this page, stop here)
    if (!themeBtn) return;

    // تحديث أيقونة الزر لتطابق الوضع الحالي (Update button icon to match current theme)
    updateThemeIcon();

    // عند نقر المستخدم على زر التبديل (When the user clicks the toggle button)
    themeBtn.addEventListener('click', function () {
        // تبديل كلاس الوضع الليلي على الـ body (Toggle the dark-mode class on <body>)
        document.body.classList.toggle('dark-mode');

        // حفظ الاختيار الجديد في localStorage (Save the new preference to localStorage)
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // تحديث أيقونة الزر (Update the button icon)
        updateThemeIcon();

        // إخبار السكربتات الأخرى بحدوث تغيير في الوضع (Tell other scripts that the theme changed)
        // (results.js يستمع لهذا الحدث لإعادة رسم المخطط البياني)
        window.dispatchEvent(new Event('themeChanged'));
    });

    // تحديث الأيقونة التعبيرية على الزر بناءً على الوضع الحالي (Updates the emoji icon on the button based on current theme)
    function updateThemeIcon() {
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Light';
        } else {
            themeBtn.textContent = '🌙 Dark';
        }
    }
});
