import React, { useState, useEffect } from "react";

function CardForm({
  handleSubmit,
  handleDone,
  initialState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initialState);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    handleSubmit({ ...card });
    setCard({ front: "", back: "" });
  }

  return (
    <form name="card-form" onSubmit={submitHandler}>
      <p>Front</p>
      <textarea
        id="card-front"
        name="front"
        type="text"
        value={card.front}
        onChange={handleChange}
        className="form-control"
        placeholder="Front text of card"
      />
      <p>Back</p>
      <textarea
        id="card-back"
        name="back"
        type="text"
        value={card.back}
        onChange={handleChange}
        className="form-control"
        placeholder="Back text of card"
      />
      <button onClick={handleDone} type="button" className="btn btn-secondary">
        {doneButtonLabel}
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CardForm;
