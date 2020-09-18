import React from 'react'
import ContentWrapper from '../ContentWrapper.styles'

const withPage = (WrappedContant) => {
  return () => {
    return (
      <>
        <ContentWrapper>
          <WrappedContant />
        </ContentWrapper>
      </>
    )
  }
}

export default withPage
