import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import DeckList from "./DeckList";

function Home() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();


  useEffect(loadDecks, []);

  function loadDecks() {
    listDecks().then(setDecks);
  }

  // useEffect(() => {
  //   async function getDeck() {
  //     const getDeckFromAPI = await listDecks();
  //     setDecks(getDeckFromAPI);
  //   }
  //   getDeck();
  // }, []);

  return (
<div>
  <Link to="/decks/new">
      Create Deck
    </Link>
    <div>
    <DeckList decks={decks} />
    </div>
</div>
  );
}

export default Home;
