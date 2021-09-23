import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { listDecks, deleteDeck } from '../utils/api/index';


function DeckList() {

    const [decks, setDecks] = useState([]);
    const { deckId } = useParams();


    useEffect(() => {
      async function loadDecks() {
        const loadedDecks = await listDecks();
        setDecks(loadedDecks);
      }
      loadDecks();
      console.log(decks);
    }, []);

    const deckList = decks.map((deck) => {
      return (
          <div key ={deck.id} className="card" style={{ width: "50rem" }}>

              <h1 className="card-title">{deck.name}</h1>
              <p className="card-body">{deck.description}</p>

              {/* onClick= {() => deleteDeck(deck.id)} */}
              <button type = "button" className="btn btn-danger btn-sm" >Delete</button>
              {/* <Link to={`/decks/${deckId}/study/`}> */}
                <button type="button">
              Study
                </button>
             {/* </Link> */}
              {/* <Link to={`/decks/${deckId}`}> */}
                <button type="button">
              View
                </button>
              {/* </Link> */}

          </div>

              )}
           );

      return deckList
     };

export default DeckList;
