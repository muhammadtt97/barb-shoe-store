import React from "react";

function SignIn() {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
