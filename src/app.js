import React, {useState} from 'react';
import styled, { ThemeProvider} from 'styled-components';
import { GlobalStyles } from './global'
import { theme } from './theme'

import {Header, Content} from './components'
import BG from './assets/bg@3x.svg';

const App = () => {

    const [ open, setOpen] = useState(false)

    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
    grid-gap: 10px;
    width: 100vw;
    height: 100vh;
    

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

    return(
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Main>
                    <div className="bgContainer"></div>
                    <Header open = {open} setOpen = {setOpen}/>
                    <Content />
                </Main>
            </>
        </ThemeProvider>
    )
}

export default App;