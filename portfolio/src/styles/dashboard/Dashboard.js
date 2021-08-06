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
    min-height: 400px;
    height: 600px;
    width: 100%;
    overflow: auto;


    #welcome-container {
        min-height:200px; 
        height: 800px;

        #welcome-text-container {
            // border:1px solid red;

            height: 70%;
        }
    }
`;