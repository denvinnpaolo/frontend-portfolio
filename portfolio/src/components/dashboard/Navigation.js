import React from 'react';
import { NavContainer } from '../../styles/dashboard/Navigation';

const Navigation = () => {

    const links = ['About', 'Projects', 'Blog', 'Message']

    return(
        <NavContainer>
            <h1>Denvinn Magsino</h1>
            {links.map((link, linkIdx) => {
                return  <section key={linkIdx} className="link">{link}</section>
            })}
            
        </NavContainer>
    );

};

export default Navigation;