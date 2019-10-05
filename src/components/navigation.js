import styled from 'styled-components'


export const Navbar = styled.nav`
grid-area: 1 / 9 / 1 / 12
justify-self: end;
color: #FDFDFD;

@media (min-width: 320px) and (max-width: 769px) {
    grid-area: 2/1;
    justify-self: center;
}
`;

export const Nav = styled.ul`
list-style: none;
display: flex;
`;

export const NavItem = styled.li`
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


export const NavLink = styled.a`
text-decoration: none;
color: #484343

&:hover {
    border-bottom: 5px solid #0FB5B2
}
`;