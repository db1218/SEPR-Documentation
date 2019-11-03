import React from "react"
import "../layout.css"
import { Link } from "react-router-dom";
import { NavigationOptions } from "../config";

export default class Menu extends React.Component {
    render() {
        return (
           <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
           >
               <h1>Contents Page</h1>
               {NavigationOptions.map(option => (
                   <div key={option.id}>
                       <Link to={option.link}>
                        <h3 style={{
                            
                        }}>
                            {option.title}
                        </h3>
                    </Link>
                   </div>
                   
               ))}
           </div>
        )
    }
}