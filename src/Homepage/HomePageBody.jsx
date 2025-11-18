// This JSON is AI generated. This JSON will be used solely for testing
import opportunities from "../data/opportunities.json";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router";

export default function HomePageBody(props) {
    return (
        <section className="homepage-content">
            <CardContainer allAddedOpportunities={props.allAddedOpportunities} enteredTag={props.enteredTag}/>
        </section>
    );
}

//modified to include search functionality and improved filtering
function CardContainer(props) {
    let combinedOpportunities = [...opportunities, ...(props.allAddedOpportunities || [])];

    const rawQuery = (props.enteredTag || '').trim();
    const query = rawQuery.replace(/^#/, '').toLowerCase();
    
    const filteredOpportunities = useMemo(() => {
        if (!query) return combinedOpportunities;

        return combinedOpportunities.filter(opportunity => {
            const tagsList = opportunity.tags || [];
            for (let i = 0; i < tagsList.length; i++) {
                const t = (tagsList[i] || '').toLowerCase().replace(/^#/, '');
                if (t === query || t.includes(query)) return true;
            }
            if (opportunity.position && opportunity.position.toLowerCase().includes(query)) return true;
            if (opportunity.description && opportunity.description.toLowerCase().includes(query)) return true;
            return false;
        });
    }, [combinedOpportunities, query]);

    const listToRender = filteredOpportunities;


    const allOpportunities = listToRender.map((opportunity, index) => {
        const {position, location, description, tags} = opportunity;
        const basePay = opportunity["base-pay"];
        const contactInfo = opportunity["contact-info"];
        const allTags = (tags || []).map((tag, innerIndex) => {
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



