import React, { useContext } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SiteContext from '../context/siteContext'

const IndexPage = () => {
  const siteContext = useContext(SiteContext)
  console.log('siteContext', siteContext)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{JSON.stringify(siteContext.urlParams)}</p>
      <p>Href: {JSON.stringify(siteContext.location.href)}</p>
      <p>Pathname: {JSON.stringify(siteContext.location.pathname)}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
