'use strict';

const imgBall = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Tak', 'Nie', 'Lepiej, żebyś nie znał/a odpowiedzi', "Chciałbyś/abyś wiedzieć", "Pomidor!", "Hahaha!", "Odpowiedź masz w sobie. Wystarczy jej tylko poszukać", "Miał?", "Twoje pytanie jest zbyt trudne"]; ///8

const animationBall = () => {

    imgBall.classList.add('shake-animation');
}


function animationBallEnd(e) {
    console.log(e);
    // if(e)
    // imgBall.classList.remove('shake-animation')
}


const generateAnswer = () => {
    const number = Math.floor(Math.random() * 9)  
    //funkcja, która powoduje wybór losowy z tablicy, wybór następuje po cyfrach
    //Math.floor zaokrągla cyfrę losową
    //mnożymy razy ilosć elementów z tablicy pamiętając, że liczę się one od 0
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
    //wstawianie losowego tekstu, odwolujemy się do tablicy i zmiennej number

}



imgBall.addEventListener('click', generateAnswer);
