import React, { useState, useEffect } from "react";
import Header from "./Header";
import DeckList from "./DeckList";
import NotFound from "./NotFound";
import CreateDeckButton from "./CreateDeckButton";
import Breadcrumb from "./Breadcrumb";
import { Route, Switch, Link } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckCreate from "./DeckCreate";
import DeckStudy from "./DeckStudy";

function Layout() {

  const [decks, setDecks] = useState( [ {cards:[] } ] );
  useEffect(() => {
    async function loadData() {
      const data = await listDecks();
      setDecks(data)
    }
    loadData();
  }, [])

  const lastDeckId = decks.reduce((maxId, deck) => Math.max(maxId, deck.id), 0);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <CreateDeckButton lastDeckId={lastDeckId} />
            <DeckList decks={decks}/>
          </Route>
          <Route path="/decks/new">
            <Breadcrumb />
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <DeckStudy decks={decks}/>
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
