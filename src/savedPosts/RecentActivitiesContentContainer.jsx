import opportunities from "../data/opportunities.json";
import { getDatabase, ref, set as firebaseSet, get, onValue } from "firebase/database"
import { useState, useEffect } from "react";



export function RecentActivitiesContentContainer(props) {
    // TODO: this part could be refactor: 
    const [combinedOpportunities, setCombinedOpportunities] = useState([]);
    useEffect(() => {
        const db = getDatabase();
        const reference = ref(db, "Opportunities");
        // guard empty database and keep ids for consistency
        const forCleanup = onValue(reference, snapshot => {
            const objectData = snapshot.val() || {};
            const arrayData = Object.entries(objectData).map(([id, value]) => {
                const saved = value && (value.saved === true || value.saved === "true");
                return { id, ...value, saved }; // normalize saved to boolean
            });
            setCombinedOpportunities(arrayData);
        });
        return () => forCleanup();
    }, []);

    const savedOpportunities = combinedOpportunities.filter(opportunity => {
        return opportunity.saved === true; // saved is normalized boolean
    });

    const allOpportunities = savedOpportunities.map((opportunity, index) => {
        const {position, location, description} = opportunity;
        const tags = opportunity.tags || [];
        const basePay = opportunity["base-pay"];
        const contactInfo = opportunity["contact-info"];
        const allTags = tags.map((tag, innerIndex) => {
            return <li key={index + innerIndex}>{ tag }</li>
        });

        return (
            <div className="saved-card" key={index}>
                <div className="saved-card-content">
                    <h3 className="saved-title">{ position }</h3>
                    <p className="saved-meta"><strong>Location:</strong> { location }</p>
                    <p className="saved-meta"><strong>Base Pay:</strong> { basePay }</p>

                    <p className="saved-description">
                        <strong>Description: </strong>{ description }
                    </p>

                    <p className="saved-meta"><strong>Contact:</strong> { contactInfo }</p>

                    <div className="saved-tags-wrapper">
                        <p className="saved-tags-label"><strong>Tags:</strong></p>
                        <ul className="saved-tags">{ allTags }</ul>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className="recent-activities-content-container">
            <h1>Saved Posts</h1>
            <div className="saved-cards-grid">
                {allOpportunities}
            </div>
        </section>
    );
}