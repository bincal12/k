// Set the target date (make sure to adjust this to your desired target)
const targetDate = new Date("2025-01-20T00:00:00Z").getTime();

// Update the countdown every second
function updateCountdown() {
    const now = new Date().getTime(); // Get current time
    const difference = targetDate - now; // Calculate the difference

    // If the countdown reaches zero
    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>The event has started!</h2>";
        return; // Stop the countdown
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Run the function every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();
