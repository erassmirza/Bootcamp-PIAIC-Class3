import React from 'react'

function Dinner(props){
    return(
        <div>
            <h5>Today we are serving {props.dishName}</h5>
            <h5>Today we are also serving {props.sweetDish} in sweet dishes</h5>
            <hr/>
        </div>
    );
}

export default Dinner;