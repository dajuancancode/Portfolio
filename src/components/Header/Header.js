import React from 'react';
import { StyledHeader } from './Header.styled'
import { StyledNav } from './Nav.styled'

const Header = (props) => {

    return (
        <StyledHeader>
            <h1>DaJuan<span>&amp;&amp;</span>CanCode</h1>
            <button open = {props.open} onClick = {() => props.setOpen(!props.open)}>
                <span></span>
            </button>
            <StyledNav open={props.open}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </StyledNav>
        </StyledHeader>
    )

}

export default Header