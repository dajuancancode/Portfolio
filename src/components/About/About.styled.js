import styled from 'styled-components';

export const StyledAbout = styled.section`
    background: #f5f6fb;
    grid-area: 3 / 1 / span 2 / -1
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    h1 {
        font-size: 3rem
        justify-self: center;
        border-bottom: 2px solid ${({theme}) => theme.primaryAccent};
    }

    div {
       width: 95%;
       margin: 10px auto 10px;
       height: auto;
       background-color: ${({theme}) => theme.primaryLight};
       border: transparent;
       border-radius: 3px;
       box-shadow: 0 4px 6px 0 rgba(29,25, 92, 0.25)
    }
`