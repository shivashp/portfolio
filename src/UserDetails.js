import React, { Component } from 'react';

class UserDetails extends Component {
    render() {
        return (
            <div id="user-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://i.stack.imgur.com/aSMCQ.jpg?s=328&g=1" className="img-circle" alt="Shiva Pandey" />
                        </div>
                        <div className="col-md-6">
                            <h4>I’m a designer &amp; digital nomad from Nepal. I spend most of my time learning new technologies and design trends.</h4>
                        </div>
                    </div>                
                </div>                
            </div>
        );
    }
}

export default UserDetails;