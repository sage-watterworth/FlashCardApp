import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import DeckList from "./DeckList";

function Home() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getDeck() {
      const getDeckFromAPI = await listDecks();
      setDecks(getDeckFromAPI);
    }
    getDeck();
  }, []);

  return (
<div>
    <button
        type="button"
        className="btn btn-secondary"
        onClick={() => history.push("/decks/new")}
      > Create Deck </button>
      <DeckList decks={decks} />
</div>
  );
}

export default Home;
