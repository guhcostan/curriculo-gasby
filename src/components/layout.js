/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
import { Colors } from "../contants/Colors"
import SEO from "./seo"

const Page = styled.div`
  background: ${Colors.PRIMARY};
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <Page>
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
      <Container>
        <main>{children}</main>
      </Container>
      <SEO title={'Curriculo Gustavo Costa'} />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
