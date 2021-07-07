import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../particlesConfig.json";
import "./styles.css";

export default function Login(){
  return(
    <div className="main">
    <div style={{
      overflow: "hidden",
      position: "absolute",
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px",
      zIndex: "0",
      backgroundColor:"#112d4e"}}>
      <Particle params={particlesConfig} />
    </div>
    {/* login */}
    <div className="login-reg-panel">
        {/* shift to login */}
        <div className="login-info-box">
          <h2>Already have an account?</h2>
          <p>Welcome Back!!</p>
          <label id="label-register" htmlFor="log-reg-show">Login</label>
          <input type="radio" name="active-log-panel" id="log-reg-show" defaultChecked="checked" />
        </div>
        {/* shift to login */}
        {/* shift to register */}
        <div className="register-info-box">
          <h2>Don't have an account?</h2>
          <p>Welcome Aboard!!</p>
          <label id="label-login" htmlFor="log-login-show">Register</label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>
        {/* shift to register */}
        <div className="white-panel">
          <div className="login login-show">
            <form action="/src/components/Pages/Home.jsx" target="_blank" method="get">
              <p style={{textAlign: 'center'}}><img src={process.env.PUBLIC_URL + '/images/cp-tracker-logo-short-rounded.png'} alt="Site-Logo" style={{width: '18vh', height: '18vh'}} /></p>
              <h2 style={{textAlign: 'center'}}>LOGIN</h2>
              <input type="email" name="email" placeholder="Email" id="email" required />
              <input type="password" name="password" placeholder="Password" id="password" required />
              <input type="submit" defaultValue="Login" />
              <input type="reset" defaultValue="Reset" />
              <div className="forgot-password">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Forgot password?</a>
              </div>
            </form>
          </div>
          {/* login */}
          {/* register */}
          <div className="register-show">
            <form action="/src/components/Pages/Home.jsx" target="_blank" method="get">
              <h2 style={{textAlign: 'center'}}>REGISTER</h2>
              <input type="text" placeholder="Username (for cp-tracker)*" name="email" id="password" required />
              <input type="email" placeholder="Email*" name="email" id="password" required />
              <input type="password" placeholder="Password*" name="email" id="password" required />
              <input type="text" placeholder="Codechef Handle" name="codechef_handle" id="codechef_handle" />
              <input type="text" placeholder="Hackerrank Handle" name="hackerrank_handle" id="hackerrank_handle" />
              <input type="text" placeholder="Codeforces Handle" name="codeforces_handle" id="codeforces_handle" />
              <input type="text" placeholder="Leetcode Handle" name="leetcode_handle" id="leetcode_handle" />
              <input type="submit" defaultValue="Register" />
              <input type="reset" defaultValue="Reset" />
            </form></div>
          {/* register */}
        </div>
      </div>
    </div>
  )
  
}
















// import React from "react";
// import ParticlesBg from "particles-bg";
// import { Background } from "tsparticles/Options/Classes/Background/Background";
// export default function Login() {
//   return (
//     <>
//   <div style={{ textAlign: "center" }}>
//             <h2>Login Page</h2>
//         </div>
//         <div style={{backgroundColor:"#112d4e"}}>
//         <ParticlesBg color="#ffffff" num={100} type="cobweb" bg={{zIndex:"-1", width:"100%"}}/>
//         </div>
        
//     </>
//   )}

