import React, { createContext } from "react"
import queryString from "query-string"

import { useLocation } from "@reach/router"

// Describe Context.
/* 
Features:

useMerchant: Holds all data about current merchant
todo: Navbar

*/

const defaultState = {}

const SiteContext = createContext(defaultState)

const SiteProvider = props => {
  const { children } = props

  return (
    <SiteContext.Provider
      value={{
        location: useLocation(),
        urlParams: queryString.parse(useLocation().search) // Parses location.search for url parameters, and makes it available through SiteContext.
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
