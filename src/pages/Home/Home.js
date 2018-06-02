import React, { Component } from 'react';
import './Home.css';
import Restaurants from '../../components/Home/Restaurants';

const getLocation = (changeLoc) => {
    const geoLoc = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
        if (!geoLoc) {
            reject(new Error('Not Supported'));
        }

        geoLoc.getCurrentPosition((position) => {
            changeLoc(position)
        }, () => {
            reject (new Error('Permission denied'));
        });
    });

    return location;
};

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            loc: null
        };
    }

    changeLoc = (loc)=>{
        this.setState({loc:loc})
    };
    componentDidMount() {
        getLocation(this.changeLoc);

    }

    render() {
        return(
            <div className="body">
                <div className="app-header"></div>
                <Restaurants location={this.state.loc} />
            </div>
        );
    }
}

export default Home;