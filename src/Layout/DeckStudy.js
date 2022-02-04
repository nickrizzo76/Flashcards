import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

function DeckStudy({ decks }) {
  const { deckId } = useParams();
  const deck = decks.find((deck) => deck.id === Number(deckId));
  const [cardIndex, setCardIndex] = useState(0);

  const nextCardHandler = () => {
    setCardIndex(cardIndex + 1);

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

// isFlipped = false;
// if isFlipped ? render front : render back

export default DeckStudy;
