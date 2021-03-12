import React, { useState } from 'react';
import './FilterBar.css';
// import SideBar from '../SideBar/SideBar';
import Feed from '../Feed/Feed';




const FilterBar  = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    };
    

    const filteredProps = props.users.filter((user) => {
            return (user.name).includes(searchValue);
    })

    console.log(filteredProps);

    // const hasInput = searchValue.length > 0; 
    
    // {const doMore = () => {
    //     hasInput && <div className="more" > {user.location}</div>
    
    // }};

  
    return <div>
        <input className={'input'} type='text' onChange={handleInputChange} />
        
        {filteredProps.map((user) => {
            
                return <div>
                    
                    {/* < SideBar user={user}/> */}
                    < Feed user={user} />
                    
                </div>})}
                              
    </div>
}


export default FilterBar;