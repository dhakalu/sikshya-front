import React from 'react'
import styled from 'styled-components'
import SikshyaBot from '../Components/chat-bot'

import { thinScrollBar } from '../Components/utils/ScrollableAreas'
import ChatBotPreview from '../Components/home/ChatBotPreview'
import Header from '../Components/navigation/Header'

const Home = props => {
  return (
    <>
      <HomeWrapper>
        <Header />
        <div className='content'>
          <div className='mission'>
            <ChatBotPreview />
          </div>
        </div>
      </HomeWrapper>
      <SikshyaBot />

    </>
  )
}

export default Home

const NAV_BAR_HEIGHT = '50px'
const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    background: #f0f0f0;
    width: 100vw;
    .margin-vertical-30 {
      margin: 30px 0;
    }
    .header {
      display: flex;
      position: fixed;
      top: 0;
      width: 100vw;
      justify-content: space-between;
      background-color: #fff;
      border-box: 0 1px 2px #ccc;
      height: ${NAV_BAR_HEIGHT};
      align-items: center;
    }

    .content {
      margin-top: ${NAV_BAR_HEIGHT};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mission {
      width: 60%;
    }

    .sample-commands-container {
      height: 55px;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      ${thinScrollBar}
    }

    .sample-commands {
      diplay: inline-block;
      padding: 7px 20px;
      border: 2px solid #ccc;
      margin: 10px;
      border-radius: 10px;
      background: #fff;
      outline: none;
      cursor: pointer;
    }

    .chat-bot-about-container {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      background: #fff;
      box-shadow: 0 1px 2px #ccc;
      border-radius: 10px;
      height: 400px;
      overflow: hidden;
      .chat-bot-about {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: center;
        min-width: 50%;
        padding: 20px;
        margin-right: 20px;
      }
    }
`
