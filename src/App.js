import './App.css';
import React, { useState } from "react";
import firebase from "./services/firebase";
import { useHistory } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside";
import Footer from './components/Footer';

const App = () => {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState(null);

  const logOut = () => {
    firebase.auth().signOut().then(() => {
      setUserEmail(null);
      history.push("/");
    });
  }

  return (
    <div className="App">
      <Header
        logOut={logOut}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />
      <Main
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
