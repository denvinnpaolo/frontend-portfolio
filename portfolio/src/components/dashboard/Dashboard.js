import React from 'react';

// Components
import Navigation from './Navigation';

// Styles
import {AppContainer, ContentContainer} from '../../styles/dashboard/Dashboard.js'
import Welcome from './content/Welcome';
import Top from './content/TopProjects';
import BlogPost from './content/BlogPost'

const Dashboard = () => {
    return (
        <AppContainer>
            <Navigation />
            <ContentContainer>
                <Welcome />
                <Top />
                <BlogPost />
            </ContentContainer>
        </AppContainer>
    )

};

export default Dashboard