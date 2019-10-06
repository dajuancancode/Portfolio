import React from 'react';



import { Navbar  } from './navigation';
import { Title, Accent } from './logo';
import { HeaderContainer } from './header-container';

export const Header = ({menuToggle, handleToggle}) => {

    return (
        <HeaderContainer>
            <Title>DaJuan<Accent>&amp;&amp;</Accent>CanCode</Title>
            <Navbar>
                <button onClick = {handleToggle}>
                    <span></span>
                </button>
                {/* <ul menuToggle = {menuToggle}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul> */}
            </Navbar>
        </HeaderContainer>
    )

}