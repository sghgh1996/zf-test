import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Restaurant.css';

class Restaurant extends Component {
    render() {
        let data = this.props.data;
        // let dic
        // if(data.discountValueForView !== 0){
        //
        // }
        return(
            <div className="item">
                <div className="item-logo">
                    <img className="image-responsive" src={data.logo}/>
                </div>
                <div className="item-info">
                    <div style={{fontSize:21, fontWeight:'bold', color:'#000'}}>{data.title}</div>
                    <div>{data.description}</div>
                    <div>{data.address}</div>
                    <div>{data.description}</div>
                </div>
                <div className="item-rate">
                    <div class="rate-box">
                        {data.rating.toFixed(1)}
                    </div>
                    <div style={{fontSize:12, fontWeight:'lighter', color:'#979797'}}>112 نظر</div>
                </div>
            </div>
        );
    }
}
Restaurant.propTypes = {
    data: PropTypes.object
};
export default Restaurant;