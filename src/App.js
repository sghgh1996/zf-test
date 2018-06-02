import React, { Component } from 'react';
import Home from './pages/Home/Home';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


// const future = () => (
//     <div>
//         <h4>به زودی</h4>
//     </div>
// );

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;