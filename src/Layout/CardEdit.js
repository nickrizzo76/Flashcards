import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../utils/api";

function CardEdit() {
  const { cardId, deckId } = useParams();
  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(card);
    history.push(`/decks/${deckId}`);
  };

  function cancel() {
    history.goBack();
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
            Edit Card
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      <form name="edit-card" onSubmit={handleSubmit}>
        <p>Front</p>
        <textarea
          id="editCardFront"
          name="front"
          type="text"
          value={card.front}
          onChange={handleChange}
          className="form-control"
          placeholder="Front text of card"
        />
        <p>Description</p>
        <textarea
          id="editCardBack"
          name="back"
          type="text"
          value={card.back}
          onChange={handleChange}
          className="form-control"
          placeholder="Back text of card"
        />
        <button onClick={cancel} type="button" className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CardEdit;
