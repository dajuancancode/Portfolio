import React from 'react';
import styled from 'styled-components';

const Content = () => {

    const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 3em);
    gap: 16px 10px;
    grid-area: main;
    margin-left: 140px;
    justify-self: center;
    align-self: center;
    `;

    const LineOne = styled.h1`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    font-family: 'Lato';
    font-size: 3em;
    font-weight: 300;
    `;
    const LineTwo= styled.h1`
    grid-column-start: 1;
    grid-row-start: 2;
    font-family: 'Lato';
    font-size: 3em;
    font-weight: 400;
    `;
    const LineThree = styled.h1`
    grid-column-start: 1;
    grid-row-start: 3;
    font-family: 'Lato';
    font-size: 3em;
    font-weight: 900;
    `;

    return (
        <Wrapper>
            <LineOne>Hey there 👋 </LineOne>
            <LineTwo>I’m DaJuan Harris</LineTwo>
            <LineThree>A Full Stack Developer</LineThree>
        </Wrapper>
    )

}

export default Content