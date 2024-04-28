import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './component/CommonFolder/mainNavigation/mainNavigation'
import ChatBotMain from './component/Chatbot/Chatbot'
import Footer from './component/CommonFolder/Footer/Footer'

const Layout = () => {
  
  return (
    <>
      <MainNavigation />
      <Outlet/>
      <ChatBotMain />
      <Footer/>
    </>
  )
}

export default Layout

