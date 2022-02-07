import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import { readDeck } from "../utils/api";

// use params and readDeck(:id)?

function DeckStudy() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({name: "", cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  if (!deck) return null;

  const breadcrumb =
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="oi oi-home" /> Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Study
        </li>
      </ol>
    </nav>

  const minCards = 3;
  if (deck.cards.length >= minCards) {
    return (
      <>
        {breadcrumb}
        <h1>Study: {deck.name}</h1>
        <Card cards={deck.cards} />
      </>
    );
  }
  return (
    <>
      <h1>{deck.name}: Study</h1>
      <h5>Not enough cards.</h5>
      <p>
        You need at least {minCards} cards to study. There are{" "}
        {deck.cards.length} cards in this deck.
      </p>

      <Link to={`/decks/${deck.id}/cards/new`}>
        <button type="button" className="btn btn-primary">
          Add Cards
        </button>
      </Link>
    </>
  );
}

export default DeckStudy;
