import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/Home/Menu"
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroudSection"
import Info from "../components/Home/info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="regular joe's"
      styleClass="default-background" />
   
    <Menu items={data.menu}/>
    <Products />
    <Contact/>
  </Layout>
)

export  const query = graphql`
{
  
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },

   menu:allContentfulCoffeeItem{
    edges {
      node{
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(height:50){
            ...GatsbyContentfulFixed
          }
        }
        
      }
    }
  }
}

`

export default IndexPage
