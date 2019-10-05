import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(12, 1fr);
    align-self: start;
    grid-area: 1 / 2 / 1 / 12;
    z-index: 5;

    @media (max-width: 575px) {
        grid-area: 1 / 1 / 2/ 13;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows repeat(2, 1fr);
    }
    

    @media (min-width: 576px) and (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows repeat(2, 1fr);
        grid-area: 1 / 2 / 2 / 12;
        margin: 0;
    }

    @media (min-width: 770px) and (max-width: 992px) {
        
    }
    `;

