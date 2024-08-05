import React from "react";

function SignUp() {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
