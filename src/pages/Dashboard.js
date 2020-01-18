import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import Iframe from 'react-iframe';

const Dashboard = ({ DeviceWidth }) => {
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
            <p>The following links contain details about our project</p>

            <ul>
                <li><a href="https://docs.google.com/document/d/1Lt1E5ticyUY1MxAbgrukSLbxdkpNmpdKNJyOXPUJBpw/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                    <h5>The User manual for Kroy can be found here</h5>
                </a></li>
                <li><a href="https://github.com/ArchieGodfrey/Kroy" rel="noopener noreferrer" target="_blank">
                    <h5>The Github repo for the game can be found here</h5>
                </a></li>
                <li><a href="https://salt-and-sepr.web.app" rel="noopener noreferrer" target="_blank">
                    <h5>Click here to open the documentation in a new page</h5>
                </a></li>
            </ul>
            <Iframe url="https://salt-and-sepr.web.app"
                width={DeviceWidth > 960 ? 960 : DeviceWidth}
                height={window.innerHeight - window.innerHeight * 0.21}
            />
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