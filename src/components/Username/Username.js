import React, { useState } from 'react';
import './Username.css';


const Username = (props) => {

    return (
       <p  id='username'>@{props.username}</p>
    )
}

export default Username;



