import React from 'react';
import { NavContainer } from '../../styles/dashboard/Navigation';

const Navigation = () => {

    const links = ['Home','About', 'Projects', 'Blog']

    return(
        <NavContainer>
            <section id="navigation">
                <section id="nav-menu">
                    <h1 className="link" id="nav-title">DP</h1>
                    {links.map((link, linkIdx) => {
                        return  <section key={linkIdx} className="link">{link}</section>
                    })}
                </section>
                <section>Message</section>
            </section>
            
        </NavContainer>
    );

};

export default Navigation;