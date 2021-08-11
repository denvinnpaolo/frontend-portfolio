import styled from "styled-components";


var bg = 'black'
var text = 'white'
// var bg = 'white'
// var text = 'black'
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
    border: 2px solid pink;
    margin-top: 75px;
    height: 100%;
    width: 100%;
    overflow: auto;

    h1 {
        font-size: 4.41em;
    }

    h3 {
        font-size: 2.5em;
        font-weight: 500;
    }

    #welcome-container {
        display: flex;
        flex-direction: column;
        align-items: center;
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
                border: 1px solid black;
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
        #welcome-slider {
            height: 100%;
            width: 100%;
        }

        .carousel-container {
            img {
                height: 100px;
            }
        
        }
        .carousel-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
        }
    }
    

    #top-container{
        height:500px;

        display: flex;
        align-items: center;
        justify-content:space-evenly;

        .top-project{
            border: 1px solid red;
            
            height: 65%;
            width: 30%;
            min-height: 250px;
            max-height:400px;
            min-width: 250px;
            max-width:400px;

            border-radius: 10px;
        }
    }

    @media only screen and (max-width: 992px) {
        // height: 580px;
        
    }
`;

export const BlogContainer = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 92vh;
    min-height: 500px;
    max-height: 800px;

    #blog-contents {
        border: 1px solid red;

        display: flex;

        width: 85%;
        min-width: 800px;
        max-width: 1100px;

        min-height 300px;
        height: 80%;
        max-height: 640px;

        .blog-post {
            border: 1px solid yellow;
            min-height: 210px;

            min-width: 210px;
            width: 100%;
            height: 33%;
        }

        .latest-post {
            height: 100%;
            width: 100%;
        }

        #blog-list {
            border: 1px solid blue;
            height: 100%;
        }

    }
`;