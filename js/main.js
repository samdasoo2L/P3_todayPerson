const startButton = document.querySelector(".start-button");
const personName = document.querySelector(".person-name");
const tipContents = document.querySelector(".tip-contents");

const resultName = ["?", "?"];

function RandomName(num) {
  const randomIndex = Math.floor(Math.random() * initialArr.length);
  resultName[num] = initialArr[randomIndex];
}

function RandomTip() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function startRandom() {
  startButton.innerText = "Restart";
  RandomName(0);
  RandomName(1);
  personName.innerText = resultName.join("");
  tipContents.innerText = RandomTip();
}

startButton.addEventListener("click", startRandom);
