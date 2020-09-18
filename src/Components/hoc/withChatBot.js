import React from 'react'
import SikshyaBot from '../chat-bot'

const withChatBot = (WrappedPage) => {
  return () => (
    <>
      <WrappedPage />
      <SikshyaBot />
    </>
  )
}

export default withChatBot
