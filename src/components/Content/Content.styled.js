import styled from 'styled-components';

export const ContentStyled = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 5;
    margin: 0 5%;
    z-index: 6;

    h1 {
        font-family: 'Lato';
        font-size: 1.6em;
        font-weight: 900;
        color: #484343;
        padding-bottom: 0.25em;

        .accent {
            color: #0FB5B2;
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