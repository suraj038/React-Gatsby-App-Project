import React from "react"
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, title, subtitle, heroclass}) {
    return (
        <BackgroundImage
            className={heroclass}
            fluid={img}
        >
            <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
            <div>
                <h4 className="text-success text-center">{subtitle}</h4>
                <h3 className="text-dark text-center"><strong>Home to Learn Programming!</strong></h3>

                    <div class="spinner-grow text-muted"></div>
                    <div class="spinner-grow text-primary"></div>
                    <div class="spinner-grow text-success"></div>
                    <div class="spinner-grow text-info"></div>
                    <div class="spinner-grow text-warning"></div>
                    <div class="spinner-grow text-danger"></div>
                    <div class="spinner-grow text-secondary"></div>
                    <div class="spinner-grow text-dark"></div>
                    <div class="spinner-grow text-light"></div>
            </div>
        </BackgroundImage>
    )
}
