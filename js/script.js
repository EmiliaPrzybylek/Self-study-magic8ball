'use strict';

const imgBall = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Tak', 'Nie', 'Lepiej, żebyś nie znał/a odpowiedzi', "Chciałbyś/abyś wiedzieć", "Pomidor!", "Hahaha!", "Odpowiedź masz w sobie. Wystarczy jej tylko poszukać", "Miał?", "Twoje pytanie jest zbyt trudne"]; 

const animationBall = () => {
    imgBall.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (question.value !== '' && question.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (question.value !== '' && question.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem "?".';
        answer.textContent = '';
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie';
        answer.textContent = ''
    }
    imgBall.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 9);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
}

imgBall.addEventListener('click', animationBall);
