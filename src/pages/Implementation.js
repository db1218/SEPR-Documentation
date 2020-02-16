import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class Implementation extends React.Component {
    render() {
        const storageRef = storage.ref().child('/7Implementation');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Implementation page</h1>
               <h4>Below are links to all additional files</h4>
               <ul>
                   <li>
                    <a href="https://firebasestorage.googleapis.com/v0/b/sepr-docs.appspot.com/o/Balancing%20Report.pdf?alt=media&token=48c1ca7a-08d6-4dda-b16c-1106acb38b69" rel="noopener noreferrer" target="_blank">
                        <h4>Balancing Report</h4>
                    </a>
                   </li>
               </ul>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

Implementation.propTypes = {
    DeviceWidth: PropTypes.number,
};

Implementation.defaultProps = {
    DeviceWidth: 0,
};
