import React, {useState} from 'react';
import styled from 'styled-components';

import { Header } from './components/header'
import Content from './components/content'

import BG from './assets/bg3.jpg';

const App = () => {

    const [menuToggle, setMenuToggle] = useState(false)

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

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }

    console.log(menuToggle)

    return(
        <Main>
            <Header menuToggle = {menuToggle} handleToggle = {handleToggle}/>
            <Content />
            <Image src = {BG} />
        </Main>
    )
}

export default App;