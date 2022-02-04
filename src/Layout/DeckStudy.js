import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function DeckStudy({ decks }) {
  const { deckId } = useParams();

  const deck = decks.find((deck) => deck.id === Number(deckId));

  if (!deck) {
    return null;
  }

  return (
    <>
      <h1>Study: {deck.name}</h1>
      <Card cards={deck.cards}/>
    </>
  );
}

export default DeckStudy;
