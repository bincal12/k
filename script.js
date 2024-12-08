// تحديد تاريخ الهدف
const targetDate = new Date("Dec 13, 2024 00:00:00").getTime();

// تحديث العد التنازلي كل ثانية
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>The event has started!</h2>";
        return;
    }

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // تحديث العد التنازلي
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // تحديث شريط التقدم
    const totalTime = targetDate - now;
    const progress = (1 - totalTime / (targetDate - new Date(0).getTime())) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);
