import React from "react";
import Cards from './Card';

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
            <Cards/>
        </form>
    )
};

export default RentDashBoard;