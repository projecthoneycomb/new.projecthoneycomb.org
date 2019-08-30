import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div class="menu">
      <div class="menu-item">
        <a href="https://www.notion.so/projecthoneycomb/Interesting-Resources-708d8291637045e1bd43aa7e2d18e20a" target="_blank">
          <span>Resources</span>
        </a>
      </div>
      <div class="menu-item">
        <Link>
          <span>Get in touch</span>
        </Link>
      </div>
      <div class="logo menu-item">
        <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 89"><g id="Group_1" transform="translate(-104.05 -56)"><path id="Path_37" class="st1" d="M123.03 106.61l2.29 1.43 19-11.14-.13-22.02L125.05 64l-19 11.14.13 22.02 10.71 5.79.07-2.81 2.19-1.46-8.08-4.37-.13-16.39 14.11-8.29 14.24 8.1.08 16.37-14.11 8.29-2.24 1.49"></path><path id="Path_38" class="st1" d="M144.17 94.4l-2.26-1.67-19 11.14.13 22.02 19.13 10.89 19-11.14-.13-22.02-9.57-5.29v2.38l-2.37 1.28 7.05 4.49.08 16.37-14.11 8.29-14.2-8.08-.13-16.39 14.18-8.6 2.19-1.28"></path></g></svg>
        <Link>
          <span style={{color: '#EA493D'}}>Project Honeycomb</span>
        </Link>
      </div>
      <div class="menu-item">
        <Link>
          <span>Projects</span>
        </Link>
      </div>
      <div class="menu-item">
        <a href="https://identity.projecthoneycomb.org/login">
          <span>Login</span>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
