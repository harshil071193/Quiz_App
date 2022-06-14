import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/reducers/users/users";
import "./Login.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)?.users;
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        console.log(email, password, users);
        let user = users?.filter((item) => {
            return item?.email === email && item?.password === password
        })
        if (user?.length > 0) {
            console.log("user logged in")
            await dispatch(userLogin(user))
            navigate("/home");
        }
    }
    return (
        <div className="container">
            <div className="loginform">
                <Card>
                    <Card.Header>
                        <Card.Title>Login</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => { setEmail(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="footer-btn">    
                                <button type="submit" class="btn btn-primary" onClick={(e) => { login(e) }}>Submit</button>
                            </div>
                        </form>
                    </Card.Body>

                </Card>
            </div>

        </div>

    )
}

export default Login;