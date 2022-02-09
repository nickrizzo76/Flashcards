import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import CreateDeckButton from "./Deck/CreateDeckButton";
import DeckCreate from "./Deck/DeckCreate";
import DeckStudy from "./Deck/DeckStudy";
import DeckEdit from "./Deck/DeckEdit";
import DeckView from "./Deck/DeckView";
import CardAdd from "./Card/CardAdd";
import CardEdit from "./Card/CardEdit";

function Layout() {
  
  return (
    <div>
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
    </div>
  );
}

export default Layout;
