import opportunities from "../data/opportunities.json"
import { useState } from "react";

export default function HomePageBody(props) {
    return (
        <section className="homepage-content">
            <CardContainer allAddedOpportunities={props.allAddedOpportunities}/>
        </section>
    );
}

function CardContainer(props) {
    const combinedOpportunities = [...opportunities, ...(props.allAddedOpportunities || [])];

    const allOpportunities = combinedOpportunities.map((opportunity, index) => {
        const {position, location, description, tags} = opportunity;
        const basePay = opportunity["base-pay"];
        const contactInfo = opportunity["contact-info"];
        const allTags = tags.map((tag, innerIndex) => {
            return <li key={index + innerIndex}>{ tag }</li>
        });

        const classNameAssignment = (index % 2) ? "scroll-box-green card" : "scroll-box-gray card";

        return (
            <div key={index} className= {classNameAssignment}>
                <h3>{ position }</h3>
                <p><strong>Location:</strong> { location }</p>
                <p><strong>Base Pay:</strong> { basePay }</p>
                <p><strong>Description: </strong>{ description }</p>
                <p><strong>Contact:</strong> { contactInfo }</p>
                <ul className="tags">
                    <p><strong>Tags:</strong></p>
                    { allTags }
                </ul>
            </div>
        )
    });

    return (
        <div className="card-container">
            {allOpportunities}
        </div>
    );
}



