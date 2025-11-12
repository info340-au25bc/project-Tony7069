// import { Header } from './Homepage/Header.jsx';
import { SpecialNav } from './Post-Position/SpecialNav.jsx';
import { RecentActivitiesContentContainer } from './savedPosts/RecentActivitiesContentContainer.jsx';

export default function SavedPosts(props) {
  return (
    <div className="recent-activities-page">
      <section className="navbar">
        <SpecialNav/>
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

      <RecentActivitiesContentContainer allAddedOpportunities={props.allAddedOpportunities} />
    </div>
  );
}