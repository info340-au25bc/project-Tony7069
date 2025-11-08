export default function EmptyPost() {
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
          <p>Try adding your own post!</p>
          <h2>
            <a href="post-position.html">+</a>
          </h2>
        </div>
      </section>

      <footer>
        <p>Copy right: ... Contact Info: ...</p>
      </footer>
    </div>
  );
}