import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";
import { useHistory } from "react-router-dom";
import CreateDeck from "./CreateDeck";


function Home() {
    // let history = useHistory();


    return (
      <div>
        <div>
          <button
          type="button"
          className="createDeck">
          <Link to={CreateDeck}></Link>
          </button>
        </div>
        <DeckList />
      </div>
    )
  };




export default Home;
