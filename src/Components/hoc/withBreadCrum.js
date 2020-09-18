import SimpleBreadcrumbs from '../common/breadcrumbs'
import React, { useState, createContext } from 'react'

export const BreadcrumContext = createContext([])

const withBreadcrum = (WreappedComponent, initialLinks) => {
  return () => {
    const [links, setLinks] = useState(initialLinks)

    return (
      <BreadcrumContext.Provider value={{ setLinks }}>
        <SimpleBreadcrumbs links={links} />
        <WreappedComponent />
      </BreadcrumContext.Provider>
    )
  }
}

export default withBreadcrum
