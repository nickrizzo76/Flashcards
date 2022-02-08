/*
  - Displays Deck and its Cards for studying. Cards are shown one at a time.
  - Displays option to add Cards if the Deck has too few
*/

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import { readDeck } from "../utils/api";

function DeckStudy() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", cards: [] });
  const minCards = 3;

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  // breadcrumb + deck information
  const headerContent = (
    <div>
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

      <h1>{deck.name}: Study</h1>
    </div>
  );

  // tells user there aren't enough cards in the deck + displays option to add cards
  const notEnoughCards = (
    <div>
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
    </div>
  );

  return (
    <div>
      {headerContent}
      {deck.cards.length >= minCards ? <Card /> : notEnoughCards}
    </div>
  );

}

export default DeckStudy;
