import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { MdEmail } from 'react-icons/md';
import { BsFillPeopleFill, BsPeopleCircle } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
import { IconContext } from 'react-icons';

import ActiveUserContext from '../activeUserContext.component';

import './activeUserModal.styles.scss';

const ActiveUserModal = () => {

    const [userInfo, setUserInfo] = useState({});

    const { activeUser, setActiveUser } = useContext(ActiveUserContext);

    useEffect(() => {
        if (activeUser) {
            axios.get(activeUser).then(res => {
                setUserInfo(res.data);
            }).catch(err => {
                alert('something went wrong');
            })
        }
    }, [activeUser]);

    const closeModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.cancellable = true;
        setActiveUser(null);
    }
    return (
        <main className='main modalContainer'>
            <div className="modal">

                <IconContext.Provider value={{ className: 'closeModal' }}>
                    <CgClose title='close' onClick={closeModal} />
                </IconContext.Provider>

                <img className="modalAvatar" src={userInfo.avatar_url} alt={userInfo.login} />

                <div className="modalUserInfo">

                    <div className=' modalUser name'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <BsPeopleCircle title='name' />
                        </IconContext.Provider>
                        <span className='notAvailable'>name:-</span>
                        {
                            userInfo.login
                                ? userInfo.login
                                : <div className='notAvailable'>
                                    not available
                                 </div>
                        }
                    </div>

                    <div className='modalUser bio'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <GoPencil title='bio' />
                        </IconContext.Provider>
                        <span className='notAvailable'>bio:-</span>
                        {
                            userInfo.bio
                                ? userInfo.bio
                                : <div className='notAvailable'>
                                    not available
                                 </div>
                        }
                    </div>

                    <div className='modalUser email'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <MdEmail title='email' />
                        </IconContext.Provider>
                        <span className='notAvailable'>email:-</span>
                        {
                            userInfo.email
                                ? userInfo.email
                                : <div className='notAvailable'>
                                    not available
                                 </div>
                        }
                    </div>

                    <div className='modalUser blog'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <FaBlog title='blog' />
                        </IconContext.Provider>
                        <span className='notAvailable'>blog:-</span>
                        {
                            userInfo.blog
                                ? <a href={userInfo.blog} >visit</a>
                                : <div className='notAvailable'>
                                    not available
                                 </div>
                        }
                    </div>

                    <div className='modalUser projects'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <AiFillProject title='projects' />
                        </IconContext.Provider>
                        <span className='notAvailable'>public repositories:-</span>{userInfo.public_repos}
                    </div>

                    <div className='modalUser followingFollowersCount'>
                        <IconContext.Provider value={{ className: 'modalIcons' }}>
                            <BsFillPeopleFill title='following and followers' />
                        </IconContext.Provider>
                        <span className='notAvailable'>followers:-</span>{userInfo.followers}
                        <span className='notAvailable'>following:-</span>{userInfo.following}
                    </div>

                </div>
            </div>
        </main>
    );
}

export default ActiveUserModal;