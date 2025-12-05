import { SpecialNav } from "./Post-Position/SpecialNav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";

export function InfoPage(props) {
    const db = getDatabase();
    const reference = ref(db, "Opportunities");
    const { position } = useParams();
    const decodedPositionTitle = decodeURIComponent(position);

    // console.log(position);
    
    const [opportunity, setOpportunity] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const snapshot = await get(reference);
            const raw = snapshot.val();
            const arrayData = Object.values(raw);

            const found = arrayData.find(
                (opp) => opp.position === decodedPositionTitle
            );

            setOpportunity(found);
        }
        fetchData();
    }, [decodedPositionTitle]);
    if (!opportunity) return null;
    return (
        <div className="info-page">
            <SpecialNav />
            <div className="info-main-section">
                <MainContent detail={opportunity}    />
                <img src={opportunity.img} alt="photo demonstration of working environment, AI generated!!!" />
            </div>
        </div>
    )
}

function MainContent({detail}) {
    const {position, location, description, tags, officalURL} = detail;
    const basePay = detail["base-pay"];
    const contact = detail["contact-info"];
    const allTags = tags.map((tag, innerIndex) => {
         return <span key={innerIndex}>{ tag }</span>
    });

    return (
        <div className="info-main-content">
            <h1 className="info-job-title">{position}</h1>

            <div className="info-other-content">
                <p className="job-pay-loc">{location} · <span className="job-pay">{basePay}</span></p>

                <p className="job-description">{description}</p>

                <p className="job-contact"><b>Contact:</b> {contact}</p>

                <p className="job-site"><strong>Official Site: </strong><a href={officalURL} target="_blank">{officalURL}</a></p>

                <div className="job-tags">
                    {allTags}
                </div>
            </div>
        </div>
    )
}