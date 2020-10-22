import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

import './header.styles.scss';

import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

class Header extends React.Component {

    static defaultProps = {
        title: 'GithubFinder'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    constructor(props) {
        super();
        this.state = { searchInput: '' };
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.github.com/users').then(res => {
            this.props.setUserList(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchInput !== prevState.searchInput && this.state.searchInput !== '') {
            axios.get(`https://api.github.com/search/users?q=${this.state.searchInput}`).then(res => {
                this.props.setUserList(res.data.items);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    changeHandler(e) {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <header className='navbar'>
                <div className="logo">
                    <IconContext.Provider value={{ className: 'AppIcon' }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                    <span className='title'>{this.props.title}</span>
                </div>
                <div className="search">
                    <input className='searchInput' value={this.state.searchInput} onChange={this.changeHandler} />
                    <div className='searchIcon'>
                        <IconContext.Provider value={{ className: 'searchicon' }}>
                            <FiSearch />
                        </IconContext.Provider>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;