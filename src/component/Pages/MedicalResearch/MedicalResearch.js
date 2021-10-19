import React from 'react';
import "./MedicalResearch.css";

const MedicalResearch = () => {
    return (
        <div className="medical">
            <div className="container">
                <div className="row py-5 ">
                    <div className="col-md-8 " data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
                        <h1>We’re Setting the Standards in Research & Clinical Care</h1>
                        <p className="des">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help. Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the USA with over 35 years of quality training and experience.</p>
                        <div className="row m-0">
                            <h3 className="pe-0">Optrica Special Features</h3>

                            <div className="col-md-6 pe-0">
                                <p>Adult Trauma Center</p>
                                <p>Birthing and Lactation Classes</p>
                                <p>ental and Oral Surgery</p>

                            </div>
                            <div className="col-md-6 pe-0">
                                <p>Children's Trauma Center</p>
                                <p>Heart and Vascular Institute</p>
                                <p>Children's Trauma Center</p>
                            </div>

                            <div className="w-100 pe-0">
                            <button className="view me-2 mb-2">VIEW MORE</button>
                            <button className="contact me-5">CONTACT US</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">
                        <img className="img-fluid" src="http://themetechmount.com/html/delmont/images/single-img-twel.jpg " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalResearch;