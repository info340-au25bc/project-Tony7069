import { Header } from './Homepage/Header.jsx';
export default function SavedPosts() {
  return (
    <div className="recent-activities-page">
      <section className="navbar">
        <Header/>
      </section>

      <section className="user-info-sidebar">
        <div className="user-image">
          <p>img</p>
        </div>
        <div className="sidebar-buttons-container">
          <button><h2>Profile</h2></button>
          <button><h2>Security & Privacy</h2></button>
          <button><h2>Tags</h2></button>
          <button><h2>Saved Post</h2></button>
          <button><h2>Recent Activities</h2></button>
        </div>
      </section>

      <section className="recent-activities-content-container">
        <h1>Saved Posts</h1>
        <div className="scroll-box-green">space reserved</div>
        <div className="scroll-box-gray">space reserved</div>
        <div className="scroll-box-green">space reserved</div>
        <div className="scroll-box-gray">space reserved</div>
        <div className="scroll-box-green">space reserved</div>
      </section>
    </div>
  );
}