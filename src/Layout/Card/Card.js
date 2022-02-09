/*
  - Displays Card front and back
  - Handles card state and available user actions
*/
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";


function Card() {
  const { deckId } = useParams();
  const [state, setState] = useState({
    deck: { cards: [] },
    cardIndex: 0,
    isFlipped: false,
    hasBeenStudied: false
  })
  const history = useHistory();


  useEffect(loadDeck, [deckId]);
  function loadDeck() {
    readDeck(deckId).then((deck)=> setState( {...state, deck: deck } ));
  }

  const flipHandler = () => {
    setState({...state, hasBeenStudied: !state.hasBeenStudied, isFlipped: !state.isFlipped })
  };

  const nextCardHandler = () => {
    setState({...state, hasBeenStudied: false, isFlipped: false })
    const nextCardIndex = state.cardIndex + 1;
    if(nextCardIndex < state.deck.cards.length) return setState( {...state, cardIndex: nextCardIndex} )
    const restartCards = window.confirm(`Restart cards?\n\nClick 'cancel' to return to the home page.`);
    
    if(restartCards) return setState( {...state, cardIndex: 0} )
    history.push('/');
  }

  // get the current card's 'front' or 'back' content to be displayed
  const card = state.deck.cards[state.cardIndex];
  let content = null;
  if(card) {
    content = state.isFlipped ? card.back : card.front
  }

  const nextButton = (
    <button onClick={nextCardHandler} type="button" className="btn btn-secondary">
      Next
    </button>
  );

  return (
    <div>
      <h5>
        Card {state.cardIndex + 1} of {state.deck.cards.length}
      </h5>
      <p>{content}</p>
      <button onClick={flipHandler} type="button" className="btn btn-primary">
        Flip
      </button>
      {state.hasBeenStudied ? nextButton : null}
    </div>
  );
}

export default Card;
