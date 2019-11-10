import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavigationOptions } from "../config";

const NavBarOption = ({ option, history }) => (
    <div style={{
        marginRight: '1.5rem',
    }}
        onClick={() => history.updateCurrentPath(history.currentPath === option.link ? history.previousPath : option.link)}
    >
        <Link to={history.currentPath === option.link ? history.previousPath : option.link}>
            {option.title !== "Menu" ? <h6 style={{
                color: 'white',
                margin: 0,
            }}>
                {option.title}
            </h6>
            :
            <FontAwesomeIcon icon={faBars} size="2x" />
            }
        </Link>
    </div>  
)

const NavigationBar = ({ screenSize, history }) => {
    const [viewableItems, setViewableItems ] = useState(NavigationOptions);
    const [currentSize, setCurrentSize ] = useState(screenSize);

    //TODO calculate values dynamically
    const siteTitleWidth = 500;
    const optionWidth = 200;
    const subsequentOptionDifference = 12;
    const remainingWidth = screenSize - siteTitleWidth;

    useEffect(() => {
        const filteredOptions = [];
        let menuNeeded = false;
        NavigationOptions.map((option, i) => {
            if ((i + 1) * (optionWidth - ((i + 1) * subsequentOptionDifference)) <= remainingWidth && !menuNeeded) {
                filteredOptions.push(option)
            } else {
                !menuNeeded && filteredOptions.push({id: i, title: "Menu", link: "/menu"});
                menuNeeded = true;
            }
            return setViewableItems(filteredOptions);
        })
        setCurrentSize(screenSize);
    }, [currentSize, remainingWidth, screenSize])

    return(
    <div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0,
        }}>
            {viewableItems.map(option =>
                <NavBarOption
                    key={option.id}
                    option={option}
                    history={history}
                />)}
        </div>
    </div>
    )
}

NavigationBar.propTypes = {
    screenSize: PropTypes.number,
}

NavigationBar.defaultProps = {
    screenSize: 0,
}

NavBarOption.propTypes = {
    option: PropTypes.object,
}

NavBarOption.defaultProps = {
    option: {id: 0, title: "Menu", link: "/menu"},
}

export default NavigationBar