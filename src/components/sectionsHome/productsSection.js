import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ProductsSection = () => {
  return (
    <>
      {/* Contenedor general */}
      <ProductsContainer>
        {/* Fondo uno */}
        <BgOne />
        {/* fondo dos */}
        <BgTwo />
        {/* contenedor de informacion */}
        <ContentProdutcs>
          {/* contedor de tarjeta y imagen */}
          <ContOne>
            <CardSection>
              <TitleCard>productos</TitleCard>
              <TitleCard subTitle>NU SKIN</TitleCard>
              <DescriptCard>
                Tenemos a disposición los mejores productos para el tratamiento
                de tu piel. Ven y disfruta de un servicio único o tambien puedes
                adquirir los productos para tu uso personal.
              </DescriptCard>
              <BtnCard to="/">Ver todos los productos</BtnCard>
            </CardSection>
            <ImageOne>
              <StaticImage
                src="../../images/products/lumispa.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <SubtitleImages>Galvanica Pro Max i35</SubtitleImages>
            </ImageOne>
          </ContOne>
          {/* otro contenedor para los dos imagenes restantes */}
          <ContTwo>
            <ImageTwo>
              <StaticImage
                src="../../images/products/maquillaje.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <SubtitleImages>Galvanica Pro Max i35</SubtitleImages>
            </ImageTwo>
            <ImageThree>
              <StaticImage
                src="../../images/products/maquinas.jpeg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <SubtitleImages>Galvanica Pro Max i35</SubtitleImages>
            </ImageThree>
          </ContTwo>
        </ContentProdutcs>
      </ProductsContainer>
    </>
  )
}
export default ProductsSection

//contenedorGlobal
const ProductsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  max-height: 700px;
  z-index: 2;
`

//fondo uno Azul
const BgOne = styled.div`
  background: #eafdfc;
  width: 100%;
  height: 100%;
`

//fondo dos rosado
const BgTwo = styled.div`
  position: absolute;
  background: #ffefef;
  width: 30%;
  height: 100%;
`
//contenedor info produducts
const ContentProdutcs = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  left: 0px;
  padding: 25px;
  z-index: 1;
`

// Contenedores de tarjeta e imagenes
// Se usaron dos contenedores y parece algo redundante pero es
// para tener un mejor orden y usar bien FLEX
const ContOne = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`



const ContTwo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

//Card ================
//contenedor Card
const CardSection = styled.div`
  position: relative;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  margin-left: 200px;
  width: 280px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  //Ajustar el ancho
  @media screen and (max-width: 1000px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 650px) {
    width: 200px;
    height: 250px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0px;
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
`
//style parrafo card
const DescriptCard = styled.p`
  font-size: 15px;
  line-height: 150.7%;
  /* or 15px */
  color: #00286d;
  padding: 15px 0;

  //Ajustar el ancho
  @media screen and (max-width: 650px) {
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
  text-decoration: none;
  text-transform: uppercase;
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
  @media screen and (max-width: 650px) {
    padding: 5px;
    font-size: 10px;
  }
`

//Imagenes ================

//imagen uno
const ImageOne = styled.div`
  position: relative;
  left: 15%;
  width: 280px;

  //Ajustar el ancho
  @media screen and (max-width: 1100px) {
    left: 10%;
  }

  @media screen and (max-width: 900px) {
    width: 280px;
    left: 5%;
  }
  @media screen and (max-width: 650px) {
    width: 150px;
    left: 5%;
  }

`
const SubtitleImages = styled.h6`
  position: relative;
  text-align: center;
  color: #00286d;
`

const ImageTwo = styled.div`
  position: relative;
  width: 200px;
  right: 10%;
  margin: 10px 0px;
  //Ajustar el ancho
  @media screen and (max-width: 900px) {
    right: 5%;
    width: 180px;
  }

  @media screen and (max-width: 650px) {
    width: 120px;
    right: 0;
  }
`
const ImageThree = styled.div`
  position: relative;
  width: 370px;
  left: 2%;
  margin: 10px 0px;

  //Ajustar el ancho
  @media screen and (max-width: 900px) {
    width: 300px;
    left: 0;
  }

  @media screen and (max-width: 750px) {
    width: 350px;
    left: 0;
  }

  @media screen and (max-width: 650px) {
    width: 300px;
    left: 3%;
  }
`
