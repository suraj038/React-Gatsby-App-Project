import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'



const getCaty = items => {
    let holdItems = items.map(items => {
        return items.node.category
    })
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["all", ...categories]
    return categories
}

export default class Coursecart extends Component {
    constructor(props) {
        super(props)
        this.state= {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepitsafe = [...this.state.courses]

        if (category === "all") {
            this.setState(() => {
                return { mycourses: keepitsafe}
            })
        } else {
            let holdme = keepitsafe.filter(({ node }) => node.category === category)
            this.setState(() => {
                return { mycourses: holdme}
            })
        }
    }

    render() {
        // console.log(this.state.courses);
        
        return (
            <section className="py-5 bg-dark">
                <div className="conatiner text-white">
                    <Heading title="COURSES" />
                    <div className="row my-2 bg-white">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map((category, index) => {
                                    return (
                                        <button
                                            type="button"
                                            className="btn btn-info m-2 px-5"
                                            key={index}
                                            onClick={() => {
                                                this.catyClicked(category)
                                            }}
                                        >
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row mx-auto">
                        {
                            this.state.mycourses.map(({node}) => {
                                return(
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-2">
                                            <div className="d-flex">
                                                <h6 className="mb-0 text-white">{node.title}</h6>
                                                <h6 className="mb-0 text-success ml-4">$ {node.price}</h6>
                                            </div>
                                            <p className="text-white">
                                                <small>{node.description.description}</small>
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
