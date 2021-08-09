import styled from "styled-components";

var bg = 'white'
var text = 'black'
export const NavContainer = styled.div`
    position: fixed;
    left: 0;
    top:0;
    right:0;
    bottom:auto;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${bg};
    margin: 0 auto;
    padding: 20px 4%;
    font-size: 16px;
    color: ${text};
    border-bottom: 1px solid hsla(0,0%,100%,.1);

    min-height: 25px;
    height: 4vh;
    max-width:100%;
    letter-spacing: .5px;

    #navigation {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1260px;


        #nav-menu{
            display: flex;
            align-items: center;
            
            width: 80%;
            height: 100%;

            .link {
                min-height: 20px;
                padding: 12px 40px 12px 12px;
                font-weight: 300;
            }

            #nav-title {
                min-height: 20px;
                padding: 12px 40px 12px 12px;
                font-size: 35px;
                font-weight: 500;
            }
        }
        
        
        @media only screen and (max-width: 620px) and (min-width: 300px){
            display: none;
        }
    }
    
    
`;