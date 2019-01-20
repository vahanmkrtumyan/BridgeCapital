import React, {Component} from 'react';
import HeaderComponent from './homepage/HeaderComponent'
import BannerComponent from './homepage/BannerComponent'

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <BannerComponent />
            </React.Fragment>
        );
    }
}

export default Homepage;
