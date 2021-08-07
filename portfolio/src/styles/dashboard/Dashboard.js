import styled from "styled-components";


var bg = 'black'
var text = 'white'
export const AppContainer = styled.div`
    overflow: visible;
    width: 100vw;
    height: 100vh;
    background: ${bg};
    color: ${text};
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 1.2;
`;

export const ContentContainer = styled.div`
    // border: 1px solid blue;
    height: 100%;
    width: 100%;
    overflow: auto;

    h1 {
        font-size: 4.41em;
    }

    #welcome-container {

        display: flex;
        justify-content: center;
        height: 700px;

        #welcome-text-container {

            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: flex-end;

            
            width: 810px;
            height: 80%;
            min-height:80%;
            

            #welcome-title{
                font-weight: 600;
            }
            
            #welcome-subtitle{
                text-align: center;
                font-size: 1.2em;
                margin-top:40px;
                margin-bottom: 40px;
            }

            #welcome-btn {
                display: flex;
                justify-content: center;
                align-items:center;
                min-height: 48px;
                width:120px;
                font-size: 1em;
                margin-bottom: 40px;
                line-height: 1;
                font-weight: 500;
                border-radius: 4px;
                background-color: #fff;
                padding: .5em 1.8em;
                background-clip: border-box;
                background: white;
                color: black;
            }
           

        }
    }
    
    @media only screen and (max-width: 992px) {
        height: 580px;
        
    }
`;