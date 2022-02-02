import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { listDecks } from "../utils/api";

function DeckList() {
  
  const [decks, setDecks] = useState( [ {cards:[] } ] );
  useEffect(() => {
    async function loadData() {
      const data = await listDecks();
      setDecks(data)
    }
    loadData();
  }, [])

  const deckList = decks.map( deck => <Deck key={deck.id} deck={deck} />);
  return (
    <>
      {deckList}
    </>
  );
}

export default DeckList;

// {/* <Switch>
//         <Route path={`${path}`}>
//           {/* {deckList} */}
//           </Route>
//           <Route path={`${path}/new`}>
//             <CreateDeck />
//           </Route>
          
//         </Switch> */}