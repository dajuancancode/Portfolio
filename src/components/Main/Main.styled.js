import styled from 'styled-components';

import BG from '../../assets/bg@3x.svg';

export const StyledMain = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
    grid-gap: 10px;
    width: 100vw;
    height: 100vh;
    grid-area: 1 / 1 / 3 / -1

    

    .bgContainer {
        grid-area: 1 / 1 / 3 / -1;
        height: 100%;
        width: 100%;
        background: no-repeat bottom right /cover url(${BG});
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 40%);


        @media(min-width: 768px) {
            background: no-repeat center /cover url(${BG});
        }
    }

`;