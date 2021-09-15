import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { readDeck, updateDeck } from '../utils/api/index';

function EditDeck() {
//   const history = useHistory();
//   const { deckId } = useParams();
//   const [deck, setDeck] = useState({});

    // useEffect(() => {
    //     async function loadDecks() {
    //       const loadedDeck = await readDeck(deckId);
    //       setDeck(loadedDeck);
    //     }
    //     loadDecks();
    //   }, [deckId, setDeck]);



 //event change handlers on form fields including:
 //NAME
 //DESCRIPTION
 //CANCEL FUNCTION
//SAVE FUNCTION

//  function changeName(event){
//     setDeck({ ...deck, name: event.target.value })
//   }

//   function changeDescription(event){
//     setDeck({ ...deck, description: event.target.value })
//   }

//   function handleCancel() {
//     history.push(`/decks/${deck.id}`)
//   }

//   function handleSave (event) {
//     event.preventDefault();
//     updateDeck(deck).then((response) => history.push(`/decks/${deck.id}`))
//   }


return(
    <div>
      <nav label="breadcrumb">
        <ol type="breadcrumb">
          <li type="breadcrumb-item"><a href="/">Home</a></li>

          {/* {`/decks/${deckId}`} */}
          <li type="breadcrumb-item"><a href="/">"deck name"</a></li>
          <li type="breadcrumb-item active" current="page">Edit Deck</li>
        </ol>
      </nav>
      <div>
        <form>
        <h1>Edit Deck</h1>
            <label> Name </label>
                <input
                type="text"
                id="front"
                // onChange={changeName}
                // value={deck.name}
                ></input>
            <label> Description </label>
                <textarea
                type="text"
                id="back"
                // onChange={changeDescription}
                // value={deck.description}
                >
                </textarea>
                {/* onClick={handleCancel} */}
                    <button name="cancel" >Cancel</button>
                    {/* onClick={handleSave} */}
                    <button name="submit" >Save</button>
        </form>
      </div>
    </div>
)
}
export default EditDeck;
