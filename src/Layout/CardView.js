/*
    Displays a singular Card to be shown in a list of Deck cards
*/

import React from "react";
import { useHistory, useLocation } from "react-router-dom"

function CardView({ card, deleteCardHandler }) {
    const history = useHistory();
    const location = useLocation();

    function editCardHandler() {
        history.push(`${location.pathname}/cards/${card.id}/edit`)
    }

  return (
    <div>
      <p>{card.front}</p>
      <p>{card.back}</p>
      <button onClick={editCardHandler} type="button" className="btn btn-secondary">Edit</button>
      <button onClick={() => deleteCardHandler(card.id)} type="button" className="btn btn-danger">Delete</button>
    </div>
  );
}

export default CardView;
