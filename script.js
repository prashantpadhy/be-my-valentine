(function(){
  emailjs.init("BC4kES9-XwMlyObCK");
})();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");
const music = document.getElementById("music");

let noClicks = 0;

// NO button — mobile tap escape (no hover)
noBtn.addEventListener("click", () => {
  noClicks++;

  if (noClicks === 1) noBtn.innerText = "Are you sure? 😅";
  else if (noClicks === 2) noBtn.innerText = "Try again 😌";
  else if (noClicks >= 3) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }

  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button
yesBtn.addEventListener("click", () => {
  // Mobile haptic vibration (if supported)
  if (navigator.vibrate) {
    navigator.vibrate([60, 30, 60]);
  }

  music.play().catch(() => {});
  letter.style.display = "flex";

  // Heart rain
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }

  emailjs.send("service_u6o4u1v","template_lyglmmq",{
    message: "Asmita clicked YES 💘"
  });
});

closeLetter.addEventListener("click", () => {
  letter.style.display = "none";
});
