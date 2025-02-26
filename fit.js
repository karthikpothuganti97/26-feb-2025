let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const slider = document.querySelector(".slider");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Auto-slide every 4 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);

// Click event for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});


function updateCountdown() {
    const now = new Date();
    const target = new Date();
    target.setDate(now.getDate() + 11);
    target.setHours(0, 0, 0, 0);
    
    let remainingTime = target - now;
    if (remainingTime <= 0) {
        document.getElementById('countdown').innerText = "Time's up!";
        return;
    }
    
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerText = `${days} Days ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

