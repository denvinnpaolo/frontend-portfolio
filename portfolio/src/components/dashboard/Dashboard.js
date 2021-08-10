import React from 'react';

// Components
import Navigation from './Navigation';

// Styles
import {AppContainer, ContentContainer} from '../../styles/dashboard/Dashboard.js'
import Welcome from './content/Welcome';
import Top from './content/TopProjects';
const Dashboard = () => {
    return (
        <AppContainer>
            <Navigation />
            <ContentContainer>
                <Welcome />
                <Top />
            </ContentContainer>
        </AppContainer>
    )

};

export default Dashboard