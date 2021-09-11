import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";
import { useHistory } from "react-router-dom";


function Home() {
    let history = useHistory();


    return (
      <div>
        <div>
          <button
          type="button"
          className="createDeck">
          <Link to={createDeck}></Link>
          </button>
        </div>
        <DeckList />
      </div>
    )
  };




export default Home;
