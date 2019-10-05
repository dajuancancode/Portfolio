import React from 'react';
import styled from 'styled-components';

const Content = () => {

    const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 16px 10px;
    grid-area: 3 / 2 / 4 / 7;

    @media (max-width: 575px) {
        z-index: 5;
        grid-area: 3 / 2 / 4 / 12;
    }

    @media (min-width: 576px) and (max-width: 769px) {
        z-index: 5;
        grid-area: 3 / 3 / 4 / 11;
        /*grid-template-rows: repeat(3, 2em);*/
    }

    @media (min-width: 770px) and (max-width: 992px) {
        z-index: 5;
        grid-area: 3 / 2 / 4 / 7;
    }

    `;

    const Headding = styled.h1`
    font-family: 'Lato';
    font-size: 2.5em;
    font-weight: 400;
    color: #484343;

    @media (max-width: 575px) {
        font-size: 1.7em;
    }

    @media (min-width: 576px) and (max-width: 769px) {
        font-size: 2em;
    }

    @media (min-width: 770px) and (max-width: 992px) {
        font-size: 2em;
    }

    
    `;
    
    const Accent = styled.span`
    font-size: 1em;
    color: #0FB5B2;
    `;

    return (
        <Wrapper>
            <Headding>Hey there <span role="img" aria-label="Wave emoji">👋</span></Headding>
            <Headding>I’m DaJuan Harris</Headding>
            <Headding>A <Accent>Full Stack Developer</Accent></Headding>
        </Wrapper>
    )

}

export default Content