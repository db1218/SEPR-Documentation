import React from "react"
import "../layout.css"

export default class Dashboard extends React.Component {
    render() {
        const { DeviceWidth } = this.props;
        return (
           <div style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
           }}>
               <h2>Welcome to</h2>
               <h1><strong>Salt and SEPR's</strong></h1>
               <h2>documentation site</h2>
               <p>Over time we will add details about our project</p>

               <div>
                <a href="https://github.com/ArchieGodfrey/SEPR-Documentation"><h5>The Github repo for this project can be found here</h5></a>
               </div>
           </div>
        )
    }
}
