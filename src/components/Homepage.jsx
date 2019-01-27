import React, {Component} from 'react';
import HeaderComponent from './homepage/HeaderComponent';
import BannerComponent from './homepage/BannerComponent';
import TabComponent from './homepage/tabs/TabComponent';
import SettingsComponent from './homepage/SettingsComponent';
import AboutComponent from './homepage/AboutComponent';
import ContactUsComponent from './homepage/ContactUsComponent';
import FeedbackForm from "./homepage/FeedbackForm";
// import Currency from './currency';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <BannerComponent />
                <TabComponent />
                <SettingsComponent />
                <AboutComponent />
                <ContactUsComponent />

                {/*<FeedbackForm />*/}
                {/*<Currency/>*/}
            </React.Fragment>
        );
    }
}

export default Homepage;
