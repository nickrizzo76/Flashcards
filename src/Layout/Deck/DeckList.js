/*
  Displays main landing page that lists all of the user's Decks
*/

import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import { deleteDeck, listDecks } from "../../utils/api";

function DeckList() {
  
  const [decks, setDecks] = useState([]);

  useEffect(loadDecks, []);

   function loadDecks() {
    listDecks().then(setDecks);
  }

  function deleteHandler(deckId) {
    const confirmed = window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    if(confirmed) deleteDeck(deckId).then(loadDecks)
  }

  const deckList = decks.map( deck => (
    <li key={deck.id}>
      <Deck deck={deck} deleteHandler={deleteHandler}/>
    </li>
    )
  )
  return (
    <div>
      <ul className="list-group mt-2" style={{ listStyleType: "none" }}>{deckList}</ul>
    </div>
  );
}

export default DeckList;