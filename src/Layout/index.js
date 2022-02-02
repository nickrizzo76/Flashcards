import React from "react";
import Header from "./Header";
import DeckList from "./DeckList";
import NotFound from "./NotFound";
import { Route, Switch, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <Link to="decks/new">
              <button type="button" className="btn btn-secondary">Create Deck</button>
            </Link>
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
