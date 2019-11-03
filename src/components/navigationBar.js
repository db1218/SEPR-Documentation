import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { NavigationOptions } from "../config";

const NavBarOption = ({ option }) => (
    <div style={{
        marginRight: '.45rem'
    }}>
        <Link to={option.link}>
            <h6 style={{
                color: 'white'
            }}>
                {option.title}
            </h6>
        </Link>
    </div>  
)

const NavigationBar = ({ screenSize }) => {
    const [viewableItems, setViewableItems ] = useState(NavigationOptions);
    const [currentSize, setCurrentSize ] = useState(screenSize);

    //TODO calculate values dynamically
    const siteTitleWidth = 500;
    const optionWidth = 225;
    const subsequentOptionDifference = 50;
    const remainingWidth = screenSize - siteTitleWidth;

    useEffect(() => {
        if (currentSize !== screenSize) {
            const filteredOptions = [];
            let menuNeeded = false;
            NavigationOptions.map((option, i) => {
                if ((i + 1) * (optionWidth - (i * subsequentOptionDifference)) <= remainingWidth && !menuNeeded) {
                    filteredOptions.push(option)
                } else {
                    !menuNeeded && filteredOptions.push({id: i, title: "Menu", link: "/menu"});
                    menuNeeded = true;
                }
                return setViewableItems(filteredOptions);
            })
            setCurrentSize(screenSize);
        }
    }, [currentSize, screenSize, remainingWidth])

    return(
    <div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0,
        }}>
            {console.log(viewableItems)}
            {viewableItems.map(option => <NavBarOption key={option.id} option={option} />)}
        </div>
    </div>
    )
}

NavigationBar.propTypes = {
  smallscreen: PropTypes.bool,
}

NavigationBar.defaultProps = {
    smallscreen: false,
}

export default NavigationBar