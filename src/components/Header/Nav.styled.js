import styled from 'styled-components';

export const StyledNav = styled.nav`
        flex: 1;
        flex-basis: 100%
        background: ${({theme}) => theme.primaryLight};
        display: block
        visibility: ${({open}) => open ? 'visible' : 'hidden'};;
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            li {
                list-style: none;
                padding-bottom: 0.5rem;
                padding-left: 0.5rem;
                font-size: 1.6rem;
                font-weight: 300;

                a {
                    color: ${({theme}) => theme.primaryDark}
                    text-decoration: none;
                }
            }
        }
`;