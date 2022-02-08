/*
  Displays Deck adding form
*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function DeckCreate({lastDeckId}) {
  const initialDeckState = {
    description: "",
    id: lastDeckId,
    name: "",
  };

  const [deckData, setDeckData] = useState(initialDeckState);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setDeckData({
      ...deckData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    createDeck(deckData).then((newDeck) => history.push(`/decks/${newDeck.id}`));
    
  };

  return (
    <div>
      <h1>Create Deck</h1>
      <form name="create-deck" onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          id="deckName"
          name="name"
          type="text"
          value={deckData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Deck Name"
          required={true}
        />
        <p>Description</p>
        <textarea
          id="deckDescription"
          name="description"
          type="text"
          value={deckData.description}
          onChange={handleChange}
          className="form-control"
          placeholder="Description"
          required={true}
        ></textarea>
        <Link to={`/`}>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DeckCreate;
