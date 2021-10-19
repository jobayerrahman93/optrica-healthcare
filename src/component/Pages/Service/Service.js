import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
   
    const { id, name, description, imgUrl } = props.serviceItem;

    return (
        <div className="service " data-aos="fade-up"
        data-aos-duration="3000">
            <div className="col ">
                <div className="card service-card">
                    <img src={imgUrl} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/serviceDetails/${id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;