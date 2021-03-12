import React, { useState } from 'react';
import './SideBar.css';


const SideBar  = (props) => {


    return <div className={'container'}>
        <img src='./images/profile-pic.png' alt='profile-pic'></img>

        <div className={'info-container'}>
        <h2>{props.user.name}</h2>
        <h4>{props.user.name}</h4>
        <hr/>
        <p>{props.user.status}</p>
        <p>{props.user.location}</p>
        <br/>
        <a href={props.user.website}>{props.website}</a>
        </div>
    </div>
}


export default SideBar;
