import React, { useEffect } from 'react';
import { readDeck, createCard } from '../utils/api/index';


export function AddCard (/* {deck, setDeck, card, setCard} */){

    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
      async function loadDecks() {
        const loadedDeck = await readDeck(deckId);
        setDeck(loadedDeck);
      }
      loadDecks();
    }, [deckId, setDeck]);



//card form event change handlers

    function changeFront(event){
      setCard({ ...card, front: event.target.value })
    }

    function changeBack(event){
      setCard({ ...card, back: event.target.value })
    }

//cancel/done brings user back to deckID screen

    function handleFin() {
      history.push(`/decks/${deck.id}`)
    }

    function handleSave(event) {
      event.preventDefault();
      async function updateCard() {
        await createCard(deckId, card);
      };
      updateCard();
      setCard({
        front: "",
        back: "",
        deckId: deckId,
      })
    }

    return (
      <div>
        <nav label="breadcrumb">
          <ol type="breadcrumb">
            <li type="breadcrumb-item"><a href="/">Home</a></li>
            <li type="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
            <li type="breadcrumb-item active" current="page">Add Card</li>
          </ol>
        </nav>
        <div>
          <h1>{deck.name}: Add Card</h1>
            <form>
            <div>
                <label>Front</label>
                <textarea
                    id="front"
                    type="text"
                    placeholder="Front of card"
                    value={cardValueFront}
                    onChange={changeFront}/>
            </div>
            <div>
                <label>Back</label>
                <textarea
                id="back"
                type="text"
                placeholder="Back of card"
                value={cardValueBack}
                onChange={changeBack}
                />
            </div>
                <button name="Fin" onClick={handleFin}>Done</button>
                <button name="Submit" onClick={handleSave}>Save</button>
            </form>
        </div>
        </div>
        );
    }
