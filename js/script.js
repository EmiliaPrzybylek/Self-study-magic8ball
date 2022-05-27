'use strict';

const imgBall = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Tak', 'Nie', 'Lepiej, żebyś nie znał/a odpowiedzi', "Chciałbyś/abyś wiedzieć", "Pomidor!", "Hahaha!", "Odpowiedź masz w sobie. Wystarczy jej tylko poszukać", "Miał?", "Twoje pytanie jest zbyt trudne"]; ///8




//3.
const animationBall = () => {
    imgBall.classList.add('shake-animation');
    //aby móc poprawnie wywołać animację, trzeba opóźnieć wywołanie checkInput za pomocą setTimeout, inaczej animacja nie działa, bo równocześnie nadajemy i usuwamy klasę animacji
    setTimeout(checkInput, 1000);
}


// 2.
const checkInput = () => {
    if (question.value !== '' && question.value.slice(-1) === '?') {
        // metoda slice() sprawdza ostatni znak w stringu, w tym przypadku sprawdzamy czy mamy znak zapytania na końcu zdania
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

//1.
const generateAnswer = () => {
    const number = Math.floor(Math.random() * 9);
    //funkcja, która powoduje wybór losowy z tablicy, wybór następuje po cyfrach
    //Math.floor zaokrągla cyfrę losową
    //mnożymy razy ilosć elementów z tablicy pamiętając, że liczę się one od 0
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
    //wstawianie losowego tekstu, odwolujemy się do tablicy i zmiennej number.
}



imgBall.addEventListener('click', animationBall);
//kolejność odpalania fukncji jest tutaj ważna, pierwsza jest odnośnie animacji i zawiera w sobie kolejną funkcję do wywołania