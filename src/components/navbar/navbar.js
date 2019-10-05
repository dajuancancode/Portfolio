import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const Header = styled.header`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(12, auto, [col-start]);
    margin 0 140px 0;
    align-self: center;
    grid-area: header;
    z-index: 5;
    `;

    const Title = styled.h1`
    font-size: 2em;
    font-family: 'Lato';
    font-weight: 900;
    color: #484343;
    grid-column-start: 1;
    grid-column-end: 2;
    `;
    
    const Accent = styled.span`
    font-size: 1em;
    padding: 0 0.1em 0;
    color: #0FB5B2;
    `;

    const Nav = styled.nav`
    grid-column-start: 9;
    grid-column-end: 12;
    justify-self: end;
    color: #FDFDFD;
    `;

    const Navbar = styled.ul`
    list-style: none;
    display: flex;
    `;

    const NavItem = styled.li`
    font-family: 'Lato';
    font-size: 1.2em;
    font-weight: 300;
    padding: 0.5em;
    `;

    const NavLink = styled.a`
    text-decoration: none;
    color: #FDFDFD
    `;
    
    return(
        <Header>
            <Title>DaJuan<Accent>&amp;&amp;</Accent>CanCode</Title>
            <Nav>
                <Navbar>
                    <NavItem><NavLink href="#">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#">About</NavLink></NavItem>
                    <NavItem><NavLink href="#">Projects</NavLink></NavItem>
                    <NavItem><NavLink href="#">Contact</NavLink></NavItem>
                    <NavItem><NavLink href="#">Blog</NavLink></NavItem>       
                </Navbar>
            </Nav>
        </Header>
    );

}



export default Navbar;