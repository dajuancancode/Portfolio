import React from 'react';
import { ThemeProvider} from 'styled-components';
import { GlobalStyles } from './global'
import { theme } from './theme'

import {Main, About} from './components'


const App = () => {
    

    return(
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Main />
                <About />
            </>
        </ThemeProvider>
    )
}

export default App;