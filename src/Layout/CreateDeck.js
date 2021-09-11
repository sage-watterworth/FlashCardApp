import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api/index';


export function CreateDeck() {
    let history = useHistory();
    const [newDeck, setNewDeck] = useState();


    async function handleSubmit(event) {
        event.preventDefault();
        const response = await createDeck(newDeck);
        history.push(`/decks/${response.id}`);
    }


//deck form event change handlers
    function changeName(event){
        setNewDeck({ ...newDeck, name: event.target.value});
    }

    function changeDescription(event){
        setNewDeck({...newDeck, description: event.target.value});
    }

//cancel brings user back to home screen
    function handleCancel(event) {
        event.preventDefault();
        history.push("/")
    }


    return(
        <div>
        <nav label="breadcrumb">
            <ol type="breadcrumb">
            <li type="breadcrumb-item"><a href="/">Home</a></li>
            <li type="breadcrumb-item active" current="page">Create Deck</li>
            </ol>
        </nav>

{/* create deck form  */}
            <form>
                <h1>Create Deck</h1>
                    <label> Name </label>
                        <input
                        type="text"
                        id="name"
                        onChange={changeName}
                        ></input>
                    <label> Description </label>
                        <textarea
                        type="text"
                        id="description"
                        onChange={changeDescription}
                        >
                        </textarea>

                            <button name="cancel" onClick={handleCancel}>Cancel</button>

                            <button name="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};
