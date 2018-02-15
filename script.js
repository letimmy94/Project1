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
