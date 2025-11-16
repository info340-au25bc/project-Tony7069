export default function LoginPage() {
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
            <input type="email" placeholder="email..." required />
            <input type="password" placeholder="password..." required />

            <div className="login-page-buttons">
              <button type="submit" className="login">Log In</button>
              <button type="submit" className="signup">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}