import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    
    <div className="row my-1 bg-white text-white" >.</div>
    <div className="row bg-dark">
      <div className="col-10 col-sm-10 mx-auto"><br></br>
      <h1 className="text-center text-white">A Message From CEO And CO-Founder</h1><br></br>
        <div className="card-group">
        <div className="col-6">
        <div className="card bg-dark">
          <img src="https://web.learncodeonline.in/static/media/hitesh-choudhary.68d14ebf.png" class="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-success">Hitesh Choudhary</h4>
            <p className="card-text text-white">CEO</p>
            <p className="card-text"><small class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sed maxime excepturi ex nisi exercitationem accusantium natus nesciunt adipisci error!. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ut cum itaque, id sed maxime nihil quisquam architecto qui magni!</small></p>
            <a href="https://instagram.com/hiteshchoudharyofficial" className="btn btn-success btn-block">KNOW MORE</a>
          </div>
        </div>
        </div>
        <div className="col-6">
        <div className="card bg-dark">
          <img src="https://web.learncodeonline.in/static/media/saksham-choudhary.c4e70ab0.png" class="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-success">Saksham Choudhary</h4>
            <p className="card-text text-white">CO-FOUNDER</p>
            <p className="card-text"><small class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus autem quidem eum porro reiciendis atque quos quis fuga adipisci?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt saepe unde provident. Nobis autem quod sed?</small></p>
            <a href="https://www.instagram.com/sakshamthecomputerguy/" className="btn btn-success btn-block">KNOW MORE</a>
          </div>
        </div>
        </div>
        </div>
    </div>
  </div>



  <section id="newsletter-area" className="bg-1">
  <div className="row my-1 bg-white text-white" >.</div>
  <div className="row bg-dark">
    <div className="col-10 col-sm-10 mx-auto"><br></br>      
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-heading text-center">
            <h4 className="text-info">Be the first to know</h4>
            <h1 className="text-white">About New Features</h1>
              <medium className="text-white">If you want to see, what's new going on then check our youtube channel or public newsfeed area. There is always something new cooking at LCO headquarters and training centers.</medium>
              <div className="row my-1 bg-dark text-dark" >.</div>

              <a href="https://courses.learncodeonline.in/newsfeed" className="btn btn-success">Public NewsFeed</a>
              <div className="row my-1 bg-dark text-dark" >.</div>

            </div>
        </div>
      </div>
    </div> 

  </section>
  <div className="row my-1 bg-white text-white" >.</div>

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default AboutPage
