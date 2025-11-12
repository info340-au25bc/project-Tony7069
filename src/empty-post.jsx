// import { Header } from './Homepage/Header.jsx';
import { SpecialNav } from "./Post-Position/SpecialNav";
import { useNavigate } from "react-router-dom";

export default function EmptyPost() {
  const navigate = useNavigate();
  return (
    <div className="post">
      <section className="navbar">
        <SpecialNav />
      </section>

      <section className="post-content">
        <div className="post-box">
          <p>Try adding your own post!</p>
          <h2>
            <a onClick={() => navigate("/position")}>+</a>
          </h2>
        </div>
      </section>

    </div>
  );
}