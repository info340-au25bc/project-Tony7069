// This JSON is AI generated. This JSON will be used solely for testing
import opportunities from "../data/opportunities.json";
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
            return <span key={innerIndex}>{ tag }</span>
        });

        const companyName = extraCompanyName(position);
        const firstLetter = companyName.charAt(0).toUpperCase();
        const colorStyle = colorCombiner(index);

        return (
            <div key={index} className="intern-card">
                <div className="card-header" style={colorStyle}>
                    <div className="logo-circle">{firstLetter}</div>
                </div>
            
                <div className="card-body">
                    <h3 className="job-title">{position}</h3>

                    <p className="location">
                    Seattle, WA — <span className="pay">{basePay}</span>
                    </p>

                    <div className="description-box">
                        <p className="description">{description}</p>
                    </div>

                    <p className="contact-info">contact info: {contactInfo}</p>

                    <div className="tags">{allTags}</div>

                    <div className="cards-buttons-container">
                        <button className="info-btn">Info</button>
                        <button className="apply-btn">Apply</button>
                    </div>
                </div>
            </div>
        )

    });

    return (
        <div className="card-container">
            {allOpportunities}
        </div>
    );
}

function extraCompanyName(position) {
    const index = position.indexOf("@");
    if (index === -1) return "C";
    return position.substring(index + 1).trim();
}

function colorCombiner(index) {
    let colorOne = "#61ecabff";
    if (index % 2 !== 0) {
        colorOne = "#fff585ff";
    }
    let colorTwo = "#d4aefcff";
    if (index % 3 !== 0) {
        colorTwo = "#f8afafff";
    }
    let colorThree = "#a1cbffff";
    if (index % 4 !== 0) {
        colorThree = "#fcbee1ff";
    }
    return ({background: `linear-gradient(135deg, ${colorOne} 10%, ${colorTwo} 50%, ${colorThree} 100%)`})
}



