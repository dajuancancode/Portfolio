import styled from 'styled-components';

export const ContentStyled = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / -1;
    margin: 0 5%;
    z-index: 6;
    justify-self: center;
    align-self: center;

    @media(min-width: 768px) {
        justify-self: center;
        align-self: center;
    }

    h1 {
        font-size: 4.5rem;
        font-weight: 900;
        color: #484343;
        padding-bottom: 0.5rem;

        .accent {
            color: ${({ theme }) => theme.primaryAccent};
        }

        @media(min-width: 768px) {
            font-size: 7rem;
        }
    }

    .light {
        font-weight: 300;
        font-size: 2.5rem;
        line-height: 3.5rem;

        @media(min-width: 768px) {
            font-size: 3rem;
            line-height: 4rem;
        }
    }

    .regular {
        font-weight: 400
    }

`;