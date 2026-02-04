const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    noBtn.innerText = "Are you sure? 😅";
  } else if (noCount === 2) {
    noBtn.innerText = "Still no? 😌";
  } else {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", async () => {
  yesBtn.classList.add("yes-animate");
  response.innerHTML = "She said YES 💘😭";

  try {
    await fetch("/api/notify", { method: "POST" });
  } catch (e) {
    console.log("Email failed");
  }
});
