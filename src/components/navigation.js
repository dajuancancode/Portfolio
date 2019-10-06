import styled from 'styled-components'
import menuBG from '../assets/openMenu.svg'


export const Navbar = styled.nav`

button {
    display: flex;
    width: 2em;
    height: 2em;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
        
    span {
        width: 2em;
        height: 2em;
        background: url(${menuBG}) no-repeat center center
        background-size: 100% 100%;
    }


}


`;