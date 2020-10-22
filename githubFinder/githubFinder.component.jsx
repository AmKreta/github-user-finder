import React, { useState } from 'react';

import Header from './header/header.component';
import Main from './main/main.component';
import ActiveUserModal from './activeUserModal/activeUserModal.component'

import './githubFinder.styles.scss';

import ActiveUserContext from './activeUserContext.component';

const GithubFinder = () => {
    const [activeUser, setActiveUser] = useState(null);
    const [userList, setUserList] = useState([]);

    /* both userList and active user contain link */

    return (
        <React.Fragment>
            <Header title='githubFinder' setUserList={setUserList}/>
            <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
                {
                    activeUser
                        ? <ActiveUserModal />
                        : <Main userList={userList}/>
                }
            </ActiveUserContext.Provider>
        </React.Fragment>
    );
}

export default GithubFinder;