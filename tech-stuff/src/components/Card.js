import React from 'react';

const Card = props => {
  return (
    <div>
      <div>
        <h2>Name: {props.name}</h2>
        <p>Description: {props.description}</p>
        <p>Price: {props.price}</p>
        <p>Availability: {props.availability}</p>
      </div>
    </div>
  );
};

export default Card;
