import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4"> 
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum est beatae dicta possimus aliquid autem voluptatibus suscipit nisi aspernatur, numquam blanditiis veritatis consequatur alias tempore in nulla dolor ducimus temporibus vero ut officia eius? Possimus totam odio amet eaque suscipit pariatur accusamus repellendus accusantium ipsa, iste eius quam! Sequi cumque saepe, hic dolore tempora rem aliquam ducimus voluptatum sapiente iusto!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-success btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
