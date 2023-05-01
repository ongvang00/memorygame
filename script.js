document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: "cinderella",
            img: "images/cind.jpeg"
        },
        {
            name: "cinderella",
            img: "images/cind.jpeg"
        },
        {
            name: "belle",
            img: "images/belle.jpeg"
        },
        {
            name: "belle",
            img: "images/belle.jpeg"
        },
        {
            name: "mulan",
            img: "images/mulan.jpeg"
        },
        {
            name: "mulan",
            img: "images/mulan.jpeg"
        },
        {
            name: "pocahontas",
            img: "images/poc.jpeg"
        },
        {
            name: "pocahontas",
            img: "images/poc.jpeg"
        },
        {
            name: "aurora",
            img: "images/sleep.jpeg"
        },
        {
            name: "aurora",
            img: "images/sleep.jpeg"
        }, 
        {
            name: "snow white",
            img: "images/snow.jpeg"
        },
        {
            name: "snow white",
            img: "images/snow.jpeg"
        },
        ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const resetBtn = document.querySelector('#reset');

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/disney.jpeg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.jpeg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpeg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/disney.jpeg');
            cards[optionTwoId].setAttribute('src', 'images/disney.jpeg');
            alert('Sorry, try again.');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found them all!";
            resetBtn.style.display = "block";
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function resetGame() {
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
        resultDisplay.textContent = 0;

        const cards = document.querySelectorAll('img');
        for (let i = 0; i < cards.length; i++) {
            cards[i].setAttribute('src', 'images/disney.jpeg');
        }

        resetBtn.style.display = "block";
    }

    createBoard();
    resetBtn.addEventListener('click', resetGame);



});

var timer;
var ele = document.getElementById('timer');

(function (){
    var sec = 0;
    timer = setInterval(()=> {
        ele.innerHTML = "00:" + sec;
        sec ++;
    }, 1000)
})()

