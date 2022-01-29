import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Components/DeckList";
import { Route, Link, Switch } from "react-router-dom";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState({});
  
  useEffect(() => {

    async function loadData() {
      const data = await listDecks();
      //console.log(data)
      setDecks(data)
    }
    loadData();
  }, [])

  //console.log(decks)
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path='/'>
            <button>Create Deck</button>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <DeckList decks={decks}/>
      </div>
    </>
  );
}

export default Layout;
