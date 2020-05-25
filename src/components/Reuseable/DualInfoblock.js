import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'


export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
            <div className="section-heading text-center">
            <h2 className="text-white">Our creative team</h2>
                <Heading title={heading} />
                <p><h5 className="text-white">Meet the people behind LearnCodeOnline.
                Super Cool team of super cool platform!</h5></p>
            </div>
                <div className="row">
                   
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://web.learncodeonline.in/static/media/hitesh-choudhary.68d14ebf.png" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Hitesh Choudhary</h5>
                                <p className="card-text text-white">Lead trainer and Video creator</p>
                                <a href="https://instagram.com/hiteshchoudharyofficial" className="btn btn-success btn-block">KNOW MORE</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-4">
                    <div className="card bg-dark">
                        <img src="https://web.learncodeonline.in/static/media/saksham-choudhary.c4e70ab0.png" class="card-img-top" alt="image goes here" />
                        <div className="card-body">
                            <h5 className="card-title text-success">Saksham Choudhary</h5>
                            <p className="card-text text-white">CO-FOUNDER</p>
                            <a href="https://www.instagram.com/sakshamthecomputerguy/" className="btn btn-success btn-block">KNOW MORE</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://instagram.fblr4-2.fna.fbcdn.net/v/t51.2885-19/s320x320/54511426_414269712462861_897167188656390144_n.jpg?_nc_ht=instagram.fblr4-2.fna.fbcdn.net&_nc_ohc=TCjdr2U2LKUAX8fCKne&oh=0a2daf46355905b9fc9588b7e4657b0a&oe=5EF59451" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Suraj Singh</h5>
                                <p className="card-text text-white">Full-Stack Web Developer</p>
                                <a href="https://www.instagram.com/surajsurya038/" className="btn btn-success btn-block">KNOW MORE</a>
                            </div>
                        </div>
                    </div>


                </div>

                <br></br>
                <div className="row">
                   
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Lissa Andy</h5>
                                <p className="card-text text-white">Android Developer</p>
                                <a href="https://web.learncodeonline.in/" className="btn btn-success btn-block">KNOW MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                    <div className="card bg-dark">
                        <img src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                        <div className="card-body">
                            <h5 className="card-title text-success">Rene Asmuse</h5>
                            <p className="card-text text-white">Offline Marketting</p>
                            <a href="https://web.learncodeonline.in/" className="btn btn-success btn-block">KNOW MORE</a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Andrea Los</h5>
                                <p className="card-text text-white">Team Manager</p>
                                <a href="https://web.learncodeonline.in/" className="btn btn-success btn-block">KNOW MORE</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    

            

    <div className="row my-4 bg-white text-white" >.</div>
    <div className="row bg-dark">
      <div className="col-10 col-sm-10 mx-auto"><br></br>      
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="section-heading text-center">
          <h4 className="text-info">Learn from website OR</h4>
        
          <h1 className="text-white">Use our mobile App</h1>
          <p className="text-white">Keep on learning, Keep on building amazing stuff.</p>
            
      <div className="block">
          <div className="d-flex justify-content-center h-100 gap">
              <a href="https://apps.apple.com/app/id1273049320" className="button btn-extra" data-abc="true"><i class="fa fa-apple"></i><span>Download from<br></br><em>apple store</em></span></a>
              <a href="https://play.google.com/store/apps/details?id=in.learncodeonline.lco&hl=en" className="button btn-extra yellow" data-abc="true"><i class="fa fa-play"></i><span>Download from<br></br><em>google play</em></span></a>
          </div>
      </div>

        <img src="https://web.learncodeonline.in/static/media/bottom-banner.0a08ab71.png" class="float-auto  bg-dark" alt></img>
      </div>
    </div>
  </div>
</div>
</section>



    )
}
