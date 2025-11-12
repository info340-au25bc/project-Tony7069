import { Link } from "react-router-dom";

export function InputForm(props) {

    const handlePost = (event) => {
        event.preventDefault();
        const position = event.target.position.value;
        const location = event.target.location.value;
        const basePay = event.target.basepay.value;
        const description = event.target.body.value;
        const contactInfo = event.target.contact.value;
        const tags = parseTags(event.target.tags.value);

        const newOppotunityObject = {
            "position": position,
            "location": location,
            "base-pay": basePay,
            "description": description,
            "contact-info": contactInfo,
            "tags": tags
        }

        props.addToList(newOppotunityObject);
        event.target.reset();

    }

    function parseTags(tagString) {
        const tags = [];
        let currentTag = "";

        for (let i = 0; i < tagString.length; i++) {
            const char = tagString[i];
            if (char === "#") {
                if (currentTag.length > 0) {
                    tags.push(currentTag);
                }
                currentTag = "#";
            } else {
                currentTag += char;
            }
        }

        if (currentTag.length > 0) {
            tags.push(currentTag);
        }

        return tags;
    }



    return (
        <section className="post-content">
            <form className="post-box" onSubmit={handlePost}>

                <label className="label-position" htmlFor="position">Position</label>
                <input id="position" type="text" name="position" placeholder="Position Title" />



                <label className="label-small" htmlFor="location">Location</label>
                <input id="location" type="text" name="location" placeholder="Location" />



                <label className="label-small" htmlFor="basepay">Base Pay</label>
                <input id="basepay" type="text" name="basepay" placeholder="Base Pay" />



                <label className="label-small" htmlFor="body">Description</label>
                <textarea id="body" name="body" className="body-textarea" />



                <label className="label-small" htmlFor="contact">Contact-Info </label>
                <textarea id="contact" name="contact" className="body-textarea" />


                <div className="post-button-container">
                    <div className="left-actions">
                        <button type="submit" id="post-btn" className="post-submit-button">Post</button>
                        <Link to="/create-post">
                            <button type="button" className="post-cancel-button">Cancel</button>
                        </Link>
                    </div>

                    <label className="label-small" htmlFor="tags">Tags</label>
                    <input id="tags" type="text" name="tags" placeholder="#Tags, Do not put space between tags" />

                </div>
            </form>
        </section>
    )
}