import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api/index";
import CardList from "./CardList"

function Deck() {
    const { deckId } = useParams();
    const history = useHistory();
    const [deck, setDeck] = useState({});


    useEffect(() => {
        async function loadDeck() {
                if (deckId) {
                const loadedDeck = await readDeck(deckId);
                setDeck(()=>loadedDeck);
                }
            }
        loadDeck();
    }, [deckId]);


    const handleDeckDelete = async () => {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.");
        if (confirm) {
            await deleteDeck(deckId);
            history.push("/");
        }
    };

    const handleCardDelete = async ({ target }) => {
        const confirm = window.confirm("Delete this card? You will not be able to recover it.");
        if (confirm) {
            const cardDelete = async () => await deleteCard(target.value);
            cardDelete();
            const reloadDeck = await readDeck(deckId);
            setDeck(reloadDeck);
            window.location.reload();
        }
    }

  if (deck.id) {
      return (
<div>
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
          <li className="breadcrumb-item">
              <a href="/"><span className="oi oi-home" /> Home </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page"><span className="oi" /> {deck.name}
          </li>
      </ol>
    </nav>
    <h3>{deck.name}</h3>
        <p>{deck.description}</p>
            <div className="row justify-content-between">
            <div className="col-8">
                <Link to={`/decks/${deckId}/edit`}>
                    <button className="btn btn-secondary mr-1">Edit </button>
                </Link>
                <Link to={`/decks/${deckId}/study`}>
                    <button
                    className="btn btn-primary mr-1"> Study </button>
                </Link>
                <Link to={`/decks/${deckId}/cards/new`}>
                    <button className="btn btn-primary"> Add Card </button>
                </Link>
            </div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={handleDeckDelete}>Delete</button>
            </div>
            </div>
        <CardList deck={deck} handleCardDelete={handleCardDelete} />
    </div>
        )
      }
              return "No deck. Create a new deck."
};

export default Deck;
