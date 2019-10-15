import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


/* Themes Components */
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import * as themes from '../styles'

import Header from "./header"
import "./layout.css"
import { LendicoTheme } from "../styles";
import Container from "./Container";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={LendicoTheme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
        </Container>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
