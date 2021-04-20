import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ServicesSection = () => {
  return (
    <>
      {/* Contenedor general */}

      <ServicesContainer>
        <StaticImage
          src="../../images/services/bg-services-section.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
        />

        <CardsContainer>
          <CardSection>
            <TitleCard>Servicios en </TitleCard>
            <TitleCard subTitle>el Spa</TitleCard>
            <DescriptCard>
              Contamos con servicios que van desde mascarillas rejuvenecedoras
              hasta servicios para uñas, todo esto usando los mejores productos
              para el cuidado de tu piel.
            </DescriptCard>
            <BtnCard to="/">Ver todos los servicios</BtnCard>
          </CardSection>

          <ServicesCard>
            <ImageServices>
              <StaticImage
                src="../../images/services/spa-service.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={150}
                height={150}
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <ImageServicesDesc>Servicio de Spa</ImageServicesDesc>
            </ImageServices>
            <ImageServices>
              <StaticImage
                src="../../images/services/hands-service.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={150}
                height={150}
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <ImageServicesDesc>Arreglo de manos</ImageServicesDesc>
            </ImageServices>
            <ImageServices>
              <StaticImage
                src="../../images/services/foot-service.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={150}
                height={150}
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <ImageServicesDesc>Arreglo de pies</ImageServicesDesc>
            </ImageServices>
            <ImageServices>
              <StaticImage
                src="../../images/services/facial-service.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={150}
                height={150}
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <ImageServicesDesc>Rejuvenecimiento facial</ImageServicesDesc>
            </ImageServices>
            <ImageServices>
              <StaticImage
                src="../../images/services/mask-service.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={150}
                height={150}
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <ImageServicesDesc>Mascarilla facial</ImageServicesDesc>
            </ImageServices>
          </ServicesCard>
        </CardsContainer>
      </ServicesContainer>
    </>
  )
}
export default ServicesSection

//contenedorGlobal
const ServicesContainer = styled.div`
  display: grid;
  height: 100vh;
  max-height: 700px;
  overflow: hidden;
`
const CardsContainer = styled.div`
  position: relative;
  height: 100vh;
  max-height: 700px;
  display: grid;
  grid-auto-flow: dense;
  grid-area: 1/1;
  place-items: center;
  padding: 15px 150px;

  @media screen and (min-width: 690px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1150px) {
    padding: 15px 100px;
  }

  @media screen and (max-width: 850px) {
    padding: 15px 65px;
  }

  @media screen and (max-width: 780px) {
    padding: 15px 20px;
  }

  @media screen and (max-width: 690px) {
    grid-template-rows: 1fr 1fr;
  }
`


const ServicesCard = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
  height: 550px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1000px) {
    width: 450px;
  }

  @media screen and (max-width: 900px) {
    width: 350px;
  }

  @media screen and (max-width: 690px) {
    flex-direction: row;
    height: 320px;
    width: 400px;
    padding: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    top: -20px;
  }

`

//colummns service card

const ImageServices = styled.div`
  margin: 8px;
  flex: 1 0 21%; /* explanation below */

  @media screen and (max-width: 1000px) {
    width: 120px;
  }
`
const ImageServicesDesc = styled.h6`
  text-align: center;
  color: #00286d;
`

//Card ================
//contenedor Card
const CardSection = styled.div`
  position: relative;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 50px; */
  top: -15%;
  width: 280px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  grid-column-start: 2;

  //Ajustar el ancho

  @media screen and (max-width: 750px) {
    grid-column-start: 1;
  }

  @media screen and (max-width: 690px) {
    top: -2%;
    width: 200px;
    height: 250px;
  }
  //aquie voy reparando vista mobil 460 px
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 250px;
  }
`

//styles titulos card
const TitleCard = styled.h1`
  color: #2cccc4;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 100.7%;
  padding-top: ${props => (props.subTitle ? "0" : "15px")};
  text-transform: uppercase;
  /* or 25px */

  @media screen and (max-width: 680px) {
    font-size: 25px;
  }
`
//style parrafo card
const DescriptCard = styled.p`
  font-size: 15px;
  line-height: 150.7%;
  /* or 15px */
  color: #00286d;
  padding: 15px 0;

  //Ajustar el ancho
  @media screen and (max-width: 690px) {
    font-size: 10px;
  }
`
const BtnCard = styled(Link)`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #2cccc4;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid #2cccc4;
  box-sizing: border-box;
  font-size: 15px;
  transition: 0.3s !important;

  &:hover {
    background: #00286d;
    color: #fff5f4;
    border: 1px solid;
  }
  //Ajustar el ancho
  @media screen and (max-width: 720px) {
    padding: 5px;
    /* font-size: 10px; */
  }

  @media screen and (max-width: 650px) {
    font-size: 10px;
  }
`
