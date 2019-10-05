import React from 'react';
import styled from 'styled-components';

import Navbar from '../navbar/navbar'
import Content from '../content/content'

import BG from '../../assets/bg3.jpg';

const App = () => {
    const Main = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 16px;
    width: 100vw;
    height: 100vh;
    `;

    const Image = styled.img`
    height: 100%;
    width: 100%;
    grid-area: 1 / 7 / 6 / 13;


    @media (min-width: 320px) and (max-width: 769px) {
        grid-area 1 / 1 / 6/ 13;
    }
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