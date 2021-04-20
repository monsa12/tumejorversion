import * as React from "react"
import Header from "./header"
import {GlobalStyle} from './styles/globalStyles'
import './styles/layout.css'

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Header />  
        <main>{children}</main>      
    </>
  )
}
export default Layout
