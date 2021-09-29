import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import { createDeck } from "../utils/api/index"


function CreateDeck (){
  const [newDeck, setNewDeck] = useState([]);
  const history = useHistory();



  async function submitHandler(event) {
    event.preventDefault()
        const response = await createDeck(newDeck);
        setNewDeck(response);
        history.push(`/decks/${response.id}`)
  }

  const changeHandler = (event) => {
    event.preventDefault()
    setNewDeck({...newDeck, [event.target.name]: event.target.value})
  }



  return (
      <div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="/"><span className="oi oi-home" /> Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page"><span className="oi" /> Create Deck
            </li>
        </ol>
        </nav>


    <form className="form-group" onSubmit={submitHandler}>
      <div>
        <label
        className="form-label"
        > Deck Name: </label>
        <input
        className="form-control"
        type="text"
        id="name"
        name="name"
        onChange={changeHandler}
        style={{width: "100%"}}
        rows={3}
        />


        <label className="form-label">
        Description:  </label>
        <textarea
        className="form-control"
        id="description"
        name="description"
        onChange={changeHandler}
        rows={3}
        style={{width: "100%"}}
        />

      <button className="btn btn-primary" type="submit">Submit</button>
      <button className="btn btn-dark" onClick={() => history.push("/")}>Cancel</button>
      </div>
      </form>
      </div>
  )
}

export default CreateDeck;
