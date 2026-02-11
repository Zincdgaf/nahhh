const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const overlay = document.getElementById("overlay");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

let yesSize = 1.2;
let noClicks = 0;

const messages = [
  'Song of Solomon 3:4<br>"I found the one my heart loves." 💜',
  "because i found you 🥺",
  "See youuu on Saturdayyyy! 💞"
];

let index = 0;

noBtn.addEventListener("click", () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;
  noClicks++;

  if (noClicks >= 5) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  message.innerHTML = messages[0];
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index < messages.length) {
    message.innerHTML = messages[index];

    if (index === messages.length - 1) {
      nextBtn.style.display = "none";
    }
  }
});
