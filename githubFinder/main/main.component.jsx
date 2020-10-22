import React, {  } from 'react';
import './main.styles.scss';

import UserItems from './userItems/userItems.component';

const Main = ({ userList }) => {
    return (
        <main className='main' >
            {
                userList.map((item, index) => { 
                    return <UserItems key={index} {...item} />
                })
            }
        </main>
    );
}

export default Main;