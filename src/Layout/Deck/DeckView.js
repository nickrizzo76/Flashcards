/*
    Displays:
    - Deck 'Title' and 'Description'
        - Deck actions: Edit/Study/Add Cards/Delete
    - All the Deck's Cards 'Front' and 'Back'
        - Card actions: Edit/Delete
*/
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../../utils/api";
import CardView from "../Card/CardView";

function DeckView() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();

  useEffect(loadDeck, [deckId]);
  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  function deleteDeckHandler() {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deck.id).then(() => history.push("/"));
    }
  }

  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) deleteCard(cardId).then(loadDeck);
  }

  // list all the cards of a deck
  const cardList = deck.cards.map((card) => (
    <li key={card.id}>
      <CardView card={card} deleteCardHandler={deleteCardHandler} />
    </li>
  ));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h5>{deck.name}</h5>
      <p>{deck.description}</p>
      <Link to={`/decks/${deck.id}/edit`}>
        <button type="button" className="btn btn-secondary">
          Edit
        </button>
      </Link>
      <Link to={`/decks/${deck.id}/study`}>
        <button type="button" className="btn btn-primary">
          Study
        </button>
      </Link>
      <Link to={`/decks/${deck.id}/cards/new`}>
        <button type="button" className="btn btn-primary">
          Add Cards
        </button>
      </Link>
      <button
        onClick={deleteDeckHandler}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
      <h2>Cards</h2>
      <ul className="list-group mt-2" style={{ listStyleType: "none" }}>
        {cardList}
      </ul>
    </div>
  );
}

export default DeckView;
