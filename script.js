function updateCountdown() {
    const target = new Date("2025-05-18T18:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    const display = diff > 0
      ? `${days}d ${hours}h ${minutes}m ${seconds}s`
      : "It's Wedding Time!";
  
    document.getElementById("countdown").innerText = display;
  }
  
  setInterval(updateCountdown, 1000);
  