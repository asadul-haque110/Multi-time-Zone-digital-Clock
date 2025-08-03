const clocks = [
  { id: "utc", timeZone: "UTC" },
  { id: "newyork", timeZone: "America/New_York" },
  { id: "london", timeZone: "Europe/London" },
  { id: "Dhaka", timeZone: "Asia/Dhaka" },
  { id: "tokyo", timeZone: "Asia/Tokyo" }
];

function updateClocks() {
  clocks.forEach(clock => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: clock.timeZone
    });
    document.querySelector(`#${clock.id} .time`).textContent = timeString;
  });
}

setInterval(updateClocks, 1000);
updateClocks();
