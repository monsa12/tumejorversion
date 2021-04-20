import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const WelcomeSection = () => {
  return (
    <>
      <WelcomeContainer>
        <WelcomeTextImg>
          <BgImgWelcomeText>
            <StaticImage
              src="../../images/general/circles.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </BgImgWelcomeText>

          <ContText>
            <CustomWelcomeTextContainer>
              <CustomWelcomeText style={{ textAlign: "center" }}>
                Spa
                <CustomWelcomeText>Tu mejor version</CustomWelcomeText>
              </CustomWelcomeText>
              <CustomWelcomeSubText>Salon de belleza</CustomWelcomeSubText>
            </CustomWelcomeTextContainer>

            <WelcomeText>
              <WelcomeLogotipo>
                La pasion por lo que haces se demuestra en tu piel
              </WelcomeLogotipo>
              <WelcomeOwnerBtn>Atendido por Maria Camila Mañozca</WelcomeOwnerBtn>
            </WelcomeText>
          </ContText>
        </WelcomeTextImg>

        <WelcomeImageTwo>
          <StaticImage
            src="../../images/welcomeImageTwo.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ position: "absolute" }}
          />
        </WelcomeImageTwo>
      </WelcomeContainer>
    </>
  )
}
export default WelcomeSection

// test

const WelcomeContainer = styled.div`
  background: #fff5f4;
  max-height: 650px;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -100px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-top: -60px;
  }

`
//contenedor img y texto
const WelcomeTextImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  top: -80px;
  left: -30px;

  @media screen and (max-width: 1000px) {
    top: -80px;
    left: 25px;
  }

  @media screen and (max-width: 700px) {
    left: -50px;
  }

  @media screen and (max-width: 700px) {
    left: -50px;
  }
  @media screen and (max-width: 500px) {
    left: 0;
  }
`

//Contenedor Img bg
const BgImgWelcomeText = styled.div`
  position: absolute;
  z-index: 0;
  width: 612px;
  height: 612px;
`

//Contenedor titulo y boton
const ContText = styled.div``
//Contenedor titulo de pagina
const CustomWelcomeTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 70px;
`

// contenedor texo y btnOwner
const WelcomeText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  top: 90px;
`

//////Estilos
const CustomWelcomeText = styled.div`
  font-family: Delistha, serif;
  color: #00286d;
  text-shadow: -7px 9px 3px rgba(0, 0, 0, 0.25);
  font-size: 50px;
  line-height: 154.7%;
`
const CustomWelcomeSubText = styled.div`
  position: relative;
  top: 20px;
  color: #00286d;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
`


//Imagen 2 contenedor
const WelcomeImageTwo = styled.div`
  position: relative;
  height: 311px;
  width: 60%;
  display: flex;
  align-items: center;
  top: 150px;

 
  @media screen and (max-width: 768px) {
    margin-top: 25%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`

// STYLES

//textoLogotipo style
const WelcomeLogotipo = styled.p`
  text-align: center;
  color: #00286d;
  font-size: 15px;
  font-weight: bold;
  margin: 50px 0;
`
//botonOwner style
const WelcomeOwnerBtn = styled.div`
  background: #00286d;
  width: 340px;
  white-space: nowrap;
  text-align: center;
  padding: 15px;
  color: #fff5f4;
  font-size: 15px;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;

  &:hover {
    background: #fff5f4;
    color: #00286d;
    border: 1px solid;
  }
`
