import React, { useState } from 'react';
import './ItemsContainer.css';
import Item from '../Item/Item';



const ItemsContainer  = () => {

    return (
        <div id='items-container'>
            <Item name={'Merch Store'}></Item>
            <Item name={'Social Media'}></Item>
            <Item name={'Work'}></Item>


        </div>
    )
}

export default ItemsContainer;



