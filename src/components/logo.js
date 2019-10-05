import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2em;
    font-family: 'Lato';
    font-weight: 400;
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
    
export const Accent = styled.span`
    font-size: 1em;
    padding: 0 0.1em 0;
    color: #0FB5B2;
    `;