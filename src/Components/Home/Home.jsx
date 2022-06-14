
import React, { useState } from "react";
import {Card, CardGroup} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home(){

    const quizList=useSelector((state)=>state.quizs)?.quizs
    return(
        <div id="home">
            <div className="container" style={{marginTop: "60px"}}>
                <CardGroup>
                    {
                        quizList?.map((item,i)=>(
                        <Card style={{padding: "20px"}}>
                            <Card.Img style={{ width: "100%", height: "auto", maxWidth: "120px", margin: "0 auto"}} variant="top" src={item?.imgSrc} />
                            <Card.Body>
                            <Card.Title>{item?.title}</Card.Title>
                            <Card.Text>
                               {item?.description}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/quiz" state={item} variant="primary">Attempt</Link>
                            </Card.Footer>
                        </Card>
                        ))
                    }
                </CardGroup>
            </div>
        </div>
    )
}

export default Home;