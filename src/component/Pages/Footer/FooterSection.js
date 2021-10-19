import React from 'react';
import './FooterSection.css';
const FooterSection = () => {
    return (
        <div className="py-5 footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <h3>About Optrica</h3>
                        <p className="text-secondary mt-5">Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.</p>
                        <p className="mt-3 text-secondary"> We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <h3>Quick Links</h3>
                        <li className="mt-3"><a href="">Make Appointments</a></li>
                        <li><a href="">Before & After</a></li>
                        <li><a href="">Customer Treatments</a></li>
                        <li><a href="">Our Doctors Team</a></li>
                        <li><a href="">Departments Services</a></li>
                        <li><a href="">About our Clinic</a></li>
                        <li><a href="">Contact Us</a></li>
                    </div>

                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <h3>Our Services</h3>
                        <li className="mt-3"><a href="">Surgery</a></li>
                        <li><a href="">Orthopedics</a></li>
                        <li><a href="">Cardiology</a></li>
                        <li><a href="">Heart Disease</a></li>
                        <li><a href="">Lung Disease</a></li>
                        <li><a href="">Neurology</a></li>

                        <div>
                            <h3>Newsletter</h3>
                            <div className="input-group mb-3 w-50">
                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" type ="button" id="button-addon2">Submit</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </div >
    );
};

export default FooterSection;