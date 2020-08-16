// Code your solutions in this file
const cards = ["Sarah", "Sam", "Jason", "Derek"]

function writeCards(cards) { 
  let i = 0; 
  while (i < cards.length) { 
    console.log(`Thank you for the gift ${cards[i]} I really liked it`);
    i++; 
  } 
  
  return cards; 
} 

writeCards(cards);