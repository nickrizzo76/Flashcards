import React from "react";

function Deck( {deck} ) {
    console.log(deck.id)
  return (
    <>
      <h1>{deck.name}</h1>
      <p>{deck.id} {deck.description} </p>
    </>
  );
}

export default Deck;
