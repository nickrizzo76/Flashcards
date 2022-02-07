import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import { deleteDeck, listDecks } from "../utils/api";

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

  const deckList = decks.map( deck => <Deck key={deck.id} deck={deck} deleteHandler={deleteHandler}/>);
  return (
    <>
      {deckList}
    </>
  );
}

export default DeckList;