import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Switch,Redirect, Navigate} from "react-router";
import Login from './Components/Login/Login.jsx';
import { useSelector } from 'react-redux';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
  const isLoggedIn=useSelector((state)=>state.users)?.currentUser?.isLoggedIn;
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={!isLoggedIn ? <Login /> :  <Navigate replace to="/home" />} />
          <Route exact path="/home" element={!isLoggedIn ?  <Navigate replace to="/" /> : <Home />} />
          <Route exact path="/quiz" element={!isLoggedIn ?  <Navigate replace to="/" /> :<Quiz />} />
          <Route exact path="/result" element={!isLoggedIn ?  <Navigate replace to="/" /> :<Result />} />
          <Route exact path="/scoreboard" element={!isLoggedIn ?  <Navigate replace to="/" /> :<ScoreBoard />}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
