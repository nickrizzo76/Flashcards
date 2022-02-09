/*
  - Displays Card front and back
  - Handles card state and available user actions
*/
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";


function Card() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHasBeenStudied, setCardHasBeenStudied] = useState(false);
  const history = useHistory();


  useEffect(loadDeck, [deckId]);
  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  const flipHandler = () => {
    setCardHasBeenStudied(true);
    setIsFlipped(!isFlipped);
  };

  const nextCardHandler = () => {
    setIsFlipped(false);
    setCardHasBeenStudied(false);
    const nextCardIndex = cardIndex + 1;
    if(nextCardIndex < deck.cards.length) return setCardIndex(nextCardIndex);
    const restartCards = window.confirm(`Restart cards?\n\nClick 'cancel' to return to the home page.`);
    
    if(restartCards) return setCardIndex(0);
    history.push('/');
  }

  // get the current card's 'front' or 'back' content to be displayed
  const card = deck.cards[cardIndex];
  let content = null;
  if(card) {
    content = isFlipped ? card.back : card.front
  }

  const nextButton = (
    <button onClick={nextCardHandler} type="button" className="btn btn-secondary">
      Next
    </button>
  );

  return (
    <div>
      <h5>
        Card {cardIndex + 1} of {deck.cards.length}
      </h5>
      <p>{content}</p>
      <button onClick={flipHandler} type="button" className="btn btn-primary">
        Flip
      </button>
      {cardHasBeenStudied ? nextButton : null}
    </div>
  );
}

export default Card;
