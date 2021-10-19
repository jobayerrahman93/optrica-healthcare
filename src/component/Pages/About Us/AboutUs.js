import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us mt-5 pt-5">
             <div className="container">
                <div className="row">
                    <div className="col-md-4" data-aos="fade-right" data-aos-duration="2000">
                        <img src="http://themetechmount.com/html/delmont/images/single-img-four.png" alt="" />
                    </div>
                    <div className="col-md-8" data-aos="fade-left" data-aos-duration="2000">
                        <h5 className="title2">WHAT WE DO</h5>
                        <h1 className="title1 py-3">We Have 25 Years Experience</h1>
                        <p className="offer py-2">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery</p>

                        <div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Our Mission
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img className="img-fluid" src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg" alt="" />
                                                </div>
                                                <div className="col-md-9">
                                               <span>
                                               Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
                                               </span>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Our Vision
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="row">
                                                <div className="col-md-3">
                                                    <img className="img-fluid" src="http://themetechmount.com/html/delmont/images/portfolio/post-two-1200x800.jpg" alt="" />
                                                </div>
                                                <div className="col-md-9">
                                                <span>
                                                Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
                                                </span>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Our Stratagies
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="row">
                                                <div className="col-md-3">
                                                    <img className="img-fluid" src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg" alt="" />
                                                </div>
                                                <div className="col-md-9">
                                                <span>
                                                Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;