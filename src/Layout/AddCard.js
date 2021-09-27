import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createCard, readDeck } from '../utils/api';
import Error from '../Layout/Error';
import CardForm from './CardForm';


function AddCard() {
    //set card initial state
const initialState = {
front: '',
back: '',
};

const [formData, setFormData] = useState({ ...initialState });
const [error, setError] = useState(undefined);
const [deck, setDeck] = useState([]);
const { deckId } = useParams();
const history = useHistory();


useEffect(() => {
readDeck(deckId).then(setDeck);
}, [deckId]);

const handleChange = ({ target }) => {
const value = target.value;

setFormData({
  ...formData,
  [target.name]: value,
});
};

const handleReset = (event) => {
    setFormData({ ...initialState });
        history.push(`/decks/${deck.id}`)
};
const handleSubmit = (event) => {
    event.preventDefault();
        const abortController = new AbortController();



createCard(deckId, formData, abortController.signal)
  .then((data) => setFormData(data))
  .catch(setError);

return () => abortController.abort();
};

useEffect(() => {
if (formData.id) {
history.push(`/decks/${deckId}`);
}
}, [formData.id, history, deckId]);

if (error) {
return <Error error={error} />;
}

return (
<div>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <a href="/"><span className="oi oi-home" /> Home </a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
            <a href={`/decks/${deckId}`}>{deck.name}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
            <span className="oi oi-plus" /> Add Card
        </li>
    </ol>
</nav>
<h1>{deck.name}: Add Card</h1>
<CardForm
    formData={formData}
    handleChange={handleChange}
    handleReset={handleReset}
    handleSubmit={handleSubmit}
/>
    </div>
)
}
export default AddCard;
