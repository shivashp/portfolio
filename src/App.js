import React, { Component } from 'react';
import Home from './Home';
import Particles from 'react-particles-js';
import * as particlesConfig from './particlesjs-config.json';

class App extends Component {
  render() {
    return (
      <div>              
        <Particles 
              id="particles"
              params={particlesConfig}
              style = {{
                minHeight: 1200,
                zIndex: -2,
                position: 'absolute'
              }}              
            />
        <Home />
      </div>
    );
  }
}

export default App;
 