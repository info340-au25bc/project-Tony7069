import { SpecialNav } from "./Post-Position/SpecialNav";
import { useLocation } from "react-router-dom";

export function InfoPage(props) {
    const { state } = useLocation();

    return (
        <div className="info-page">
            <SpecialNav />

            <div className="info-main-section">
                <MainContent detail={state}    />
                <img src={state.img} alt="photo demonstration of working environment" />
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

                <p className="job-site"><strong>Official Site: </strong><a href={officalURL}>{officalURL}</a></p>

                <div className="job-tags">
                    {allTags}
                </div>
            </div>
        </div>
    )
}