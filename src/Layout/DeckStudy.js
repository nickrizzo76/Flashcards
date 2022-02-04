import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";

function DeckStudy({ decks }) {
  const { deckId } = useParams();

  const deck = decks.find((deck) => deck.id === Number(deckId));

  if (!deck) {
    return null;
  }
  const minCards = 3;
  if (deck.cards.length >= minCards) {
    return (
      <>
        <h1>Study: {deck.name}</h1>
        <Card cards={deck.cards} />
      </>
    );
  }
  return (
    <>
      <h1>{deck.name}: Study</h1>
      <h5>Not enough cards.</h5>
      <p>You need at least {minCards} cards to study. There are {deck.cards.length} cards in this deck.</p>
      
      <Link to={`/decks/${deck.id}/cards/new`}>
        <button type="button" className="btn btn-primary">
          Add Cards
        </button>
      </Link>
    </>
  );
}

export default DeckStudy;
