/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { Location } from "@reach/router"
import { SiteProvider } from "./src/context/siteContext"

export const wrapRootElement = ({ element }) => {
  // Unless otherwise told, default the locale to English.

  return (
    <Location>
      <SiteProvider>{element}</SiteProvider>
    </Location>
  )
}
