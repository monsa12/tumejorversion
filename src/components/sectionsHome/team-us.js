import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const TeamUs = () => {
  return (
    <>
      {/* Contenedor general */}
      <TeamUsContainer>
        <TitleTeamUs>Sobre nosotros</TitleTeamUs>
        <ItemsContainer>
          <OwnerDescription>
            <ImageOwner>
              <StaticImage
                src="../../images/about/owner.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={200}
                height={300}
                style={{
                  borderRadius: "15px",
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <NameOWner>Maria Camila Mañozca</NameOWner>
            </ImageOwner>
            <DescriptionParagrafOwner>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
            </DescriptionParagrafOwner>
          </OwnerDescription>
          <TeamDescription>
            <ImageTeam>
              <StaticImage
                src="../../images/about/team.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                width={300}
                height={200}
                style={{
                  borderRadius: "15px",
                  boxShadow: `0px 3px 6px rgba(0, 0, 0, 0.25)`,
                }}
              />
              <NameTeam>El equipo de trabajo</NameTeam>
            </ImageTeam>
            <DescriptionParagrafTeam>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit
            </DescriptionParagrafTeam>
          </TeamDescription>
        </ItemsContainer>
      </TeamUsContainer>
    </>
  )
}
export default TeamUs

//contenedorGlobal
const TeamUsContainer = styled.div`
  position: relative;
  display: inline-block;
  /* justify-content: center; */
  height: 100vh;
  max-height: 550px;
  z-index: 2;
  background: #fff6f7;

  @media screen and (max-width: 700px) {
    max-height: 600px;
  }
`
const TitleTeamUs = styled.h1`
  /* width: 100%; */
  color: #00286d;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 100.7%;
  text-transform: uppercase;
  margin: 50px 0 0 50px;

  @media screen and (max-width: 680px) {
    font-size: 25px;
  }
`
const ItemsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 850px) {
    margin-top: 15px;
  }
`
const OwnerDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
`
const ImageOwner = styled.div`
  @media screen and (max-width: 500px) {
    margin: 10px;
  }
`
const NameOWner = styled.div`
  color: #00286d;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`
const DescriptionParagrafOwner = styled.div`
  width: 50%;
  margin: 0 0 0 15px;
  text-align: center;
  color: #00286d;
  @media screen and (max-width: 880px) {
    width: 100%;
    margin: 15px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`

const TeamDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

`
const ImageTeam = styled.div`
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 10px;
  }
`
const NameTeam = styled.div`
  color: #00286d;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`
const DescriptionParagrafTeam = styled.div`
  width: 50%;
  margin: 15px 0 0 15px;
  text-align: center;
  color: #00286d;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
    padding: 15px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 15px;
  }
`
