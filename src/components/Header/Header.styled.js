import styled from 'styled-components';
import menuBG from '../../assets/openMenu.svg'

export const StyledHeader = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: start;
    justify-self: center;
    grid-area: 1 / 1 / 1 /5
    width: 85%;
    padding: .5em 1em;
    z-index: 6;
    position: relative;

    h1 {
        display: inline-block;
        padding-top: .3125rem;
        padding-bottom: .3125em;
        margin-right: 1em;
        font-size: 1.25em;
        font-family: 'Lato';
        font-weight: 900;
        color: #FDFDFD;

        span {
            font-size: 1em;
            padding: 0 0.1em 0;
            color: #484343;
        }
    }

    button {
        display: flex;
        padding: .25em .75em;
        font-size: 1em;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem;
            
        span {
            display: inline-block;
            width: 1.5em;
            height: 1.5em;
            background: no-repeat center center url(${menuBG});
            background-size: 100% 100%;
        }
    }
`;