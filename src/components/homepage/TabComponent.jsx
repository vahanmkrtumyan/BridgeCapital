import React, {Component} from 'react';

class TabComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="tab">
                        <ul className="tab-header">
                            <li className="active">
                                <a href="">Բրոքերային</a>
                            </li>
                            <li>
                                <a href="">Խորհրդատվական</a>
                            </li>
                            <li>
                                <a href="">Արտարժույթային</a>
                            </li>
                        </ul>
                        <div className="tab-body">

                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default TabComponent;
