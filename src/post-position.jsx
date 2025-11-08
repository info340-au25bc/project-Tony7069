export function PostPosition() {
  return (
    <div className="post">
      <section className="navbar">
        <div className="homepage-nav-container">
          <h1>InternShipper</h1>
          <form className="search-bar">
            <input type="text" placeholder="Search..." />
          </form>
          <div className="post-home-button">
            <a href="index.html">
              <button>Home</button>
            </a>
          </div>
        </div>
      </section>

      <section className="post-content">
        <div className="post-box">
          <form className="Position">
            <label className="label-position" htmlFor="position">Position</label>
            <input id="position" type="text" name="position" placeholder="Position Title" />
          </form>

          <form className="Location">
            <label className="label-small" htmlFor="location">Location</label>
            <input id="location" type="text" name="location" placeholder="Location" />
          </form>

          <form className="BasePay">
            <label className="label-small" htmlFor="basepay">Base Pay</label>
            <input id="basepay" type="text" name="basepay" placeholder="Base Pay" />
          </form>

          <form className="Body">
            <label className="label-small" htmlFor="body">Description</label>
            <textarea id="body" name="body" className="body-textarea" />
          </form>

          <div className="post-button-container">
            <div className="left-actions">
              <button type="button" className="post-submit-button">Post</button>
              <a href="empty-post.html">
                <button type="button" className="post-cancel-button">Cancel</button>
              </a>
            </div>

            <form className="Tags">
              <label className="label-small" htmlFor="tags">Tags</label>
              <input id="tags" type="text" name="tags" placeholder="#Tags" />
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>Copy right: ... Contact Info: ...</p>
      </footer>
    </div>
  );
}