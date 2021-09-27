import React from "react";
import { Link } from "react-router-dom";

export default function Card({ card, handleCardDelete }) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body row">
                    <p className="card-text">{card.front}</p>
                    <p className="card-text">{card.back}</p>
                </div>
                    <div>
                        <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                        <button className="btn btn-secondary">Edit</button>
                        </Link>
                        <button value={card.id} className="btn btn-danger" onClick={handleCardDelete}>Delete</button>
                    </div>
                 </div>
             </div>
    )
}
