import React from 'react';
import { StyledHeader } from './Header.styled'

const Header = ({open, setOpen}) => {

    return (
        <StyledHeader open = {open}>
            <h1>DaJuan<span>&amp;&amp;</span>CanCode</h1>
            <button onClick = {() => setOpen(!open)}>
                <span></span>
            </button>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </nav>
        </StyledHeader>
    )

}

export default Header