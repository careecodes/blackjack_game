window.addEventListener('DOMContentLoaded', function() {
  const dealBtn = document.querySelector("#deal-button");
  
  // Add a click event listener to the button
  dealBtn.addEventListener('click', function(){
    console.log("you've pressed the deal button");

    // Create a new card image element for dealer
    const mySuit = "clubs";
    const dealerCard = document.createElement('img');
    dealerCard.src = `images/2_of_${mySuit}.png`;

    // Create new card image element for player
    const playerCard = document.createElement('img');
    playerCard.src = "images/4_of_diamonds.png";

    // Append the new card image element to the dealer hand div
    const dealerHandDiv = document.querySelector("#dealer-hand");
    dealerHandDiv.appendChild(dealerCard);

    // Append the player card to the player hand div
    const playerHandDiv = document.querySelector("#player-hand");
    playerHandDiv.appendChild(playerCard);
  });

  // Build deck of cards
  function buildDeck() {
	
    const suits = [
      "clubs",
      "diamonds", 
      "hearts",
      "spades"
    ];
    
    let myDeck = [];
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
    return myDeck;
  }

  let dealerHand = [];
  let playerHand = [];
 
})
