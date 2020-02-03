import React from "react";

const Card = props => {
    return (
        <div>
            {props.cards.map(card => (
                <div className="card" key={card.id}>
                        <h2>Name{card.name}</h2>
                        <p>Name</p>
                        <p>Description</p>
                        <p>Price</p>
                        <p>Avaiable ?</p>
                        <button>Rent!</button>
                </div>
            ))}
        </div>
    );
};

export default Card;