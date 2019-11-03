import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom";

import NavigationBar from "./navigationBar"

function throttle (callback, limit) {
  var wait = false;
  return function () {
      if (!wait) {
          callback.call();
          wait = true;
          setTimeout(function () {
              wait = false;
          }, limit);
      }
  }
}

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  handleWindowResize = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.handleWindowResize, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  
  render() {
    const { siteTitle } = this.props;
    const { width } = this.state;
    return (
      <header
          style={{
            background: `black`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}>
            <Link to="/">
              <h1 style={{ margin: 0, color: 'white' }}>
                  {siteTitle}
                </h1>
            </Link>
            <NavigationBar  screenSize={width} />
          </div>
        </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
