import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignOut,
} from "react-firebase-hooks/auth";
import { createContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);

  const clearInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      alert("You have successfully signed in!");
      clearInputs();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(email, password);
      alert("You have successfully signed up!");
      clearInputs();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("You have successfully signed in with Google!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      alert("You are sign out!");
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    clearInputs,
    handleSignUp,
    handleSignIn,
    handleSignInWithGoogle,
    handleSignOut,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
