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
            {DeviceWidth > 850 && <div style={{
                position: 'absolute', right: 0, bottom: 0, zIndex: -1,
                borderRight:`${DeviceWidth}px solid rgb(50,125,247)`, borderTop:`${window.innerHeight * 0.6}px solid white`,
                }}
            />}
            <div>
                {DeviceWidth > 850 && <div style={{position: 'absolute', left: DeviceWidth * 0.6}}>
                    <Iframe
                        url="https://salt-and-sepr.web.app"
                        width={DeviceWidth * 0.3}
                        height={window.innerHeight * 0.5}
                    />
                    <a href="https://salt-and-sepr.web.app" rel="noopener noreferrer" target="_blank">
                        <h4 style={{textAlign: 'center', color: 'black'}}><strong>View documentation in a new page</strong></h4>
                    </a>
                </div>}

                <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Play <strong style={{fontSize: '5rem'}}>Kroy!</strong></h1>
                <h3 style={{ marginBottom: '1rem'}}>Created by <strong style={{fontSize: '2.5rem'}}>Salt and SEPR</strong></h3>
                    <a href="https://drive.google.com/a/york.ac.uk/file/d/1yjQCnpAWV_J7Hk0eDUBXWFZsT8MuFupM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h5>Download the game here</h5>
                    </a>
                    <p>The following links contain details about our project</p>
                    <ul>
                        <li><a href="https://docs.google.com/document/d/1Lt1E5ticyUY1MxAbgrukSLbxdkpNmpdKNJyOXPUJBpw/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <h5>The User manual for Kroy can be found here</h5>
                        </a></li>
                        <li><a href="https://github.com/ArchieGodfrey/Kroy" rel="noopener noreferrer" target="_blank">
                            <h5>The Github repo for the game can be found here</h5>
                        </a></li>
                    </ul>
                    
                {DeviceWidth <= 850 && <Iframe url="https://salt-and-sepr.web.app"
                    width={DeviceWidth > 960 ? 960 : DeviceWidth}
                    height={window.innerHeight - window.innerHeight * 0.21}
                />}
            </div>
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