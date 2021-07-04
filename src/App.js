import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)

  const dispacth = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {

      if (userAuth) {
        // user is logged in
        dispacth(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        // user is logged out
        dispacth(logout())
      }
    })
  }, [dispacth])
  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )
      }

    </div>
  );
}

export default App;
