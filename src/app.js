import React from 'react';
import styled, { ThemeProvider} from 'styled-components';
import { GlobalStyles } from './global'
import { theme } from './theme'

import {Header, Content} from './components'
import BG from './assets/bg@3x.png';

const App = () => {

    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 72px));
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
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Main>
                    <div className="bgContainer"></div>
                    <Header />
                    <Content />
                </Main>
            </>
        </ThemeProvider>
    )
}

export default App;