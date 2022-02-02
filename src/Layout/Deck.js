import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck }) {
  return (
    <>
      <h1>
        {deck.name} -- {deck.cards.length} cards
      </h1>
      <p>
        {deck.id} {deck.description}{" "}
      </p>
      <Link to={`/decks/${deck.id}`}>
        <button type="button" className="btn btn-secondary">
          View
        </button>
      </Link>

      <Link to={`/decks/${deck.id}/study`}>
        <button type="button" className="btn btn-primary">
          Study
        </button>
      </Link>
      <button onClick={() => window.confirm("Delete this deck?\n\nYou will not be able to recover it.")} type="button" className="btn btn-danger">Delete</button>
    </>
  );
}

export default Deck;
