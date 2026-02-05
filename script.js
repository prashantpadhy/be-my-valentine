(function(){
  emailjs.init("BC4kES9-XwMlyObCK"); // replace
})();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

noBtn.addEventListener("click", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
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
