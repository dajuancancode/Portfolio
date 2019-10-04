import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 75%
    margin: 0 auto
    `;

    const Title = styled.h1`
    font-size: 2em;
    font-family: 'Lato';
    font-weight: 900;
    color: #484343;
    `;
    
    const Accent = styled.span`
    font-size: 1em;
    padding: 0 0.1em 0;
    color: #0FB5B2;
    `;

    const Navbar = styled.ul`
    list-style: none;
    display: flex;
    `;

    const NavItem = styled.li`
    font-family: 'Lato';
    font-size: 1em;
    font-weight: 300;
    color: #000;
    padding: 0.5em;
    `;
    
    return(
        <Header>
            <Title>DaJuan<Accent>&amp;&amp;</Accent>CanCode</Title>
            <nav>
                <Navbar>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Contact</NavItem>
                    <NavItem>Blog</NavItem>       
                </Navbar>
            </nav>
        </Header>
    );

}



export default Navbar;