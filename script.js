function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>The event has started!</h2>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // إضافة تأثير التلاشي
    document.getElementById("days").textContent = days;
    document.getElementById("days").classList.add("fade");
    document.getElementById("hours").textContent = hours;
    document.getElementById("hours").classList.add("fade");
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("minutes").classList.add("fade");
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("seconds").classList.add("fade");

    // إزالة التأثير بعد نهاية الأنيميشن
    setTimeout(() => {
        document.getElementById("days").classList.remove("fade");
        document.getElementById("hours").classList.remove("fade");
        document.getElementById("minutes").classList.remove("fade");
        document.getElementById("seconds").classList.remove("fade");
    }, 1000);
}
