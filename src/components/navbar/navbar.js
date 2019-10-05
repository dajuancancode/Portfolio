import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const Header = styled.header`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(12, 1fr);
    align-self: start;
    grid-area: 1 / 2 / 1 / 13;
    z-index: 5;

    @media (max-width: 575px) {
        grid-area: 1 / 1 / 2/ 13;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows repeat(2, 1fr);
    }
    

    @media (min-width: 576px) and (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows repeat(2, 1fr);
        grid-area: 1 / 2 / 2 / 12;
        margin: 0;
    }

    @media (min-width: 770px) and (max-width: 992px) {
        
    }
    `;

    const Title = styled.h1`
    font-size: 2em;
    font-family: 'Lato';
    font-weight: 900;
    color: #484343;
    grid-column-start: 1;

    @media (min-width: 320px) and (max-width: 769px) {
        grid-area: 1 /1;
        justify-self: center;
        font-size: 1.5em;
    }

    @media (min-width: 770px) and (max-width: 992px) {
        font-size: 1.7em;
        align-self: center;
    }
    `;
    
    const Accent = styled.span`
    font-size: 1em;
    padding: 0 0.1em 0;
    color: #0FB5B2;
    `;

    const Nav = styled.nav`
    grid-area: 1 / 9 / 1 / 12
    justify-self: end;
    color: #FDFDFD;

    @media (min-width: 320px) and (max-width: 769px) {
        grid-area: 2/1;
        justify-self: center;
    }
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

    @media (min-width: 320px) and (max-width: 769px) {
        padding: 0.3em;
    }

    @media (min-width: 320px) and (max-width: 769px) {
        padding: 0.3em;
    }

    `;

    const NavLink = styled.a`
    text-decoration: none;
    color: #484343

    &:hover {
        border-bottom: 5px solid #0FB5B2
    }
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