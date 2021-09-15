import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createDeck } from '../utils/api/index';


function CreateDeck() {
    // let history = useHistory();
    // const [newDeck, setNewDeck] = useState();


//     async function handleSubmit(event) {
//         event.preventDefault();
//         const response = await createDeck(newDeck);
//         history.push(`/decks/${response.id}`);
//     }


// //deck form event change handlers
//     function changeName(event){
//         setNewDeck({ ...newDeck, name: event.target.value});
//     }

//     function changeDescription(event){
//         setNewDeck({...newDeck, description: event.target.value});
//     }

// //cancel brings user back to home screen
//     function handleCancel(event) {
//         event.preventDefault();
//         history.push("/")
//     }


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
                        // onChange={changeName}
                        ></input>
                    <label> Description </label>
                        <textarea
                        type="text"
                        id="description"
                        // onChange={changeDescription}
                        >
                        </textarea>
                        {/* onClick={handleCancel} */}
                            <button name="cancel" >Cancel</button>
                        {/* onClick={handleSubmit} */}
                            <button name="submit" >Submit</button>
            </form>
        </div>
    )
};

export default CreateDeck;
