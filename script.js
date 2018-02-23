// You might consider putting all your data (cards array) in a separate .js file
// to clean up the look of this file and not have to scroll all the way down to view the functional JS.

var cards = [
  {
    name: 'finn',
    duplicate: 'one',
    cardImage: 'images/finn1.png'
  },
  {
    name: 'finn',
    duplicate: 'two',
    cardImage: 'images/finn1.png'
  },
  {
    name: 'jake',
    duplicate: 'three',
    cardImage: 'images/jake1.png'
  },
  {
    name: 'jake',
    duplicate: 'four',
    cardImage: 'images/jake1.png'
  },
  {
    name: 'pb',
    duplicate: 'five',
    cardImage: 'images/pb1.png'
  },
  {
    name: 'pb',
    duplicate: 'six',
    cardImage: 'images/pb1.png'
  },
  {
    name: 'fp',
    duplicate: 'seven',
    cardImage: 'images/fp1.png'
  },
  {
    name: 'fp',
    duplicate: 'eight',
    cardImage: 'images/fp1.png'
  },
  {
    name: 'beemo',
    duplicate: 'nine',
    cardImage: 'images/beemo1.png'
  },
  {
    name: 'beemo',
    duplicate: 'ten',
    cardImage: 'images/beemo1.png'
  },
  {
    name: 'peppermint',
    duplicate: 'eleven',
    cardImage: 'images/peppermint1.png'
  },
  {
    name: 'peppermint',
    duplicate: 'twelve',
    cardImage: 'images/peppermint1.png'
  },
  {
    name: 'gunter',
    duplicate: 'thirteen',
    cardImage: 'images/gunter1.png'
  },
  {
    name: 'gunter',
    duplicate: 'fourteen',
    cardImage: 'images/gunter1.png'
  },
  {
    name: 'marcelene',
    duplicate: 'fifteen',
    cardImage: 'images/marcelene1.png'
  },
  {
    name: 'marcelene',
    duplicate: 'sixteen',
    cardImage: 'images/marcelene1.png'
  },
  {
    name: 'prismo',
    duplicate: 'seventeen',
    cardImage: 'images/prismo1.png'
  },
  {
    name: 'prismo',
    duplicate: 'eighteen',
    cardImage: 'images/prismo1.png'
  },
  {
    name: 'lady',
    duplicate: 'nineteen',
    cardImage: 'images/lady1.png'
  },
  {
    name: 'lady',
    duplicate: 'twenty',
    cardImage: 'images/lady1.png'
  }
];

// You'll want to wrap all of the below JavaScript in an immediately-invoked function expression (IIFE) - e.g.:
// (function () {
//   // All of your code goes here
// })()

// Great use of semantic function names
// Adding inline comments can help you further represent what each section of code does

var cardsInPlay = [];

var checkForMatch = function () {
 if (cardsInPlay[0].src === cardsInPlay[1].src) {
   return true;
 } else {
   return false;
 }
};

cards.sort(function(a, b){return 0.5 - Math.random()});

// I would suggest separating out some of the below code into other functions that you call in flipCard:
var flipCard = function () {
  cardId = this.getAttribute('data-id');
  if (this !== cardsInPlay[0]) {
    cardsInPlay.push(this);
    this.setAttribute('src', cards[cardId].cardImage);
  }
  if (cardsInPlay.length === 2) {
    var match = checkForMatch();
    if (!match) {
      var twoCards = cardsInPlay;
      // Do you need to set twoCards to cardsInPlay, or can you just use cardsInPlay in flipBack function below?
      setTimeout(() => {
        alert("Womp!"); 
        flipBack(twoCards);
      }, 500);
    } else {
      setTimeout(() => {
        alert("Match!");
      }, 500);
    }
    cardsInPlay = [];
  }
 };
 
 // Below, twoarray should be camelCase
 var flipBack = function (twoarray) {
  for(var i = 0 ; i < 2 ; i++) {
    twoarray[i].setAttribute('src', 'images/adventure_time_logo1.png');
  }
 };
 
 var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/adventure_time_logo1.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('gameboard').appendChild(cardElement);
    // ^^ May want to define a variable for document.getElementById('gameboard') above,
    // and refer to it here to save it as a semantic variable, thus making it clearer what you are appending child to.
  }
 }
 
 createBoard();
 