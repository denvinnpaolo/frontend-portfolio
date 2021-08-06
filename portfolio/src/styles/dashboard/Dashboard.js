import styled from "styled-components";

export const AppContainer = styled.div`
    overflow: visible;
    width: 100vw;
    height: 100vh;
    background: white;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 1.2;
`;

export const ContentContainer = styled.div`
    border: 1px solid blue;
    height: 100%;
    width: 100%;
    overflow: auto;


    #welcome-container {
        border: 1px solid green;

        display: flex;
        justify-content: center;
        height: 700px;

        #welcome-text-container {
            border: 1px solid red;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            width: 60%;
            height: 75%;
            
            
            #welcome-title {
                font-size: 4.41em;
            }

        }
    }
    
    @media only screen and (max-width: 992px) {
        height: 580px;
    }
`;