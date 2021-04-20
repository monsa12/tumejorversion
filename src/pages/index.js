import * as React from "react"

import Layout from "../components/layout"
import ServicesSection from "../components/sectionsHome/servicesSection"
import ProductsSection from "../components/sectionsHome/productsSection"
import WelcomeSection from "../components/sectionsHome/welcomeSection"
import SEO from "../components/seo"
import TeamUs from "../components/sectionsHome/team-us"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection />
    <ProductsSection />
    <ServicesSection/>
    <TeamUs/>
    <Footer/>
  </Layout>
)

export default IndexPage
