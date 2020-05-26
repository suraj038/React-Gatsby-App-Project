import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/xeqraqba" method="POST">
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="mobile" id="mobile" placeholder="Your Mobile" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" type="text" name="description" id="description" placeholder="Your Message" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="file" name="upload" id="upload" placeholder="Your File" />
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>

<br></br>
<br></br>



















  </section>

    )
}
