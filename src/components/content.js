import React from 'react';
import styled from 'styled-components';

const Content = () => {

    const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 5;
    margin: 0 5%;
    z-index: 6;

    h1 {
        font-family: 'Lato';
        font-size: 1.6em;
        font-weight: 900;
        color: #484343;
        padding-bottom: 0.25em;

        .accent {
            color: #0FB5B2;
        }
    }

    .light {
        font-weight: 300;
        padding-bottom
    }

    .regular {
        font-weight: 400
    }

    `;

    return (
        <Wrapper>
            <h1 className="light">
                Hey there <span role="img" aria-label="Wave emoji">👋</span>
            </h1>
            <h1 className="regular">
                I’m DaJuan Harris
            </h1>
            <h1>
                A <span className="accent">Full Stack Developer</span>
            </h1>
        </Wrapper>
    )

}

export default Content