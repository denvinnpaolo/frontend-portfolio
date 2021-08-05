import styled from "styled-components";

var bg = 'black'
export const NavContainer = styled.div`
    position: relative;
    
    left: 0;
    top:0;
    right:0;
    bottom:auto;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    margin: 0 auto;
    padding: 20px 4%;
    font-size: 16px;
    color: ${bg};
    border-bottom: 1px solid hsla(0,0%,100%,.1);

    min-height: 50px;
    height: 4.5vh;
    min-width: 1000px;
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
            
            min-width: 600px;
            width: 80%;
            height: 100%;
            // background: red;

            .link {
                min-height: 20px;
                padding: 12px 40px 12px 12px;
                font-weight: 300;
            }

            #nav-title {
                font-size: 35px;
                font-weight: 500;
            }
        }
        

    }
    
    
`;