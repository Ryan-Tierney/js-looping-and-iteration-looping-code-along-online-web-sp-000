// Code your solutions in this file
const cards = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(cards) { 
  for (let i = 0; i < cards.length) { 
    console.log(`Thank you, ${cards[i]} for the wonderful surprise gift!`);
    i++; 
  } 
  
  return cards; 
} 

writeCards(cards);