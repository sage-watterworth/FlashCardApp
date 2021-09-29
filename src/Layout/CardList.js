import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function CardList({ deck, cards }) {
  const history = useHistory();
  const deckId = useParams();
  const [frontSide, setFrontSide] = useState(true);
  let [currentCard, setCurrentCard] = useState(0);

console.log(deck);

  //Restart cards
  const handleLast = () => {
    const result = window.confirm(
      "Restart cards? Click cancel to return to the home page."
    );
    if (result === true) {
      setCurrentCard(0);
    } else {
      history.push("/");
    }
  };


  //Next button
  function handleNext() {
    if (currentCard + 1 === deck.cards.length) {
      handleLast();
      return
    }
    setCurrentCard(currentCard + 1);
    setFrontSide(() => !frontSide);
  }


  //Card flip
  const flipHandler = () => {
    setFrontSide(() => !frontSide);
  };

  if (!deck.cards.length) {
    console.log(deck.cards);
    return null;
  }


// const cardList = deck.cards.map((card) => {

//   return (

//   );
// })


return (
  <div>
          <div className="card" key={deck.cards[currentCard].id}>
            <div className="card-body">
              <h5 className="card-title">
                Card {currentCard + 1} of {deck.cards.length}
              </h5>
              <p className="card-text">
                {frontSide
                  ? deck.cards[currentCard].front
                  : deck.cards[currentCard].back}
              </p>
              <button className="btn btn-secondary" onClick={flipHandler}>
                Flip
              </button>
              {frontSide ? null : (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
)

}




export default CardList;
