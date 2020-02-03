import React from "react";
import Card from './Card';

const 
RentDashBoard = () => {
    return (
        <form>
            <input
              type="text"
              name="name"
              tabIndex="0"
              placeholder="Search"
            />
            <Card/>
        </form>
};

export default RentDashBoard;