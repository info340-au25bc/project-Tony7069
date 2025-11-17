import { useState } from "react";
import users from "./data/users.json";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // setEmail(event.target.email.value);
    // setPassword(event.target.password.value);

    let userFound = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        userFound = users[i];
        break;
      }
    }

    if (userFound === null) {
      console.log("User not found");
      setEmail('');
      setPassword('');
      return;
    }

    if (userFound.password !== password) {
      console.log("Incorrect password");
      setEmail('');
      setPassword('');
      return;
    }

    console.log("Loging Success");
    console.log("log in as " + userFound.username);
    props.alterCurrentUser(userFound.username);
    navigate("/welcome");
  }

  return (
    <div className="login-signup">
      {/* This is for fun */}
      {/* <div className='video-background'>
        <video autoPlay muted loop playsInline>
          <source src="/DiscoveryPark.mp4" type="video/mp4" />
        </video>
      </div> */}

      <div className="input-container">
        <div className="input-container-content">
          <h2>Internshipper</h2>
          <form>
            <input type="email" placeholder="email..." required value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="password..." required value={password} onChange={(event) => setPassword(event.target.value)}/>

            <div className="login-page-buttons">
              <button type="button" className="login" onClick={handleLogin}>Log In</button>
              <button type="button" className="signup">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}