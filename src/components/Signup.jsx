import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        {/* <h1 className="logo">  
          <span className="quiz">Quiz</span><span className="tbpp">TBPP</span> */}
        {/* </h1> */}
        <h2>Create an account</h2>
        <p>Sign up to get started.</p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
          
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
          
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I agree to the terms and conditions</label>
          </div>

          <button className="signup-btn">Signup</button>
        </form>

        <p className="social-login-text">Or sign up with</p>
        <div className="social-buttons">
          <button className="facebook-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>
      </div>

      <div className="signup-image">
        <img
          src="https://pearlyarts.com/wp-content/uploads/2023/05/FREE-Graduation-Cap-Clipart-WM.png"
          alt="Graduation Cap"
        />
      </div>
    </div>
  );
}

export default Signup;
