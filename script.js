var cards = [
  {
    name: 'Finn',
    duplicate: 'one',
    cardImage: 'images/Finn.png'
  },
  {
    name: 'Finn',
    duplicate: 'two',
    cardImage: 'images/Finn.png'
  },
  {
    name: 'Jake',
    duplicate: 'three',
    cardImage: 'images/Jake.png'
  },
  {
    name: 'Jake',
    duplicate: 'four',
    cardImage: 'images/Jake.png'
  },
  {
    name: 'PB',
    duplicate: 'five',
    cardImage: 'images/PB.png'
  },
  {
    name: 'PB',
    duplicate: 'six',
    cardImage: 'images/PB.png'
  },
  {
    name: 'FP',
    duplicate: 'seven',
    cardImage: 'images/FP.png'
  },
  {
    name: 'FP',
    duplicate: 'eight',
    cardImage: 'images/FP.png'
  },
  {
    name: 'Beemo',
    duplicate: 'nine',
    cardImage: 'images/Beemo.png'
  },
  {
    name: 'Beemo',
    duplicate: 'ten',
    cardImage: 'images/Beemo.png'
  },
  {
    name: 'Peppermint,
    duplicate: 'eleven',
    cardImage: 'images/Peppermint.png'
  },
  {
    name: 'Peppermint',
    duplicate: 'twelve',
    cardImage: 'images/Peppermint.png'
  },
  {
    name: 'Gunter',
    duplicate: 'thirteen',
    cardImage: 'images/Gunter.png'
  },
  {
    name: 'Gunter',
    duplicate: 'fourteen',
    cardImage: 'images/Gunter.png'
  },
  {
    name: 'Marcelene',
    duplicate: 'fifteen',
    cardImage: 'images/Marcelene.png'
  },
  {
    name: 'Marcelene',
    duplicate: 'sixteen',
    cardImage: 'images/Marcelene.png'
  },
  {
    name: 'Prismo',
    duplicate: 'seventeen',
    cardImage: 'images/Prismo.png'
  },
  {
    name: 'Prismo',
    duplicate: 'eighteen',
    cardImage: 'images/Prismo.png'
  },
  {
    name: 'Lady',
    duplicate: 'nineteen',
    cardImage: 'images/Lady.png'
  },
  {
    name: 'Lady',
    duplicate: 'twenty',
    cardImage: 'images/Lady.png'
  }
];

var cardsInPlay = [];

var checkForMatch = function () {
 if (cardsInPlay[0].src === cardsInPlay[1].src) {
   return true;
 } else {
   return false;
 }
};

var flipCard = function () {
  cardId = this.getAttribute('dataid');
  if (this !== cardsInPlay[0] && this.src === 'file:///Users/timmy/wdi/projects/Project1/images/adventure_time_logo.png') {
    cardsInPlay.push(this);
    this.setAttribute('src', cards[cardId].cardImage);
  }
  if (cardsInPlay.length === 2) {
    var match = checkForMatch();
    if (!match) {
      var twoCards = cardsInPlay;
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
 
 var flipBack = function (twoarray) {
  for(var i = 0 ; i < 2 ; i++) {
    twoarray[i].setAttribute('src', 'images/adventure_time_logo.png');
  }
 };
 
 var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/adventure_time_logo.png');
    cardElement.setAttribute('dataid', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('gameboard').appendChild(cardElement);
  }
 }
 
 createBoard();
 