import React, {useEffect, useState} from "react"
import {useParams, useHistory, Link} from "react-router-dom"
import { readDeck, readCard, updateCard } from "../utils/api";
import CardForm from "./CardForm"

function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

    const params = useParams();
    const cardId = params.cardId;
    const deckId = params.deckId;


    useEffect(() => {
      setDeck({});
      async function loadData() {
        try {
          const dataFromAPI = await readDeck(deckId);
          setDeck(dataFromAPI);
          const datafromApie2 = await readCard(cardId);
          setCard(datafromApie2);
        } catch (error) {
          if (error.name === "AbortError") {
            // console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadData();
    }, [deckId, cardId]);
// re render with new deck/subsequent card ID

    const handleChange = ({ target }) => {
      const value = target.value;
      setCard({...card, [target.name]: value,
      });
    };

    const history = useHistory();
    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log("Submitted:", card);
      async function updateData() {
        try {
          await updateCard(card);
          history.push(`/decks/${deckId}`);
        } catch (error) {
          if (error.name === "AbortError") {
            // console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      updateData();
    };

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" key="0">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" key="1">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page" key="2">
              Edit Card {cardId}
            </li>
          </ol>
        </nav>

  {/* card form component renders here */}
        <h2>Edit Card</h2>
        <div>
          <CardForm formData={card} handleChange={handleChange} handleSubmit={handleSubmit} />
          <Link to={`/decks/${deckId}`} className="btn btn-secondary">
            Cancel
          </Link>{" "}
          &nbsp;
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }

  export default EditCard;
