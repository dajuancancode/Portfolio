import React from 'react';
import styled from 'styled-components';

import Navbar from '../navbar/navbar'
import Content from '../content/content'

import BG from '../../assets/bg.jpg';

const App = () => {
    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr, repeat(3, 1fr);
    grid-template-areas: "header header header header header header header header header header header header"
                        "main main main main main main sidebar sidebar sidebar sidebar sidebar sidebar"
                            "main main main main main main sidebar sidebar sidebar sidebar sidebar sidebar"
                        "main main main main main main sidebar sidebar sidebar sidebar sidebar sidebar";
    width: 100vw;
    height: 100vh;
    `;

    const Image = styled.img`
    grid-area: 1 / 7 / 5 / 12
    width: 720px;
    `

    return(
        <Main>
            <Navbar />
            <Content />
            <Image src = {BG} />
        </Main>
    )
}

export default App;