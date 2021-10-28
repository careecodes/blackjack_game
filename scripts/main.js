window.addEventListener('DOMContentLoaded', function() {
  const dealBtn = document.querySelector("#deal-button");
  
  // Add a click event listener to the button
  dealBtn.addEventListener('click', function(){
    console.log("you've pressed the deal button");

    // Create a new card image element
    const newCard = document.createElement('img');
    console.log(newCard);
  })
})