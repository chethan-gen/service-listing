import React from "react";

const ServiceCard = ({service}) =>{
    return(
        <div>
            <h3>{service.title}</h3>
            <p>Description:{service.description}</p>
        </div>
        
    )
}

export default ServiceCard;
