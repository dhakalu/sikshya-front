import React, { useState, createContext, useContext } from 'react'
import Header from '../navigation/Header'
import ContentWrapper from './ContentWrapper.styles'
import LoginPage from '../../Pages/LoginPage'
import { isEmpty } from '../utils/ObjectUtils'
import withPage from './page'

const initialLoggedInUser = {}

export const LoggedInUserContext = createContext(initialLoggedInUser)

/**
 * This HOC is designed to use with the main route component. Please limit the use outside of it.
 * This component checks weather the context has logged in user or not.
 */
export const withLogin = (WrappedPage, showLoginPage) => {
  return () => {
    const [user, setUser] = useState({username: 'demo'})

    const updateUser = (user) => {
      setUser(user)
    }

    const Content = withPage(WrappedPage)

    return (
      <LoggedInUserContext.Provider value={{ user, setUser: (user) => updateUser(user) }}>
        {
          isEmpty(user) && showLoginPage ? <LoginPage /> : (
            <Content />
          )
        }
      </LoggedInUserContext.Provider>
    )
  }
}

export default withLogin
