window.addEventListener('DOMContentLoaded', function() {
  const dealBtn = document.querySelector("#deal-button");
  
  // Add a click event listener to the button
  dealBtn.addEventListener('click', function(){
    console.log("you've pressed the deal button");

    // Create a new card image element for dealer
    const newCard = document.createElement('img');
    newCard.src = "images/2_of_clubs.png";

    // Create new card image element for player
    const playerCard = document.createElement('img');
    playerCard.src = "images/4_of_diamonds.png";

    // Append the new card image element to the dealer hand div
    const dealerHand = document.querySelector("#dealer-hand");
    dealerHand.appendChild(newCard);

    // Append the player card to the player hand div
    const playerHand = document.querySelector("#player-hand");
    playerHand.appendChild(playerCard);
  })
})