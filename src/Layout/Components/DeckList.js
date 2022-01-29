import React from "react";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function DeckList({decks}) {
  const { path } = useRouteMatch();
  
  return (
    <>
      <Switch>
        <Route path={`${path}`}>
          <>
            {decks.map( deck => <Deck key={deck.id} deck={deck} />)}
          </>
        </Route>
        <Route path={`${path}/new`}>
          <CreateDeck />
        </Route>
        <Route path={`${path}/:deckId`}></Route>
        <Route path={`${path}/:deckId/study`}></Route>
        <Route path={`${path}/:deckId/edit`}></Route>
        <Route path={`${path}/:deckId/cards/new`}></Route>
        <Route path={`${path}/:deckId/cards/:cardId/edit`}></Route>
      </Switch>
    </>
  );
}

export default DeckList;
