import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.campsite && "row" || false}></div>
        );
    }
}

export default CampsiteInfo;