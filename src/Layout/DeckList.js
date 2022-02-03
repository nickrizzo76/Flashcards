import React from "react";
import Deck from "./Deck";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function DeckList({decks}) {
  

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