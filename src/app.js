import React, {useState} from 'react';
import styled, { ThemeProvider} from 'styled-components';
import { GlobalStyles } from './global'
import { theme } from './theme'

import {Header, Content} from './components'
import BG from './assets/bg@767.png';

const App = () => {

    const [ open, setOpen] = useState(false)

    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: 100vw;
    height: 100vh;
    
    @media(min-width: 768px) and (max-width: 991px) {
        grid-template-columns: repeat(8, 1fr);
        grid-gap: 16px;
    }

    @media(min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 16px;
    }

    .bgContainer {
        grid-area: 1 / 1 / 3 / -1;
        height: 100%;
        width: 100%;
        background: ${({theme}) => theme.primaryAccent}
        clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);


        @media(min-width: 768px) and (max-width: 991px) {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            grid-area 1 / 5 / 3 / -1;
        }

        @media(min-width: 992px) {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            grid-area 1 / 6 / 3 / -1;
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