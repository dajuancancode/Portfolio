import styled from 'styled-components';


export const StyledAbout = styled.section`
    background: #f5f6fb;
    grid-area: 3 / 1 / span 2 / -1
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.5;
    

    h1 {
        font-size: 3rem
        align-self: center;
    }

    .aboutContent {
        display: flex;
        margin-bottom: 1rem;

        .aboutParagraphs {
            display: flex;
            flex-direction: column;
            width: 70%;
            
            p {
                padding: 1rem;
            }


        }
       

       .skillsContent {
            height: auto;
            background-color: ${({theme}) => theme.primaryLight}
            margin: 0 auto;
            box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.16);
            display: flex
            flex-direction: column;
            border-radius: 3px;

            .border {
                height: 5px;
                background-color: ${({theme}) => theme.primaryAccent};
                margin-bottom: 2rem;
                border-radius: 3px 3px 0 0;
            }

            p {
                align-self: center;
            }

            .skillContainer{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                width: 95%;
                margin: .5rem auto;
                justify-content: center;

                ul {
                    margin: 0 auto;
                    margin-top: 1.5rem;
                    li {
                        list-style: none;
                        padding-bottom: 0.3rem;
                    }
                }

            }

            @media (min-width: 768px) {
                width:  25%
            }
        }

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    
`