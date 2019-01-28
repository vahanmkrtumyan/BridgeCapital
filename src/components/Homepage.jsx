import React, {Component} from 'react';
import HeaderComponent from './homepage/HeaderComponent';
import BannerComponent from './homepage/BannerComponent';
import TabComponent from './homepage/TabComponent';
import SettingsComponent from './homepage/SettingsComponent';
import AboutComponent from './homepage/AboutComponent';
import ContactUsComponent from './homepage/ContactUsComponent';
import FooterComponent from './homepage/FooterComponent';
import Currency from './homepage/currency';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <BannerComponent />
                <TabComponent />
                {/*<Currency/>*/}
                <SettingsComponent />
                <AboutComponent />
                <ContactUsComponent />
                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default Homepage;
