import React, {Component} from 'react';
import HeaderComponent from './homepage/HeaderComponent';
import BannerComponent from './homepage/BannerComponent';
import TabComponent from './homepage/TabComponent';
// import Currency from './currency';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <BannerComponent />
                <TabComponent />

                {/*<Currency/>*/}
            </React.Fragment>
        );
    }
}

export default Homepage;
