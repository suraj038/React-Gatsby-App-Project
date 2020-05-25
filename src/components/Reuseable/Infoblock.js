import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4"> 
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-lg-12 mx-auto text-center">
                        <p className="lead text-black mb-4">
                        <strong>A place to learn latest programming courses with high quality videos.</strong>
                        </p>
                        <p className="lead text-white mb-4">
                        Courses are designed in a way that they are easy to follow, latest in market, provide you support for questions and can earn you a certificate.
                        </p>


                        <div className="row">
                        <div className="col-10 col-sm-12 mx-auto">
                    <div className="card-group">
                    
                    <div className="card bg-dark">
                      <img src="https://images.pexels.com/photos/4144533/pexels-photo-4144533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="card-title text-info">Online Courses</h4>
                        <p className="card-text text-white mb-5">Amazing library of latest programming courses. Comes with Certification and support to all questions.</p>
                        <button className="button button2 btn btn-small"><a href="https://courses.learncodeonline.in/learn">TRY NOW</a></button>
                      </div>
                    </div><br></br>
                    <div className="card bg-dark">
                      <img src="https://images.pexels.com/photos/893924/pexels-photo-893924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="card-title text-info">Offline Bootcamps</h4>
                        <p className="card-text text-white mb-5">Read to take work harder with our amazing trainers. It's going to be challenging but worth it! try it!</p>
                        <button className="button button2 btn btn-small"><a href="https://web.learncodeonline.in/bootcamps">JOIN NOW</a></button>
                      </div>
                    </div>
                    <div className="card bg-dark">
                      <img src="https://images.pexels.com/photos/3994051/pexels-photo-3994051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="card-title text-info">Coding Challenges</h4>
                        <p className="card-text text-white mb-5">Ready to test your learning skills? Try our FREE 30 days coding challenges with learncodeonline website</p>
                        <button className="button button2 btn btn-small"><a href="https://courses.learncodeonline.in/learn/account/signin">TAKE NOW</a></button>
                      </div>
                    </div>
                    <div className="card bg-dark">
                      <img src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="card-title text-info">Tedx Talk</h4>
                        <p className="card-text text-white mb-5">We share our ideas via Tedx platform and students love them. Don't miss this recent talk about Tech Universities</p>
                        <button className="button button2 btn btn-small"><a href="https://www.youtube.com/watch?v=q9YRq_trpGs">WATCH NOW</a></button>
                      </div>
                    </div>
                </div>
                </div>
                </div>

                        <Link to="/about/"><br></br>
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
