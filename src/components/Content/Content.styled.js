import styled from 'styled-components';

export const ContentStyled = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 5;
    margin: 0 5%;
    z-index: 6;

    h1 {
        font-size: 2.6rem;
        font-weight: 900;
        color: #484343;
        padding-bottom: 0.5rem;

        .accent {
            color: ${({ theme }) => theme.primaryAccent};
        }
    }

    .light {
        font-weight: 300;
        padding-bottom
    }

    .regular {
        font-weight: 400
    }

`;