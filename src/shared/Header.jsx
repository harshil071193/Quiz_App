import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import "./Header.css"
import { Button } from "react-bootstrap";
import { userLogout } from "../redux/reducers/users/users";
function Header(){
    const currentUser=useSelector((state)=>state.users)?.currentUser;
    const dispatch = useDispatch();
    return(
        <div className="bg-primary">
        <div class="container">
            <nav class="navbar navbar-dark navbar-expand-lg">
                <a class="navbar-brand" href="#">Quiz App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav" style={{marginLeft:"auto"}}>
                        <li class="nav-item active">
                        <Link class="nav-link" style={{color:"#fff"}} to="/home">Home </Link>
                        </li>
                        <li class="nav-item">
                        {
                                currentUser?.isLoggedIn && (
                                    <Link class="nav-link" style={{color:"#fff"}} to="/scoreboard">Score Board</Link>
                                )
                            }
                        </li>
                        <li class="nav-item">
                        {
                                currentUser?.isLoggedIn && (
                                    <Button class="nav-link" onClick={(e) => {dispatch(userLogout())}} style={{color:"#fff"}} to="/scoreboard">Logout</Button>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default Header;