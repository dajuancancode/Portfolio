import React from 'react';

import { ContentStyled } from './Content.styled'

const Content = () => {

    return (
        <ContentStyled>
            <h1 className="light">
                Hey there <span role="img" aria-label="Wave emoji">👋</span>
            </h1>
            <h1 className="regular">
                I’m DaJuan Harris
            </h1>
            <h1>
                A <span className="accent">Full Stack Developer</span>
            </h1>
        </ContentStyled>
    )

}

export default Content