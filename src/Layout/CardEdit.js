/*
    Displays Card editing form
*/
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function CardEdit() {
  const { cardId, deckId } = useParams();
  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function handleSubmit(editedCard) {
    updateCard(editedCard);
    history.push(`/decks/${deckId}`);
  };

  function cancel() {
    history.goBack();
  }

  console.log("Card Edit", card)
  const form = card.id ? (
    <CardForm
        handleSubmit={handleSubmit}
        handleDone={cancel}
        initialState={card}
        doneButtonLabel={"Cancel"}
      />
  ) : (
      <p>Nothing yet</p>
  )
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
            Edit Card
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      {form}
    </div>
  );
}

export default CardEdit;
