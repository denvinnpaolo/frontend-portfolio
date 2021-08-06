import React from 'react';

// Components
import Navigation from './Navigation';

// Styles
import {AppContainer, ContentContainer} from '../../styles/dashboard/Dashboard.js'
import Welcome from './content/Welcome';
const Dashboard = () => {
    return (
        <AppContainer>
            <Navigation />
            <ContentContainer>
                <Welcome />
            </ContentContainer>
        </AppContainer>
    )

};

export default Dashboard