import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import UserDetails from './UserDetails';
import Skills from './Skills';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Hero />
                <UserDetails />
                <Skills />
            </div>            
        )
    }
}

export default Home;