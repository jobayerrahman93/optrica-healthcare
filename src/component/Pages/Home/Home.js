import React from 'react';
import Commited from '../Commited/Commited';
import Hero from '../Hero/Hero';
import MedicalResearch from '../MedicalResearch/MedicalResearch';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MedicalResearch></MedicalResearch>
            <Services></Services>
            <Commited></Commited>            
        </div>
    );
};

export default Home;