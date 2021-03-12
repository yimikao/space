import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import Username from './Username/Username';
import ItemsContainer from './ItemsContainer/ItemsContainer';



const App = () => {


    return (
        <div>
            <Avatar></Avatar>
            <Name name={'Yinka Damilola'}></Name>
            <Username username={'yimikao'}></Username>
            <ItemsContainer></ItemsContainer>
        </div>
    )
}

export default App;


