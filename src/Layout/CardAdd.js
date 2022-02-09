/*
    Displays Card adding form
*/

import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function CardAdd() {
  const initialCardState = {
    front: "",
    back: "",
    id: null,
  };

  const { deckId } = useParams();
  const [card, setCard] = useState(initialCardState);
  const [deck, setDeck] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDeck();
  }, [deckId]);

  function handleSubmit(newCard) {
    saveCard(newCard);
  };

  function doneHandler() {
    history.push(`decks/${deck.id}`);
  }

  async function saveCard(newCard) {
    await createCard(deckId, newCard);
    setCard(initialCardState);
  }

  return (
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
            Add Card
          </li>
        </ol>
      </nav>
      <h1>
        <span>{deck.name}</span>
        <span>: </span>
        <span>Add Card</span>
      </h1>

      <CardForm
        handleSubmit={handleSubmit}
        handleDone={doneHandler}
        initialState={card}
      />
    </div>
  );
}

export default CardAdd;
