import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widget from "./Widgets";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user Logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header></Header>

      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widget></Widget>
        </div>
      )}
    </div>
  );
}

export default App;
