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
    height: 93vh;
    width: 100vw;
    overflow: auto;


    #welcome-container {
        border: 1px solid red;
        height: 100vh;

        #welcome-text-container {
            border:1px solid red;
            height: 100%;
            max-height: 1200px;
        }
    }
`;