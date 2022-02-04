import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Card({ cards }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHasBeenStudied, setCardHasBeenStudied] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const history = useHistory();

  if (!cards) return null;

  const card = cards[cardIndex];
  const content = isFlipped ? card.back : card.front;

  const flipHandler = () => {
    setCardHasBeenStudied(true);
    setIsFlipped(!isFlipped);
  };


  const nextCardHandler = () => {
    setIsFlipped(false);
    setCardHasBeenStudied(false);
    const nextCardIndex = cardIndex + 1;
    if(nextCardIndex < cards.length) return setCardIndex(nextCardIndex);
    const restartCards = window.confirm(`Restart cards?\n\nClick 'cancel' to return to the home page.`);
    
    if(restartCards) return setCardIndex(0);
    history.push('/');
  }

  const nextButton = (
    <button onClick={nextCardHandler} type="button" className="btn btn-secondary">
      Next
    </button>
  );

  return (
    <>
      <h5>
        Card {cardIndex + 1} of {cards.length}
      </h5>
      <p>{content}</p>
      <button onClick={flipHandler} type="button" className="btn btn-primary">
        Flip
      </button>
      {cardHasBeenStudied ? nextButton : null}
    </>
  );
}

export default Card;
