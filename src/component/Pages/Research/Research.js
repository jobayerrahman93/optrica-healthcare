import React from 'react';
import './Research.css';

const Research = () => {
    return (
        <div className="research py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" data-aos="fade-right" data-aos-duration="2000">
                        <img className="img-fluid" src="http://themetechmount.com/html/delmont/images/blog/blog-one-1200x800.jpg" alt="" />

                        <h3 className="mt-3">How much aspirin to take for stroke</h3>
                        <p>Stroke often leads to widespread and long-lasting problems. However, stroke blogs can help your rehabilitation process by providing useful information, encouragement, and support from people also affected by stroke. We have picked the 10 best stroke blogs to assist with your recovery.</p>
                        <br />
                        <p>Stroke is a life-threatening condition that is caused when a part of the brain’s blood supply is cut off. Around 795,000Trusted Source individuals have a stroke each year in the United States, and it is the fifth leading cause of death.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="contact">Read More</button>
                            </div>
                            <div className="col-md-6">
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ps-5" data-aos="fade-left" data-aos-duration="2000">
                    <input type="search" placeholder="Search.." className="w-100 py-2" />
                    <h3 className="my-5">Categories</h3>
                      <div className="d-flex justify-content-between mb-3">
                        <a href="">Ayurveda</a>
                        <span>7</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <a href="">Cardiac</a>
                        <span>5</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <a href="">Health care</a>
                        <span>4</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <a href="">LifeStyle</a>
                        <span>6</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <a href="">Medical</a>
                        <span>5</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;