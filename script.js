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
]
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document. querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/disney.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0]===cardsChosenId[1]){
        alert ('You found a match')
        cards[optionOneId].setAttribute('src','images/white.jpeg')
        cards[optionTwoId].setAttribute('src','images/white.jpeg')
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'images/disney.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/disney.jpeg')
        alert ('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You found them all"
    }
}
function flipCard () {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()

})