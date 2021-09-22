import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { readDeck, deleteDeck, deleteCard } from '../utils/api/index';
import EditCard from "./EditCard";


function Deck (){
    const history = useHistory();
    const { deckId} = useParams();
    const [deck, setDeck] = useState();
    const [didDelete, setDidDelete] = useState(false);


      useEffect(() => {
          async function loadDecks() {
            const loadedDeck = await readDeck(deckId);
            setDeck(loadedDeck);
          }
          loadDecks();
          setDidDelete(false);
        }, [deckId, didDelete]);


         function deckDeleteHandler(deckId) {
             alert(deckId)
            const confirmed = window.confirm('Are you sure you want to delete this deck?');
         if (confirmed) {
           deleteDeck(deckId)
              setDidDelete(true)
             history.push("/")
            }
          };

          function cardDeleteHandler(cardId) {
            const confirmed = window.confirm("Are you sure you want to delete this card?");

            if (confirmed) {
              deleteCard(cardId);
              setDidDelete(true)
            }
          };

          const listCards = deck.cards.map(card => {

        return(
        <div>
            <li key={card.id}>
                <h1>{card.name}</h1>
                <h2>Front</h2>
                <p>{card.front}</p>
                <h2>Back</h2>
                <p>{card.back}</p>
            <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                <button type="button"> Edit</button>
            </Link>
                <button type="button" onClick={() => cardDeleteHandler(card.id)}> Delete </button>
            </li>
        </div>
        )
          });


        return (
    <div>
      <div>
        <nav label="breadcrumb" />
            <div>
                <nav type="breadcrumb">
                    <ol type="breadcrumb">
                        <li type="breadcrumb-item"><a href="/">Home</a></li>
                        <li type="breadcrumb-item active" current="page">"deck name"</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div>
            <li key="deck id">
                <h1>{deck.name}</h1>
                <p>{deck.description}</p>
            </li>
        </div>
        <div>

        {/* onClick= {() => deckDeleteHandler(deck.id)} */}
               <button type = "button" >Delete</button>
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
        <div>
             <li key="card id">
                 <h1>"card name"</h1>
                 <h2>Front</h2>
                 <p>"card front"</p>
                 <h2>Back</h2>
                 <p>"card back"</p>
             {/* <Link to={`/decks/${deckId}/cards/${card.id}/edit`}> */}
                 <button type="button"> Edit</button>
             {/* </Link> */}

        {/* onClick={() => cardDeleteHandler(card.id)} */}
                 <button type="button"> Delete </button>
             </li>
         </div>
    </div>

        )};

export default Deck;
