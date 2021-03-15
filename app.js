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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

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

  //Check for matches
  const checkForMatch = () => {
    var cards = document.querySelectorAll("img");
    //we want the first value in this array and assign to a variable
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  };

  //Flip your card

  const flipcard = () => {
    var cardId = this.getAttribute("data-id");
    //create an array of cards chosen
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardArray[cardId]);
    //add an image to the square that is clicked to invoke this function
    //based on the cardId it holds
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

  createBoard();
});
