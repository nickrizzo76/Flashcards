import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, deleteHandler }) {
  return (
    <div>
      <h5>{deck.name}</h5>
      <small>{deck.cards.length} cards</small>
      <p>{deck.description}</p>
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
      <button onClick={() => deleteHandler(deck.id)} type="button" className="btn btn-danger">Delete</button>
    </div>
  );
}

export default Deck;
