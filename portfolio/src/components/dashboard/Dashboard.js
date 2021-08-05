import React from 'react';

// Components
import Navigation from './Navigation';

// Styles
import {AppContainer, ContentContainer} from '../../styles/dashboard/Dashboard.js'
const Dashboard = () => {
    return (
        <AppContainer>
            <Navigation />
            <ContentContainer></ContentContainer>
        </AppContainer>
    )

};

export default Dashboard