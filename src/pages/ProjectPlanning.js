import React from "react"
import "../layout.css"
import { storage } from "../config";
import Section from '../components/Section';

export default class ProjectPlanning extends React.Component {
    render() {
        const storageRef = storage.ref().child('/Project Planning');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Project Planning page</h1>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        )
    }
}