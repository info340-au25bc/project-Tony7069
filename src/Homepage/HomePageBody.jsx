// This JSON is AI generated. This JSON will be used solely for testing
import opportunities from "../data/opportunities.json";

import { useState } from "react";
import { useNavigate } from "react-router";

export default function HomePageBody(props) {
    return (
        <section className="homepage-content">
            <CardContainer allAddedOpportunities={props.allAddedOpportunities} enteredTag={props.enteredTag} filterOrSearch={props.filterOrSearch}/>
        </section>
    );
}

//modified to include search functionality and improved filtering
function CardContainer(props) {
    const navigate = useNavigate();

    function handleClick(opportunity) {
        navigate("/info", {state: opportunity});
    }

    let combinedOpportunities = [...opportunities, ...(props.allAddedOpportunities || [])];

    const rawInput = (props.enteredTag || '').trim();
    const input = rawInput.replace(/^#/, '').toLowerCase();

    let filteredOpportunities = [];
    if (props.filterOrSearch) {
        // Searching based on keywords in title and description
        filteredOpportunities = combinedOpportunities.filter(opportunity => {
                if (opportunity.position.toLowerCase().includes(input)) return true;
                if (opportunity.description.toLowerCase().includes(input)) return true;
                return false;
            });
    } else {
        // Searching based on tags
        filteredOpportunities = combinedOpportunities.filter(opportunity => {
            const tagsList = opportunity.tags;
            for (let i = 0; i < tagsList.length; i++) {
                if (tagsList[i].toLowerCase() === '#' + input) return true;
            }
            return false;
        });
    }

    let listToRender = combinedOpportunities;
    if (input !== '') {
        listToRender = filteredOpportunities;
    }

    const allOpportunities = listToRender.map((opportunity, index) => {
        const {position, location, description, tags} = opportunity;
        const basePay = opportunity["base-pay"];
        const contactInfo = opportunity["contact-info"];
        // const img = opportunity["img"];
        // const officalURL = opportunity["officalURL"];
        const allTags = (tags || []).map((tag, innerIndex) => {
            return <span key={innerIndex}>{ tag }</span>
        });

        const companyName = extraCompanyName(position);
        const firstLetter = companyName.charAt(0).toUpperCase();
        const colorStyle = colorCombiner(index);

        return (
            <div key={index} className="intern-card">
                <div className="card-header" style={colorStyle} onClick={() => handleClick(opportunity)}>
                    <div className="logo-circle">{firstLetter}</div>
                </div>
            
                <div className="card-body">
                    <h3 className="job-title" onClick={() => handleClick(opportunity)}>{position}</h3>

                    <p className="location">
                    {location} — <span className="pay">{basePay}</span>
                    </p>

                    <div className="description-box">
                        <p className="description">{description}</p>
                    </div>

                    <p className="contact-info">contact info: {contactInfo}</p>

                    <div className="tags">{allTags}</div>

                    <div className="cards-buttons-container">
                        <button className="save-btn">Save</button>
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
    let colorFour = "#9acef1ff"
    if (index % 5 !== 0) {
        colorFour = "#ffcea1ff";
    }

    return ({background: `linear-gradient(135deg, ${colorOne} 0%, ${colorTwo} 25%, ${colorThree} 50%, ${colorFour} 90%)`})
}



