import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { listDecks, deleteDeck } from '../utils/api/index';


function DeckList() {

    //DeckList => listDecks
    const [decks, setDecks] = useState([]);
    const { deckId } = useParams();


    // useEffect(() => {
    //   async function loadDecks() {
    //     const loadedDecks = await listDecks();
    //     setDecks(loadedDecks);
    //   }
    //   loadDecks();
    // }, []);

    const deckList = decks.map((deck) => {
      return (
          <li key={deck.id}>
              <h1>{deck.name}</h1>
              <p>{deck.description}</p>

              <button type = "button" className="btn btn-danger btn-sm" onClick= {() => deleteDeck(deck.id)}>Delete</button>
              <Link to={`/decks/${deckId}/study/`}>
                <button type="button">
              Study
                </button>
             </Link>
              <Link to={`/decks/${deckId}`}>
                <button type="button">
              View
                </button>
              </Link>

          </li>
      )
    });

    return (
        <ul>
            {deckList}
        </ul>
    );
}

export default DeckList;
