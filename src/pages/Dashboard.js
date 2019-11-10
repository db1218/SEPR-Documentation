import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

const Dashboard = ({ DeviceWidth }) => {
    const storageRef = storage.ref().child('/');
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
        }}>
            <h2>Welcome to</h2>
            <h1><strong>Salt and SEPR&apos;s</strong></h1>
            <h2>documentation site</h2>
            <p>Over time we will add details about our project</p>

            <div>
             <a href="https://github.com/ArchieGodfrey/SEPR-Documentation"><h5>The Github repo for this project can be found here</h5></a>
            </div>
            <Section storageRef={storageRef} DeviceWidth={DeviceWidth} />
        </div>
    );
};

Dashboard.propTypes = {
    DeviceWidth: PropTypes.number,
};

Dashboard.defaultProps = {
    DeviceWidth: 0,
};

export default Dashboard;