import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nihil explicabo optio temporibus veritatis consequuntur consectetur aperiam quam odio harum molestias exercitationem veniam error maxime. Provident totam fuga, facilis incidunt eum eaque praesentium quos velit quae facere officia cupiditate aliquam. A, ad laborum perferendis suscipit architecto illum facere quis inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni nostrum quasi possimus velit consequuntur amet eaque repellendus corrupti rem maiores, error nisi voluptas, fugit voluptatem ex, accusamus mollitia ducimus! Soluta velit quia architecto nostrum consequuntur aliquid. Voluptates excepturi optio voluptatem repudiandae nisi esse, saepe quos possimus facilis ea alias animi quo consectetur commodi. Aut officiis sapiente deleniti necessitatibus nihil saepe eaque corporis porro nisi, ratione blanditiis voluptatum rerum, repudiandae, aperiam reiciendis quis libero maxime nam vero debitis molestias architecto facilis sequi! Suscipit sapiente mollitia recusandae itaque veritatis at, minus quia cumque asperiores? Doloribus dolorem quis eum minima ullam voluptatibus.
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just click photos</h5>
                                <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit in reiciendis aperiam ipsam voluptate nobis commodi doloremque corrupti laboriosam quasi corporis consequatur sed, rem incidunt optio repellendus, dolores aut nihil.</p>
                                <a href="#" className="btn btn-success btn-block">{heading}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
