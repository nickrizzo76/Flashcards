import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function CardAdd() {

  const initialCardState = {
    front: "",
    back: "",
    id: null,
  };

  const { deckId } = useParams();
  const [card, setCard] = useState(initialCardState);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function loadDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDeck();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newCard = {
        front: card.front,
        back: card.back
    }

    saveCard(newCard);
  };

  async function saveCard(newCard) {
      await createCard(deckId, newCard);
      setCard(initialCardState);
  }
  

  return (
    <>
      <h1>{deck.name}: Add Card</h1>
      <form name="add-card" onSubmit={handleSubmit}>
        <p>Name</p>
        <textarea
          id="card-front"
          name="front"
          type="text"
          value={card.front}
          onChange={handleChange}
          className="form-control"
          placeholder="Front side of card"
          required={true}
        />
        <p>Description</p>
        <textarea
          id="card-back"
          name="back"
          type="text"
          value={card.back}
          onChange={handleChange}
          className="form-control"
          placeholder="Back side of card"
          required={true}
        ></textarea>
        <Link to={`/decks/${deckId}`}>
          <button type="button" className="btn btn-secondary">
            Done
          </button>
        </Link>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default CardAdd;
