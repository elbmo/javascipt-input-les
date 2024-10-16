
const inputNickname = document.querySelector('input.input-nickname');
const inputLeeftijd = document.querySelector('input.input-leeftijd');
const buttonSend = document.querySelector('.button-send');
const buttonStuur = document.querySelector('.button-stuur');
const resultPara = document.querySelector('.result-para');

buttonSend.addEventListener('click', function() {
    let nickname = inputNickname.value;

    if (nickname === "") {
        alert("Je moet wel een nickname invoeren!");
    } else if (nickname.length <= 2) {
        alert("Het moet groter dan 2 tekens!");
    } else {
        console.log("Hallo " + nickname);
        resultPara.textContent = `Welkom ${nickname} op de pagina`;
    }
});

buttonStuur.addEventListener('click', function() {
    let leeftijd = Number(inputLeeftijd.value);

    if (leeftijd < 18) {
        alert("Jij bent onder 18");
    } else if (leeftijd === 18) {
        alert("Jij bent 18");
    } else if (leeftijd > 18) {
        alert("Jij bent ouder dan 18");
    }
});
