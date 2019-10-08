import React from 'react';

import { ContentStyled } from './Content.styled'

const Content = () => {

    return (
        <ContentStyled>
            <p className="light">Hello <span role="img" aria-label="wave emoji">👋</span></p>
            <h1>I'm <span className="accent">DaJuan</span></h1>
            <p className="light">A fullstack developer with an interest in creating lightweight but powerful web and mobile applications.</p>
        </ContentStyled>
    )

}

export default Content