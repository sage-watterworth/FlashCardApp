import React from "react";
import { Link, useParams } from "react-router-dom";

function ListCards({ deck, handleCardDelete }) {
    const { deckId } = useParams();

    return (
    <div className="container">
    <h2>Cards</h2>
        <div className="card-list">
            {deck.cards.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <div className="container">
                            <div className="row justify-content-start my-2">
                            <div className="col-6">
                                {card.front}
                            </div>
                            <div className="col-6">
                                {card.back}
                            </div>
                            </div>
                            <div className="col-3 pv-3">
                            <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                                <button className="btn btn-secondary mr-1">Edit</button>
                            </Link>
                            <button value={card.id} onClick={handleCardDelete} className="btn btn-danger">Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
                 ))}
            </div>
        </div>
        )
    };

    export default ListCards;
