import React from 'react';
import styled from 'styled-components';

import { Header } from './components/header'
import Content from './components/content'

import BG from './assets/bg@3x.png';

const App = () => {

    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr))
    grid-column-gap: 12px;
    width: 100vw;
    height: 100vh;
    

    .bgContainer {
        grid-area: 1 / 1 / 3 /5;
        height: 65%;
        width: 100%;
        background: no-repeat top/cover url(${BG});
        clip-path: polygon(0 0, 100% 0%, 100% 100%);
    }

    `;

    return(
        <Main>
            <div className="bgContainer"></div>
            <Header />
            <Content />
        </Main>
    )
}

export default App;