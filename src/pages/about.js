import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroudSection"
import Info from "../components/Home/info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="about us"
      styleClass="about-background" />
    <Info/>
    
  </Layout>
)

export  const query = graphql`
{
  
  img: file(relativePath: {eq: "platter.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default AboutPage
