import opportunities from "../data/opportunities.json"

export default function HomePageBody(props) {
    return (
        <section className="homepage-content">
            <CardContainer />
        </section>
    );
}

function CardContainer(props) {
    const allOpportunities = opportunities.map((opportunity, index) => (
        // TODO: Style this part later
        <div key={index} className="scroll-box-green card">
            <h3>{opportunity.title}</h3>
            <p><strong>Company:</strong> {opportunity.company}</p>
            <p><strong>Base Pay:</strong> {opportunity["base-pay"]}</p>
            <p>{opportunity.description}</p>
            <p><strong>Contact:</strong> {opportunity["contact-info"]}</p>
        </div>
    ));

    return (
        <div className="card-container">
            {allOpportunities}
        </div>
    );
}



