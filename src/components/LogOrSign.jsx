import { useRef } from "react";
import { logo, logoName } from "../assets/icons";

const LogOrSign = () => {
  const container = useRef(null);

  const register = () => {
    if (container.current) {
      container.current.classList.add("active");
    }
  };
  const login = () => {
    if (container.current) {
      container.current.classList.remove("active");
    }
  };

  return (
    <div>
      <style>
        {`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
 .body {
  background-color: #FF7F50;
  background: linear-gradient(to right, #cbdaea,#FF7F50 );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 0 20px;
}
.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}
.container span {
  font-size: 12px;
}
.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}
.container button {
  background-color: #FF7F50;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}
.container button.hide {
  background-color: transparent;
  border-color: #fff;
}
.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}
.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}
.formContainer {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.signIn {
  left: 0;
  width: 50%;
  z-index: 2;
}
.container.active .signIn {
  transform: translateX(100%);
}
.signUp {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}
.container.active .signUp {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}
.socialIcons {
  margin: 20px 0;
}
.socialIcons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}
.toggleContainer {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}
.container.active .toggleContainer {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}
.toggle {
  background-color: #708090;
  height: 100%;
  background: linear-gradient(to right, #cbdaea, #708090);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.container.active .toggle {
  transform: translateX(50%);
}
.togglePanel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}
.toggleLeft {
  transform: translateX(-200%);
}
.container.active .toggleLeft {
  transform: translateX(0);
}
.toggleRight {
  right: 0;
  transform: translateX(0);
}
.container.active .toggleRight {
  transform: translateX(200%);
}
.boldText {
  font-weight: 600;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
  }
    .logo h1{
     font-size: 30px;
     font-weight: bold;
    }
  .logo2{
    display: none;
  }

  @media (max-width: 768px) {
        .logo{
           display: none;
         }
        .logo2{
           display: flex;
           justify-content: center;
           align-items: center;
         }
  }
            `}
      </style>
      <div className="body">
        <div>
          <div className="logo">
            <h1>Nike</h1>
            <img width={100} src={logo} alt="Nike Logo" />
          </div>
          <div className="logo2">
            <img src={logoName} alt="Nike Logo" width={100} />
          </div>
        </div>
        <div className="container" ref={container}>
          <div className="formContainer signUp">
            <form>
              <h1>Create Account</h1>
              <div className="socialIcons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign up</button>
            </form>
          </div>

          <div className="formContainer signIn">
            <form>
              <h1>Sign In</h1>
              <div className="socialIcons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email and password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className="toggleContainer">
            <div className="toggle">
              <div className="togglePanel toggleLeft">
                <h1 className="boldText">Welcome Back!</h1>
                <p className="boldText">
                  We're thrilled to have you here again. Let's get you back on
                  track with the best in footwear innovation.
                </p>
                <p>Don't have an account?</p>
                <button className="hide" onClick={login}>
                  Log In
                </button>
              </div>

              <div className="togglePanel toggleRight">
                <h1 className="boldText">Hello there!</h1>
                <p className="boldText">
                  Register with your personal details to get access to the best
                  features of the best, most comfortable, and cheapest shoes
                  available
                </p>
                <p>Already have an account?</p>
                <button className="hide" onClick={register}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
