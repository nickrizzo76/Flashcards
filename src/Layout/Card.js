import React, { useState } from "react";

function Card({ card, nextCardHandler }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHasBeenStudied, setCardHasBeenStudied] = useState(false);

  if (!card) return null;
  const content = isFlipped ? card.back : card.front;

  const flipHandler = () => {
    setCardHasBeenStudied(true);
    setIsFlipped(!isFlipped);
  };

  const nextHandler = () => {
      setIsFlipped(false);
      setCardHasBeenStudied(false);
      nextCardHandler();
  }

  const nextButton = (
    <button
      onClick={nextHandler}
      type="button"
      className="btn btn-secondary"
    >
      Next
    </button>
  );

  return (
    <>
      <p>{content}</p>
      <button onClick={flipHandler} type="button" className="btn btn-primary">
        Flip
      </button>
      {cardHasBeenStudied ? nextButton : null}
    </>
  );
}

export default Card;
