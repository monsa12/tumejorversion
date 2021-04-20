import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { menuData } from "../data/menuData"

const Footer = () => {
  return (
    <>
      {/* Contenedor general */}
      <FooterContainer>
        <LineTopFooter />
        {/* <FooterSection> */}
        <LogoFooter>
          <CustomWelcomeTextContainer>
            <CustomWelcomeText style={{ textAlign: "center" }}>
              Spa
              <CustomWelcomeText>Tu mejor version</CustomWelcomeText>
            </CustomWelcomeText>
            <CustomWelcomeSubText>Salon de belleza</CustomWelcomeSubText>
          </CustomWelcomeTextContainer>
        </LogoFooter>
        {/* </FooterSection> */}

        {/* <FooterSection> */}
        <ContactFooter>
          <TitleSectionFooter>
            Visita nuestras redes sociales
          </TitleSectionFooter>
          <SocialIncons>
            <StaticImage
              src="../images/social/instagram.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              width={31}
              height={31}
              style={{
                margin: "5px",
              }}
            />
            <StaticImage
              src="../images/social/fb.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              width={15}
              height={31}
              style={{
                margin: "5px",
              }}
            />
          </SocialIncons>
          <TitleSectionFooter>
            También puedes ponerte en contacto con nosotros
          </TitleSectionFooter>
          <SocialIncons style={{ display: "flex", alignItems: "center", width:"100%"}}>
            <StaticImage
              src="../images/social/whatssap.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              width={31}
              height={31}
              style={{
                margin: "5px",
              }}
            />
            <TitleSectionFooter>+57 000 000 0000</TitleSectionFooter>
          </SocialIncons>
          <TitleSectionFooter>
            Carrera 00 # 00-00 Bario BarrioBarrio Barrio
          </TitleSectionFooter>
        </ContactFooter>
        {/* </FooterSection> */}

        {/* <FooterSection style={{ maxWidth: "displa:none" }}> */}
        <SiteNavigationFooter>
          <TitleSectionFooter>Sigue navegando</TitleSectionFooter>
          <ListNavigationFooter>
            {menuData.map((item, index) => (
              <LinkListNavigationFooter
                to={item.link}
                key={index}
                activeClassName="active"
              >
                <ItemListNavigationFooter>
                  {item.title}
                </ItemListNavigationFooter>
              </LinkListNavigationFooter>
            ))}
          </ListNavigationFooter>
        </SiteNavigationFooter>
        {/* </FooterSection> */}

        <CreditsFooter>
          Desarrollado por:
          <LinkCredits to="https://monsa12.github.io/">
            {" "}
            Diego Monsalve
          </LinkCredits>
        </CreditsFooter>
      </FooterContainer>
    </>
  )
}
export default Footer

//contenedor general
const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 350px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  background: #fff;

  @media screen and (max-width: 700px) {
    max-height: 300px;
  }
`

const CustomWelcomeTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

//////Estilos
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
//////

const LineTopFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 15px;
  background: #00286d;
`
const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  flex-basis: 30%;

  @media screen and (max-width: 700px) {
    flex-basis: 50%;
  }
`

const LogoFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 250px;
  padding: 20px;
  box-sizing: border-box;
  flex-basis: 30%;
`
const ContactFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  flex-basis: 30%;
`
const TitleSectionFooter = styled.div`
  color: #00286d;
  font-weight: bold;
  margin: 10px 0;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`
const SocialIncons = styled.div`
  margin: 10px;

  @media screen and (max-width: 500px) {
    text-align: center;
    width: 60px;
    text-align: center;
    display: inline-flex;
  }
`

const SiteNavigationFooter = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  flex-basis: 30%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`
const ListNavigationFooter = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`
const LinkListNavigationFooter = styled(Link)`
  color: #00286d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
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
const ItemListNavigationFooter = styled.li`
  display: list-item;
`
const CreditsFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 10px;
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
