var cards = [
  {
    name: 'finn',
    duplicate: 'one',
    cardImage: 'images/finn.png'
  },
  {
    name: 'finn',
    duplicate: 'two',
    cardImage: 'images/finn.png'
  },
  {
    name: 'jake',
    duplicate: 'three',
    cardImage: 'images/jake.png'
  },
  {
    name: 'jake',
    duplicate: 'four',
    cardImage: 'images/jake.png'
  },
  {
    name: 'pb',
    duplicate: 'five',
    cardImage: 'images/pb.png'
  },
  {
    name: 'pb',
    duplicate: 'six',
    cardImage: 'images/pb.png'
  },
  {
    name: 'fp',
    duplicate: 'seven',
    cardImage: 'images/fp.png'
  },
  {
    name: 'fp',
    duplicate: 'eight',
    cardImage: 'images/fp.png'
  },
  {
    name: 'beemo',
    duplicate: 'nine',
    cardImage: 'images/beemo.png'
  },
  {
    name: 'beemo',
    duplicate: 'ten',
    cardImage: 'images/beemo.png'
  },
  {
    name: 'peppermint',
    duplicate: 'eleven',
    cardImage: 'images/peppermint.png'
  },
  {
    name: 'pepperminto',
    duplicate: 'twelve',
    cardImage: 'images/peppermint.png'
  },
  {
    name: 'gunter',
    duplicate: 'thirteen',
    cardImage: 'images/gunter.png'
  },
  {
    name: 'gunter',
    duplicate: 'fourteen',
    cardImage: 'images/gunter.png'
  },
  {
    name: 'marcelene',
    duplicate: 'fifteen',
    cardImage: 'images/marcelene.png'
  },
  {
    name: 'marcelene',
    duplicate: 'sixteen',
    cardImage: 'images/marcelene.png'
  },
  {
    name: 'prismo',
    duplicate: 'seventeen',
    cardImage: 'images/prismo.png'
  },
  {
    name: 'prismo',
    duplicate: 'eighteen',
    cardImage: 'images/prismo.png'
  },
  {
    name: 'lady',
    duplicate: 'nineteen',
    cardImage: 'images/lady.png'
  },
  {
    name: 'lady',
    duplicate: 'twenty',
    cardImage: 'images/lady.png'
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
 