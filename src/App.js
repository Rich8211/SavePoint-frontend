import React, { useState, useEffect, useReducer} from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/footer';
import UserContext from './context/UserContext';
import UserDataContext from './context/UserDataContext';
import SignUpModal from './components/modal/SignUp/SignUpModal';
import reducer from './reducer/reducer';
import Axios from 'axios';

import './App.scss';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [{ toggleModal }, dispatch] = useReducer(reducer, {
    toggleModal: "",
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: {
            "x-auth-token": token,
          },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{userData,setUserData}}>
            <UserDataContext.Provider  
              value={{
                toggleModal,
                dispatch,
                reducer,
              }}>
              {toggleModal &&
                <div className="overlay">
                  {
                    {
                      SignUp: <SignUpModal />,
                    }[toggleModal]
                  }
                </div>
              }
              <Navbar/>
              <Switch>
                <Route exact path="/" component={LandingPage} />
              </Switch>
              <Footer />
            </UserDataContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
