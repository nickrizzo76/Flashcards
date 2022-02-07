import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

function DeckEdit() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck(deck);
    history.push(`/decks/${deckId}`);
  };

  function cancel() {
    history.goBack();
  }

  const breadcrumb = (
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
          Edit Deck
        </li>
      </ol>
    </nav>
  );

  return (
    <div>
      {breadcrumb}
      <h5>Edit Deck</h5>
      <form name="edit-deck" onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          id="editDeckName"
          name="name"
          type="text"
          value={deck.name}
          onChange={handleChange}
          className="form-control"
          placeholder={deck.name}
        />
        <p>Description</p>
        <textarea
          id="editDeckDescription"
          name="description"
          type="text"
          value={deck.description}
          onChange={handleChange}
          className="form-control"
          placeholder={deck.description}
        ></textarea>
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

export default DeckEdit;
