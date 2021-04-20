import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/menuData"

const Header = () => {
  const [isHidden, showNavigation] = useState(true)

  return (
    <Menus>
      <Nav>
        {/* imageLogo */}
        <ImgLogo></ImgLogo>

        <Bars
          onClick={() => {
            showNavigation(!isHidden)
            console.log(isHidden)
          }}
          className={isHidden ? "" : "active"}
        />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index} activeClassName="active">
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
      </Nav>

      <ResponsiveNav className={isHidden ? "" : "active"}>
        <LogoNav>
          <CustomWelcomeTextContainer>
            <CustomWelcomeText style={{ textAlign: "center" }}>
              Spa
              <CustomWelcomeText>Tu mejor version</CustomWelcomeText>
            </CustomWelcomeText>
            <CustomWelcomeSubText>Salon de belleza</CustomWelcomeSubText>
          </CustomWelcomeTextContainer>
        </LogoNav>

        <LineBottom />

        <ResponsiveNavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index} activeClassName="active">
              {item.title}
            </NavLink>
          ))}
        </ResponsiveNavMenu>

        <CreditsFooter>
          Desarrollado por:
          <LinkCredits to="https://monsa12.github.io/">
            {" "}
            Diego Monsalve
          </LinkCredits>
        </CreditsFooter>
      </ResponsiveNav>
    </Menus>
  )
}

export default Header

const ImgLogo = styled.div`
  background: transparent;
  height: 100px;
  width: 100px;
  margin: 0 100px 0 40px;
`

//////Estilos
const CustomWelcomeTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CustomWelcomeText = styled.div`
  font-family: Delistha, serif;
  color: #00286d;
  text-shadow: -7px 9px 3px rgba(0, 0, 0, 0.25);
  font-size: 25px;
  line-height: 154.7%;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`
const CustomWelcomeSubText = styled.div`
  position: relative;
  top: 15px;
  color: #00286d;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
`
const LogoNav = styled.div`
  position: relative;
  top: 20px;
`
/////

const LineBottom = styled.div`
  position: relative;
  width: 100%;
  height: 15px;
  background: #00286d;
  top: 50px;
`

const Menus = styled.div``

const ResponsiveNav = styled.div`
  position: fixed;
  background: white;
  top: 0px;
  width: 50%;
  height: 100vh;
  z-index: 5;
  display: none;
  transition: 0.3s !important;
  @media screen and (max-width: 768px) {
    display: inline;
    left: 100%;
  }

  &.active {
    left: 50%;
  }
`

const Nav = styled.nav`
  /* background: #fff5f4; */
  background: transparent;
  height: 100px;
  display: flex;
  z-index: 6;
  position: relative;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`

const NavLink = styled(Link)`
  color: #00286d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.5s !important;

  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #00286d;
  z-index: 6;
  transition: 0.5s !important;

  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  &.active {
    transform: rotate(90deg);
    color: red;
    top: 15px;
    right: 30px;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ResponsiveNavMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 70px;
`

const CreditsFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 15px;
`
const LinkCredits = styled(Link)`
  color: #00286d;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s !important;
  margin: 10px 0;

  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`
