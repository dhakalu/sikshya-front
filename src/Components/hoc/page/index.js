import Header from '../../navigation/Header'
import React from 'react'
import ContentWrapper from '../ContentWrapper.styles'

const withPage = (WrappedContant) => {
  return () => {
    return (
      <>
        <Header />
        <ContentWrapper>
          <WrappedContant />
        </ContentWrapper>
      </>
    )
  }
}

export default withPage
