import "./SignIn.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  createUserWithAuth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

export default function SignIn() {
  const [user, setUser] = useState({});
  // const userValue = useContext(UserContext);    // not using context on state update beacuse we are using onAuthStateChanged in auth context

  const signUpFormHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   console.log(user);
  //   // console.log("User in context = ", userValue.currentUser);
  // }, [user]);

  const SignInWithGoogle = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    // console.log("user Context = ", userValue);
    // userValue.setCurrentUser(user);
    const response = await createUserDocumentFromAuth(user);
    // console.log("User in context = ", userValue.currentUser);
  };

  const signUpWithAuth = async (e) => {
    e.preventDefault();
    // console.log("sign Up Auth ", user.email, user.password);
    let data = await createUserWithAuth(user);
    // console.log("data in signWithAuth", data.user);
    const response = await createUserDocumentFromAuth(data.user);
    // console.log("response: ", response);
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <span className="form-heading-1">I have already an account</span>
        <span className="form-heading-2">
          Sign in with your email and password
        </span>
        <form className="form1">
          <label htmlFor="email-input" id="email-label">
            Email
          </label>
          <input type="text" id="email-input-google" />
          <label htmlFor="password-input">Password</label>
          <input type="password" id="password-input-google-signin" />
          <div className="button-container">
            <button className="form-button">Sign In</button>
            <button
              className="form-button google-btn"
              onClick={SignInWithGoogle}
            >
              Google Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="form-container">
        <span className="form-heading-1">I do not have an account</span>
        <span className="form-heading-2">
          Sign in with your email and password
        </span>
        <form className="form1">
          <label htmlFor="name-input" id="name-label">
            Display Name
          </label>
          <input
            type="text"
            id="name-input"
            name="name"
            onChange={signUpFormHandler}
          />
          <label htmlFor="email-input" id="email-label">
            Email
          </label>
          <input
            type="text"
            id="email-input"
            name="email"
            onChange={signUpFormHandler}
          />
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            onChange={signUpFormHandler}
          />
          <label htmlFor="confirm-password-input">Confirm Password</label>
          <input
            type="password"
            id="confirm-password-input"
            name="confirm-password"
            onChange={signUpFormHandler}
          />
          <div className="button-container">
            <button
              type="submit"
              onClick={signUpWithAuth}
              className="form-button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
