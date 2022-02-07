import React, { useState, useEffect } from "react";
import Header from "./Header";
import DeckList from "./DeckList";
import NotFound from "./NotFound";
import CreateDeckButton from "./CreateDeckButton";
import { Route, Switch } from "react-router-dom";
import DeckCreate from "./DeckCreate";
import DeckStudy from "./DeckStudy";
import DeckEdit from "./DeckEdit";
import DeckView from "./DeckView";
import CardAdd from "./CardAdd";
import CardEdit from "./CardEdit";

function Layout() {
  

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <DeckStudy />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardAdd />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/">
            <CreateDeckButton />
            <DeckList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
