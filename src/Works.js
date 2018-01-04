import React, { Component } from 'react';

let works = [
    {
        id: 0,
        image: 'images/bring-guru.png',
        title: 'Bring Guru',
        desc: 'A platform that connects freelancer with the shoppers.'
    },
    {
        id: 1,
        image: "images/greenacre.png",
        title: 'Greenacre',
        desc: 'This is a website of a local football club in Australia.'
    },
    {
        id: 2,
        image: 'images/nja.png',
        title: 'National Judicary Academy',
        desc: "A webapp that manages and tracks all operations within a academy."
    },
    {
        id: 3,
        image: 'images/smart-ai.png',
        title: 'Smart AI Recruiter',
        desc: 'This website connects the right person with right job out there.'
    },    
    {
        id: 4,
        image: 'images/niyuta-tech.png',
        title: 'Niyuta Tech',
        desc: 'This is a comapny website which provides detailed information.'
    },    
    {
        id: 5,
        image: 'images/anekonnect.png',
        title: 'Anekonnect.io',
        desc: 'It offers engineering drawing & 3D model files of connectors and cables.'
    }    
    
]

class Works extends Component {
    constructor() {
        super();
        this.state = {
            count: 4,
            show: true
        }
    }
    toggleCount = () => {
        let { count, show} = this.state;
        count = (count<works.length)?works.length: 4;
        this.setState({count, show: !show});
    }
    render() {
        return (
            <div id="work">
                <div className="container">
                    <h2>Latest Work</h2>
                    <div className="row">
                        {
                            works.map((work) => work.id < this.state.count && <SingleWork key={work.id} data={work} />)
                        }                        
                    </div>
                    <a onClick={this.toggleCount} className="btn btn-primary">{
                        (this.state.show)?"See more projects":"Show Less"
                    }  </a>
                </div>
            </div>
        );
    }
}

const SingleWork = ({data}) => {    
    return (
        <div className="col-md-6">        
            <div className="single-work">
                <div className="work-image">
                    <img src={data.image} alt={data.title}/>
                </div>
                <div className="work-details">            
                    <div className="work-title">
                        {data.title}
                    </div>
                    <div className="work-description">
                        {data.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;   