import styled from 'styled-components';
import menuBG from '../../assets/openMenu.svg'

export const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: start;
    justify-self: center;
    width: 85%;
    grid-area: 1 / 1 / 1 /5
    padding: .5rem 1rem;
    z-index: 6;
    position: relative;

    h1 {
        display: inline-block;
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-right: 1em;
        font-size: 1.8rem;
        font-weight: 400;
        color: #FDFDFD;

        span {
            font-size: 1.8rem;
            padding: 0 0.5rem 0;
            color: #484343;
        }
    }

    button {
        display: flex;
        padding: .25rem .75rem;
        font-size: 1.5rem;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem;
        cursor: pointer;
        border: ${({open}) => open ? '2px solid black': 'none'}
            
        span {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            background: no-repeat center center url(${menuBG});
            background-size: 100% 100%;
        }
    }
`;