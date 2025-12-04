import { useNavigate } from "react-router-dom";

import { getDatabase, ref, set as firebaseSet, push } from "firebase/database";

export function InputForm(props) {
    const db = getDatabase();
    const reference = ref(db, "Opportunities");

    const handlePost = (event) => {
        event.preventDefault();
        const position = event.target.position.value;
        const location = event.target.location.value;
        const basePay = event.target.basepay.value;
        const description = event.target.body.value;
        const contactInfo = event.target.contact.value;
        const tags = parseTags(event.target.tags.value);
        const officalURL = event.target.officialSite.value;
        const img = "/office-img.png"; // TODO change this later

        const newOppotunityObject = {
            "position": position,
            "location": location,
            "base-pay": basePay,
            "description": description,
            "contact-info": contactInfo,
            "tags": tags,
            "officalURL": officalURL,
            "img": img,
            "saved": false
        }
        push(reference, newOppotunityObject);
        event.target.reset();

    }

    //modified to accept different tag formats
    function parseTags(tagString) {
        if (!tagString) return [];
        const normalized = tagString.replace(/,/g, ' ').trim();
        if (normalized.includes('#') && !/\s/.test(normalized)) {
            const parts = normalized.split('#').map(p => p.trim()).filter(Boolean);
            return parts.map(p => '#' + p.toLowerCase());
        }
        const parts = normalized.split(/\s+/).map(p => p.trim()).filter(Boolean);
        const tags = parts.map(p => {
            const t = p.replace(/^#/, '').toLowerCase();
            return '#' + t;
        });

        return tags;
    }

    const navigate = useNavigate();

    return (
        <section className="post-content">
            <form className="post-box" onSubmit={handlePost}>

                <label className="label-position" htmlFor="position">Position</label>
                <input id="position" type="text" name="position" placeholder="Position Title: Position @ Company" />

                <label className="label-small" htmlFor="location">Location</label>
                <input id="location" type="text" name="location" placeholder="Location: City, State" />

                <label className="label-small" htmlFor="basepay">Base Pay</label>
                <input id="basepay" type="text" name="basepay" placeholder="Base Pay: $number/hr" />

                <label className="label-small" htmlFor="body">Description</label>
                <textarea id="body" name="body" className="body-textarea" />

                <label className="label-small" htmlFor="contact">Contact-Info </label>
                <input id="contact" type="text" name="contact" placeholder="Contact info..." />

                <label className="label-small" htmlFor="official-site">Official Site</label>
                <input id="official-site" type="text" name="officialSite" placeholder="Official website URL..." />

                <div className="post-button-container">
                    <div className="left-actions">
                        <button type="submit" id="post-btn" className="post-submit-button">Post</button>
                        <button type="button" className="post-cancel-button" onClick={() => navigate("/create-post")}>Cancel</button>
                    </div>

                    <label className="label-small" htmlFor="tags">Tags</label>
                    <input id="tags" type="text" name="tags" placeholder="#Tags, Do not put space between tags. For example: '#tag1#tag2#tag3...'" />

                </div>
            </form>
        </section>
    )
}