import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [allServices,setAllServices]=useState([]);

    useEffect(()=>{

        fetch('/servicesData.json')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[]);
    // console.log(allServices);
    
    return (
        <div className="services">
            <div className="container">
                <h1 className="title1 my-5">Our Services</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        allServices.map(serviceItem=><Service key={serviceItem.id} serviceItem={serviceItem}></Service>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Services;