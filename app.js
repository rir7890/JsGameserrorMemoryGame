const cardArray = [
    {
        name: 'fries',
        img: '/bhagwan-shiv-mystic-night-phone-wallpaper2.jpg',
    },
    {
        name: 'cheeseburger',
        img: '/miyamoto mushshashi.webp'
    },
    {
        name: 'hotdog',
        img: '/shivaji.jpg'
    },
    {
        name: 'ice-cream',
        img: '/shivaji1.jpg'
    },
    {
        name: 'milkshake',
        img: '/save image for bb.jpg'
    },
    {
        name: 'pizza',
        img: '/wallpaperflare.com_wallpaper (1).jpg'
    },
    {
        name: 'fries',
        img: '/bhagwan-shiv-mystic-night-phone-wallpaper2.jpg',
    },
    {
        name: 'cheeseburger',
        img: '/miyamoto mushshashi.webp'
    },
    {
        name: 'hotdog',
        img: '/shivaji.jpg'
    }
]
// console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())//it will give random value in a array

// console.log(cardArray)
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = []
let cardsChosenIds = []
const cardWon = []


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '/wp7880207-samurai-mobile-wallpapers.jpg');
        card.setAttribute('data-id', i);
        // console.log(card,i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }

}

createBoard();

function checkMatch() {

    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosen[0];
    const optionTwoId = cardsChosen[1];
    console.log('check for the match');
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('you have click the sameImage');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you have found match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('sorry try again');

    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosenIds = []
    cardsChosen = []
    if (cardWon.length == (cardArray.length / 2)) {
        resultDisplay.innerHTML = "You win all Picture";
    }
}

function flipCard() {
    console.log(cardArray);
    let cardId = this.getAttribute('data-id');
    // console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    // console.log('clicked',cardId);
    // console.log(cardsChosen);
    cardsChosenIds.push(cardId);
    // console.log
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}