import styled from 'styled-components'


export const Navbar = styled.nav`
grid-area: 1 / 9 / 1 / 12
justify-self: end;
color: #FDFDFD;

@media (min-width: 320px) and (max-width: 769px) {
    grid-area: 1/12;
    justify-self: center;
}

button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background: #000;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
}

ul {
    list-style: none;
    display: flex;

    @media (max-width: 768px) {
        display: ${props => props.menuToggle ? 'flex' : 'none' }
    }

    li {
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

        a {
            text-decoration: none;
            color: #484343
        
            &:hover {
                border-bottom: 5px solid #0FB5B2
            }
        }
    }
    
    
}


`;