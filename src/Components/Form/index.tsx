import "./style.css";
import logo from "../../assets/logo.svg";
import git from "../../assets/git.svg";
import Input from "../Input/Input";
import Button from "../Button";

export default function Form() {
  return (
    <form className="form">
      <header className="header">
        <img src={logo} alt="Logo" />
        <span>Dev&apos;s</span>
      </header>
      <div className="inputcontainer1">
        <Input 
            id="email" 
            type="text" 
            placeholder="Email" 
        />
      </div>
      <div className="inputcontainer2">
      <Input 
        id="password" 
        type="password" 
        placeholder="Password"
      />
      <div className="forgot">
        <a href="">FORGOT PASSWORD</a>
      </div>
      </div>
      <div className="button">
      <Button
       id="Login"
       name="Login"
      />
      </div>
        <div className="continue">
        <span>OR CONTINUE WITH</span>
      </div>
      <div className="button2">
      <Button
        id="Git"
        image={git}
        name=" GitHub"
      />
      </div>
        <div className="Terms">
        <a href="">Terms of Service</a>
        <a href=""> Privacy Policy</a>
      </div>
    </form>
  );
}
