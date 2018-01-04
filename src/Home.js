import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import UserDetails from './UserDetails';
import Skills from './Skills';
import Works from './Works';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Navigation />
                <Hero />
                <UserDetails />
                <Skills />
                <Works />
            </div>            
        )
    }
}

export default Home;