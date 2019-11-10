import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class RiskAssessment extends React.Component {
    render() {
        const storageRef = storage.ref().child('/5Risk Assessment');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Risk Assessment page</h1>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

RiskAssessment.propTypes = {
    DeviceWidth: PropTypes.number,
};

RiskAssessment.defaultProps = {
    DeviceWidth: 0,
};