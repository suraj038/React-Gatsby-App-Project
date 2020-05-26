import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Services from "../components/Services/services"


const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="SERVICES"
      subtitle=""
      heroclass="about-background"
    />
    <div className="row my-1 bg-white text-white" >.</div>
    <Services />
    <div className="row my-1 bg-white text-white" >.</div>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default ServicePage
