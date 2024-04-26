import './Auth.css';
function Auth() {
    return (
      <div className="auth">
        <div className="authContainer">
            <form className="authForm">
                <div className="authDetails">
                <label htmlFor="email">Your email</label>
                <input className="authEmail" type="email" palceholder="Enter your email"/>
                <label htmlFor="password">Password</label>
        <input className="authPass" type="password" name="password" id="password" palceholder="Enter Password"/>
  <p>Forgot Password?</p>
  
  </div>
  <button className="authLogin">Login</button>
            
            <div className="authRegister">
<p>Dont have an account?</p>
<button className="authRegiButton">Register</button>
            </div>
            </form>
        </div>
    </div>
    );
  }
  
  export default Auth;