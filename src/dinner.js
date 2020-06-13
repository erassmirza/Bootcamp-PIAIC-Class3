import React from 'react'

function Dinner(props){
    return(
        <div>
            <h3><u>Deal {props.dealNo}</u></h3>
            <h5>Dinner: {props.dishName}</h5>
            <h5>Sweet Dish: {props.sweetDish}</h5>
            <h5>Cold Drinks: {props.coldDrink}</h5>
            <hr/>
        </div>
    );
}

export default Dinner;