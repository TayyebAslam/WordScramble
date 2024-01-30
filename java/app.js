const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
refreshBtn = document.querySelector(".refresh-word");
chkBtn = document.querySelector(".check-word");
inputField = document.querySelector("input");
timeText = document.querySelector(".time b");

let correctWord;

const initTimer = maxTime => {
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;

        }
        clearInterval(timer)
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
initGame();
    }, 1000);
}
const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("")
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length)
    console.log(randomObj);

}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) return alert("Please enter a word check")
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
}
refreshBtn.addEventListener("click", initGame);
chkBtn.addEventListener("click", checkWord)