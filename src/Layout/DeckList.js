import React, { useEffect } from 'react';
import { listDecks } from '../utils/api/index';
import { deckDeleteHandler } from './Deck';


export function DeckList() {

    //DeckList => listDecks
    const [decks, setDecks] = useState([]);

    useEffect(() => {
      async function loadDecks() {
        const loadedDecks = await listDecks();
        setDecks(loadedDecks);
      }
      loadDecks();
    }, []);

    const deckList = decks.map((deck) => {
      return (
          <li key={deck.id}>
              <h1>{deck.name}</h1>
              <p>{deck.description}</p>

              <button type = "button" onClick= {() => deckDeleteHandler(deck.id)}>Delete</button>
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
