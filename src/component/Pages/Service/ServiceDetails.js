import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const { serviceID } = useParams();
    const [serviceItem, setServiceItem] = useState({});

    useEffect(() => {

        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => {
                const itemDetail = data.find(item => item.id == serviceID);
                setServiceItem(itemDetail);

            })
    }, []);

    console.log(serviceItem);
    
    const {name,imgUrl,description}=serviceItem;

    return (
        <div className="service-details">
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">={name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Thank you for coming our hospital</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;