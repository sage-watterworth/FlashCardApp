import React, {useState, useEffect} from "react"
import {useParams, Link, useHistory} from "react-router-dom"
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm"


function EditDeck () {
    const initialFormState = {
      name: "",
      description: "",
    };
    const [deck, setDeck] = useState({ ...initialFormState });
    const params = useParams();
    const deckId = params.deckId;

//load deck data
    useEffect(() => {
      async function loadData() {
        try {
          const dataFromAPI = await readDeck(deckId);
          setDeck(dataFromAPI);
        } catch (error) {
          if (error.name === "AbortError") {
            // console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadData();
    }, [deckId]);
//re render with new deckID

//change handler
    const handleChange = ({ target }) => {
      const value = target.value;
      setDeck({...deck, [target.name]: value,
        });
    };

//submit handler
    const history = useHistory();
    const handleSubmit = (event) => {
      event.preventDefault();


//update data on specific deckID
      async function updateData() {
        try {
          await updateDeck(deck);
          history.push(`/decks/${deckId}`);
        } catch (error) {
          if (error.name === "AbortError") {
            // Ignore `AbortError`
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
              <Link to={`/decks/${deckId}`}>Deck Name</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page" key="2">
              Edit Deck
            </li>
          </ol>
        </nav>

{/* deck form component renders here */}
        <h2>Edit Deck</h2>
        <div>
          <DeckForm formData={deck} handleChange={handleChange} handleSubmit={handleSubmit} />
          <Link to={`/decks/${deckId}`} className="btn btn-secondary">
            Cancel
          </Link>{" "}
          &nbsp;
          <button type="submit" value="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }
export default EditDeck;
