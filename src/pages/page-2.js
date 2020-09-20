import React, { useContext } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SiteContext from '../context/siteContext'

const SecondPage = () => {
  const siteContext = useContext(SiteContext)
  console.log('siteContext', siteContext)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>{JSON.stringify(siteContext.urlParams)}</p>
      <p>Href: {JSON.stringify(siteContext.location.href)}</p>
      <p>Pathname: {JSON.stringify(siteContext.location.pathname)}</p>

      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
