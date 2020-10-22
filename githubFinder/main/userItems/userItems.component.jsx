import React, { useContext } from 'react';
import './userItems.styles.scss';

import ActiveUserContext from '../../activeUserContext.component';

const UserItems = (props) => {
    const {
        login,
        id,
        avatar_url,
        html_url,
        url
        /*followers_url,
        following_url,
        subscription_url,
        organisation_url,
        repos_url,
        eventsUrl,
        type*/
    } = props;
    
    const { setActiveUser } = useContext(ActiveUserContext);

    const clickHandler = (e) => { 
        e.preventDefault();
        e.stopPropagation();
        e.cancellable = true;
        setActiveUser(url);
    }

    return (
        <div id={id} className='user'>
            <img className='avatar' src={avatar_url} alt={login}/>
            <div className='userDetails'>
                <div className='userName'>
                    {login}
                </div>
                <a href={html_url}>
                    <button className='more' onClick={clickHandler}>
                        More
                    </button>
                </a>
            </div>
        </div>
    );
}

export default UserItems;