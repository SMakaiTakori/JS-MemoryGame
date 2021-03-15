document.addEventListener("DOMContentLoaded", () => {
  //create an array of cards to use later
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  const grid = document.querySelector(".grid");

  //Create the game board
  const createBoard = () => {
    //loop through the cardsArray
    for (let i = 0; i < cardArray.length; i++) {
      //for each card create an image element
      var card = document.createElement("img");
      //initially the card will be blank
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      //flipcard function to be called on click of each card
      //   card.addEventListener("click", flipcard);
      //append each card to the grid element
      grid.appendChild(card);
    }
  };
});
