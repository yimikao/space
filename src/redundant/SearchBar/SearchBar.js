import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
    
    const products = [
        { item: 'iWatch 500',
          price: 50000,
          color: 'black'
        },
        { item: 'iPhone X',
          price: 450000,
          color: 'rosegold'
        },
        { item: 'Mac Book Pro',
          price: 870000,
          color: 'silver'
        },
    ];


    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const clearInput = () => {
        setSearchValue("");
    }

    const inputIsFilled = searchValue.length > 0;

    const filteredProducts = products.filter((products) => {
        return products.item.includes(searchValue);
    });

    


    return (
        <div>
          <input className={'form'} type="text" value={searchValue}  onChange={handleInputChange} />
          <div className={'input-display'}>{ searchValue }</div>
          {inputIsFilled && <button onClick={clearInput}>Clear</button>}

        <ul className={'product-list'}>
          {filteredProducts.map((product) => {
            return <li>{product.item}</li>
                })
            }
        </ul>

        </div>
    )
}

export default SearchBar;



