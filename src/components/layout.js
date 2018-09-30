import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/styles/index.scss'

import SEO from './SEO'

const Layout = ({ children }) => (
  <>
    <SEO />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
