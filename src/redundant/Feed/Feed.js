import React, { useState } from 'react';
import './Feed.css';
// import profilePic from './profilePic.png'
var pic = require('./profilePic.png')

const Feed  = (props) => {

    console.log(pic)


    return <div className={'fcontainer'} >
        <div>
            {/* <img className='pic' src={pic} alt='pic' /> */}
            <div className={'img'}></div>
        </div>

        <div className={'finfo-container'}>
            <p>{props.user.name} @{props.user.username}</p>
            <p>{props.user.status}</p>
        </div>
    </div>
}


export default Feed;
