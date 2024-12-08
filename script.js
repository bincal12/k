// حدد التاريخ المستهدف بشكل دقيق مع الوقت
const targetDate = new Date("2025-01-20T00:00:00").getTime();

// دالة التحديث
function updateCountdown() {
    const now = new Date().getTime(); // الحصول على الوقت الحالي
    const difference = targetDate - now; // حساب الفرق بين الوقت الحالي والتاريخ المستهدف

    // إذا كان الوقت المستهدف قد مر بالفعل
    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>The event has started!</h2>";
        return; // إنهاء الدالة إذا انتهى العد التنازلي
    }

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // الأيام
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // الساعات
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // الدقائق
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // الثواني

    // تحديث القيم في الصفحة
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);

// تشغيل الدالة عند تحميل الصفحة
updateCountdown();
