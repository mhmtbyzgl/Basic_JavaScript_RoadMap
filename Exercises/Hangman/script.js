const correctLetters = document.getElementById("correctLetters");
const wrongLettersP = document.getElementById("wrongLettersP");
const popup = document.getElementById("popup");
const message = document.getElementById("message");
const HP = document.getElementById("hp");
const playAgain = document.getElementById("playAgain");
const trueWord = document.getElementById("trueWord");
const addWordBtn = document.getElementById("addWordBtn");
const allWordsModal = document.getElementById("allWordsModal");
const wrongLettersTitle = document.getElementById("wrongLettersTitle");
const modalBtn = document.getElementById("allWordsBtn");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");
const listOfWords = document.getElementById("listOfWords");
const li = document.getElementById("liList");
const deleteWordBtn = document.getElementById("deleteWordBtn");
const editWordBtn = document.getElementById("editWordBtn");

function refreshData() {
  const localData = [
    "siber",
    "vatan",
    "php",
    "yavuzlar",
    "Siber Vatan",
    "react",
    "developer",
  ];
  const lowerLocalData = [];
  localData.forEach((data) => {
    lowerData = data.toLowerCase();
    lowerLocalData.push(lowerData);
    localStorage.setItem("words", JSON.stringify(lowerLocalData));
  });
}

// If you get error: "wordList is null" run line below JUST FOR ONE TIME
// refreshData();

let wordList = JSON.parse(localStorage.getItem("words"));
let hp = 5;
let selectedWord = selectWord();
const correctGuesses = [];
const wrongGuesses = [];

function main() {
  displayWord();
  keyControl();
}

function selectWord() {
  let word = Math.floor(Math.random() * wordList.length);
  return wordList[word].toLowerCase();
}

function displayWord() {
  correctLetters.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<div id="correctLetters">${
          letter === " " ? "_" : correctGuesses.includes(letter) ? letter : "*"
        }</div>`
    )
    .join("")}`;
  winGame();
}

function wrongLetterDisplay() {
  wrongLettersTitle.innerHTML = "Hatalı Harfler:";
  wrongLettersP.innerHTML = `${wrongGuesses.map(
    (letter) => `<div id="wrongLettersP">${letter}</div>`
  )}`;
}
function winGame() {
  const completedLetters = correctLetters.innerText.replace(/\n/g, "");
  if (completedLetters == selectedWord) {
    popup.style.display = "flex";
    popup.style.backgroundColor = "green";
    message.innerHTML = "Tebrikler Kazandınız...";
  }
}
function wrongGuess() {
  if (hp > 0) {
    hp--;
    if (hp == 0) {
      gameOver();
    }
    HP.innerHTML = `Kalan Hakkınız: ${hp}`;
  }
}
function gameOver() {
  popup.style.display = "flex";
  popup.style.backgroundColor = "red";
  message.innerHTML = "Üzgünüm Kaybettiniz...";
  trueWord.innerHTML = `Doğru Kelime: ${selectedWord}`;
}

function keyControl() {
  window.addEventListener("keydown", function (x) {
    if (x.keyCode >= 65 && x.keyCode <= 90) {
      const letter = x.key;
      if (selectedWord.includes(letter)) {
        correctGuesses.push(letter);
        displayWord();
      } else {
        if (!wrongGuesses.includes(letter)) {
          wrongGuesses.push(letter);
          wrongLetterDisplay();
          wrongGuess();
          console.log(hp);
        }
      }
    }
  });
}

// Modal
modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
  modal.style.display = "none";
});

function displayAllWords() {
  listOfWords.innerHTML = `${wordList
    .map(
      (element, index) =>
        `<li id="liList">${element} <button id="deleteWordBtn" value="${index}" onclick="deletingWord(${index})">x</button>  <button id="editWordBtn" value="${index}" onclick="editingWord('${element}', ${index})">...</button></li>`
    )
    .sort()
    .join("")}`;
}
//  End of The Modal

// Buttons
allWordsBtn.addEventListener("click", function () {
  displayAllWords();
});

addWordBtn.addEventListener("click", function () {
  addingWord();
  displayAllWords();
});

editWordBtn.addEventListener("click", function () {
  editingWord();
  displayAllWords();
});

playAgain.addEventListener("click", function () {
  location.reload();
});
//  End of The Buttons

function addingWord() {
  let newWord = prompt("Eklemek istediğiniz kelimeyi giriniz.");
  lowerWord = newWord.toLowerCase();
  if (!wordList.includes(lowerWord)) {
    if (lowerWord === null) {
      return;
    } else if (lowerWord !== null && lowerWord.trim() === "") {
      alert("Lütfen bu alanı boş bırakmayınız!!!");
    } else {
      wordList.push(`${lowerWord}`);
      localStorage.setItem("words", JSON.stringify(wordList));
    }
  } else {
    alert("Bu kelime mevcut!");
  }
}

function deletingWord(index) {
  console.log("silinen index:", index);
  if (index > -1) {
    wordList.splice(index, 1);
    localStorage.setItem("words", JSON.stringify(wordList));
  }
  displayAllWords();
}

function editingWord(element, index) {
  let editWord = prompt("Düzenlemenizi yapınız...", element);
  lowerEdit = editWord.toLowerCase();
  if (!wordList.includes(lowerEdit)) {
    if (lowerEdit === null) {
      return;
    } else if (lowerEdit !== null && lowerEdit.trim() === "") {
      alert("Lütfen bu alanı boş bırakmayınız!!!");
    } else {
      if (index > -1) {
        wordList.splice(index, 1);
        localStorage.setItem("words", JSON.stringify(wordList));
      }
      wordList.push(`${lowerEdit}`);
      localStorage.setItem("words", JSON.stringify(wordList));
      displayAllWords();
    }
  } else {
    alert("Bu kelime mevcut!");
  }
}

main();
