import { useState } from "react";
import users from "./data/users.json";
import { useNavigate } from "react-router-dom";

import { getDatabase, ref, get, push } from "firebase/database";

export default function SignupPage(props) {
  const navigate = useNavigate();
  const db = getDatabase();
  const reference = ref(db, "Users");

  const [alertMessage, setAlertMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function handleSignup(event) {
    event.preventDefault();
    // const allUser = get(reference).then((snapshot) => snapshot.val());
    const snapshot = await get(reference);
    const allUser = Object.values(snapshot.val());

    if (email === '') {
        setAlertMessage("Please enter a valid email.");
        return;
    }
    if (password === '') {
        setAlertMessage("Please enter a password.");
        return;
    }
    if (comfirmPassword === '') {
        setAlertMessage("Please confirm the password.");
        return;
    }
    if (firstName === '') {
        setAlertMessage("Please enter your first name.");
        return;
    }
    if (lastName === '') {
        setAlertMessage("Please enter your last name.");
        return;
    }

    for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].email === email) {
            setAlertMessage("Email already registered. Please use another email.");
            return;
        }
    }

    if (comfirmPassword !== password) {
        setAlertMessage("Passwords do not match. Please re-enter.");
        return;
    }

    const newUser = {
        "username": firstName,
        "email": email,
        "password": password,
        "img": "/",
        "firstName": firstName,
        "lastName": lastName,
        "preferredName": "",
        "region": "",
        "languages": ""
    }

    await push(reference, newUser);
    console.log("user with email: " + email + " registered successfully!");
    navigate("/");
  }


  // Ignore some of the classname below, especially the buttons, they are just for convinence styling
  return (
    <div className="login-signup">
      {/* This is for fun */}
      <div className='video-background'>
        <video autoPlay muted loop playsInline>
          <source src="/DiscoveryPark.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="input-container">
        <div className="input-container-content">
          <h2>Internshipper</h2>

          {alertMessage && (
            <div className="alert alert-danger" role="alert">
              {alertMessage}
            </div>
          )}

          <form>
            <input type="email" placeholder="email..." required value={email} onChange={(event) => setEmail(event.target.value)}/>
            <div className="firstname-lastname-input-container">
                <input type="email" placeholder="firstname..." onChange={(event) => setFirstName(event.target.value)}/>
                <input type="email" placeholder="lastname..." onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <input type="password" placeholder="password..." required value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input type="password" placeholder="comfirm password..." required value={comfirmPassword} onChange={(event) => setComfirmPassword(event.target.value)}/>
            <div className="login-page-buttons">
              <button type="button" className="login" onClick={handleSignup}>Sign Up</button>
              <button type="button" className="login" onClick={() => navigate("/")}>Back</button>
              <button type="button" className="signup" onClick={() => alert("This function is under construction")}>Need Assistant</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}