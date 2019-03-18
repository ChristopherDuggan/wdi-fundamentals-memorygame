const cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

const checkForMatch = () => {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert('Sorry, try again.')
    };
  };
}

const flipCard = (cardId) => {
  console.log('you flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
};

flipCard(0);
flipCard(2);
