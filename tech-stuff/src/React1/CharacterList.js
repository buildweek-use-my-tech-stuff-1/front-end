import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
const [character, setCharacter] = useState();
const {id} = useParams();
  useEffect(() => {
       axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
    //   console.log('axios'. res);
      setCharacter(res.data.results);
    }) 
    .catch(error => {
      console.log(error);
    });
  }, [id]);
  // console.log('response', character);

  if (!character) {
    return <div>Loading character information...</div>;
  }
    return (
        <div>
            <div>
            {/* <h1>List</h1> */}
                {character.map((character) => {
                    // console.log('map', character);
                    return <CharacterCard character={character} />
                })}
        </div>     
        </div>        
          
)
}