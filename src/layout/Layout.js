import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container> {/* maybe fix here? need to find what contains max-width*/}
      <Header/>
      <main>{children}</main> 
      {/* 여기 안에 들어가야되는건데, 왜? 아마 NextJS thing인듯 */}
      <Footer/>
    </Container>
  )
}
