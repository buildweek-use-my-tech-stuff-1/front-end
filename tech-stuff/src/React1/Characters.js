import React from "react";
import CharacterList from "./CharacterList";
import AddList from './AddList';

const Characters = () => {
    return (
        <div style={{
            margin: 'auto',
            textAlign: 'center',
            width: '50%', 
            
            }}>
            <AddList />
             <CharacterList/>
        </div>
    )
};

export default Characters;