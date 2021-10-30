window.addEventListener('DOMContentLoaded', function() {
  const dealBtn = document.querySelector("#deal-button");
  
  // Add a click event listener to the button
  dealBtn.addEventListener('click', function(){
    console.log("you've pressed the deal button");

    // Create a new card image element for dealer
    const mySuit = "clubs";
    const newCard = document.createElement('img');
    newCard.src = `images/2_of_${mySuit}.png`;

    // Create new card image element for player
    const playerCard = document.createElement('img');
    playerCard.src = "images/4_of_diamonds.png";

    // Append the new card image element to the dealer hand div
    const dealerHand = document.querySelector("#dealer-hand");
    dealerHand.appendChild(newCard);

    // Append the player card to the player hand div
    const playerHand = document.querySelector("#player-hand");
    playerHand.appendChild(playerCard);
  });


  let myDeck = [];

const suits = [
	"clubs",
	"diamonds", 
	"hearts",
	"spades"
];

// loop through each of the 4 suits...
for(s=0; s<suits.length; s++) {
	// loop through rank 1-13
	for(r=1; r<=13; r++){
	myDeck.push(
		{rank: r,
		suit: suits[s]}
	);
	}
}

console.log(myDeck);
console.log("total number of cards: " + myDeck.length);
})
