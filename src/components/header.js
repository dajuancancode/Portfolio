import React from 'react';

import { Nav, NavItem, NavLink, Navbar  } from './navigation';
import { Title, Accent } from './logo';
import { HeaderContainer } from './header-container';

export const Header = () => {
    return (
        <HeaderContainer>
            <Title>DaJuan<Accent>&amp;&amp;</Accent>CanCode</Title>
            <Navbar>
                <Nav>
                    <NavItem><NavLink>Home</NavLink></NavItem>
                    <NavItem><NavLink>About</NavLink></NavItem>
                    <NavItem><NavLink>Projects</NavLink></NavItem>
                    <NavItem><NavLink>Contact</NavLink></NavItem>
                    <NavItem><NavLink>Blog</NavLink></NavItem>
                </Nav>
            </Navbar>
        </HeaderContainer>
    )

}