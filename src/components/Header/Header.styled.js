import styled from 'styled-components';
import openMenu from '../../assets/openMenu.svg'
import closeMenu from '../../assets/closeMenu.svg'

export const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: start;
    grid-area: 1 / 1 / 1 / -1
    padding-top: 0.5rem;
    z-index: 6;
    background: ${({open, theme}) => open ? '#FEFEFE' : 'transparent'};

    h1 {
        display: inline-block;
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-left: 0.5rem;
        font-size: 2rem;
        font-weight: 400;
        color: ${({open, theme}) => open ? theme.primaryDark : theme.primaryLight};

        span {
            font-size: 1.8rem;
            padding: 0 0.5rem 0;
            color: ${({open, theme}) => open ? theme.primaryAccent : theme.primaryDark};
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
            
        span {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            background: no-repeat center center url(${({open}) => open ? closeMenu : openMenu});
            background-size: 100% 100%;
        }

        @media(min-width: 768px) and (max-width: 991px) {
            display: none;
        }
    }

    nav {
        flex-basis: 100%
        height: 100%;
        display: block
        visibility: ${({open}) => open ? 'visible' : 'hidden'};
        background: ${({theme}) => theme.primaryLight};
        border-top: 2px solid #FCFCFC;
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            li {
                list-style: none;
                padding-bottom: 0.5rem;
                padding-left 0.5rem;
                font-size: 1.8rem;
                font-weight: 300;

                a {
                    color: ${({theme}) => theme.primaryDark}
                    text-decoration: none;
                    transition: border-bottom 0.1s ease-in-out;

                    &:hover {
                        border-bottom: 0.2rem solid ${({theme}) => theme.primaryAccent}
                    }
                }
            }
        }

        @media(min-width: 768px) and (max-width: 991px) {
            visibility: visible
            background: transparent
            flex-basis: 60%
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 0.5rem;
            border: none;
            ul {
                flex-direction: row;
                justify-content: space-around;

                li {
                    font-size: 2rem;

                    a {
                        color: ${({theme}) => theme.primaryLight}
                    }
                }
            }
        }
    }
`;