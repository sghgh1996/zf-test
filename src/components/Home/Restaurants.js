import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import axios from 'axios';

class Restaurants extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:null
        };
    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps);
        if(newProps.location !== null){
            let url = 'https://newapi.zoodfood.com/mobile/v1/restaurant/new-near?lat='+newProps.location.coords.latitude+'&long='+newProps.location.coords.longitude;
            const self = this;
            axios({
                method: 'get',

                url: url
            }).then(function (response) {
                if(response.data.status === true){
                    self.setState({
                        data: response.data.data
                    });
                }
            }).catch(function (error) {
                // TODO next
            });
        }
    }

    render() {
        let restaurantPart = [];
        if(this.state.data != null){
            let c = 0;
            for (var i = 0; i < this.state.data['vendors'].length; i++) {
                c++;
                if (c > 20) {
                    break;
                }
                restaurantPart.push(<Restaurant key={this.state.data['vendors'][i].id} data={this.state.data['vendors'][i]} />)
            }
        
        } else {
            restaurantPart = (
                <div style={{marginTop:30, marginLeft:'auto', marginRight:'auto',width:70, height:'auto'}}>
                    <img class="image-responsive" src='../../loading1.gif'/>
                </div>
            );
        }

        return restaurantPart;
    }
}

Restaurants.propTypes = {
    location: PropTypes.object
};

export default Restaurants;