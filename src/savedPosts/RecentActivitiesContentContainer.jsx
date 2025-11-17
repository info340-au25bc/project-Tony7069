import opportunities from "../data/opportunities.json";

export function RecentActivitiesContentContainer(props) {
    // TODO: this part could be refactor: 
    const combinedOpportunities = [...opportunities, ...(props.allAddedOpportunities || [])];

    const allOpportunities = combinedOpportunities.map((opportunity, index) => {
        const {position, location, description, tags} = opportunity;
        const basePay = opportunity["base-pay"];
        const contactInfo = opportunity["contact-info"];
        const allTags = tags.map((tag, innerIndex) => {
            return <li key={index + innerIndex}>{ tag }</li>
        });

        return (
            <div key={index}>
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
        <section className="recent-activities-content-container">
            <h1>Saved Posts</h1>
            {allOpportunities}
        </section>
    );
}