import React from "react";

export default function CharacterCard(character) {
  // console.log('card', character);
  return (
    <div>
      {/* <p>Card</p> */}
          <h1>{character.character.name}</h1>
          {/* <p>DOB: {data.birth_year}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.mass}</p> */}
      </div>
  )
}