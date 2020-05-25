import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'



export default class Bundles extends Component {
    constructor(props) {
        super(props)
        this.state= {
            bundles: props.bundles.edges,
            mybundles: props.bundles.edges,
        }
    }


    render() {
        // console.log(this.state.courses);
        
        return (
            <section className="py-5 px-5">
                <div className="conatiner">
                    <Heading title="Bundles" className=""/>
                    <div className="row mx-auto">
                        {
                            this.state.mybundles.map(({node}) => {
                                return(
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-2">
                                            <div className="d-flex">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success ml-4">$ {node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>Frontend + Backend Bundle Course</small>
                                            </p>
                                            <button 
                                                data-item-id={node.id}
                                                data-item-name={node.title}
                                                data-item-price={node.price}
                                                data-item-url="https://surajecomwebsite.netlify.app/"
                                                data-item-image={node.image.fixed.src}
                                                className="btn btn-success snipcart-add-item"
                                            >
                                                Join Now
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
