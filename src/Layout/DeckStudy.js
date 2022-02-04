import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Card from "./Card";

function DeckStudy({ decks }) {
  const { deckId } = useParams();
  const history = useHistory();
  const deck = decks.find((deck) => deck.id === Number(deckId));
  const [cardIndex, setCardIndex] = useState(0);

  const nextCardHandler = () => {
    const nextCardIndex = cardIndex + 1;
    if(nextCardIndex < deck.cards.length) return setCardIndex(nextCardIndex);
    const restartCards = window.confirm(`Restart cards?\n\nClick 'cancel' to return to the home page.`);
    
    if(restartCards) return setCardIndex(0);
    history.push('/');
  }

  if (!deck) {
    return null;
  }

  return (
    <>
      <h1>Study: {deck.name}</h1>
      <h3>Number of cards: {deck.cards.length}</h3>
      <Card card={deck.cards[cardIndex]} nextCardHandler={nextCardHandler}/>
    </>
  );
}

export default DeckStudy;
