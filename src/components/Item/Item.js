import React, { useState } from 'react';
import './Item.css';


const Item  = (props) => {

    return (
        <div id='item'>
            <p>{props.name}</p> <p>props</p>
        </div>
    )
}

export default Item;



