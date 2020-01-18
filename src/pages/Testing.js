import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class Testing extends React.Component {
    render() {
        const storageRef = storage.ref().child('/6Testing');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Testing page</h1>
               <h4>Below are links to all external files</h4>
               <ul>
                   <li>
                    <a href="https://drive.google.com/a/york.ac.uk/file/d/1x06m8Y2xIilKJao57ffOGb2KicAOELTo/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Code standards</h4>
                    </a>
                   </li>
                   <li>
                    <a href="https://docs.google.com/spreadsheets/d/1R3Sllrp6JBsMDXjNrgVyxq_Eobxq0lJMfmrkM-ufiF0/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Test Cases</h4>
                    </a>
                   </li>
                   <li>
                    <a href="https://docs.google.com/spreadsheets/d/1eBuh6mlPppfzZ9UReYEvmTLPU2sM8t5dbWAGZ14H4vI/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Traceability Matrix</h4>
                    </a>
                   </li>
               </ul>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

Testing.propTypes = {
    DeviceWidth: PropTypes.number,
};

Testing.defaultProps = {
    DeviceWidth: 0,
};