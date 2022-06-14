import React, { useState } from "react";
import { Accordion, Card, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ScoreBoard() {
    const users = useSelector((state) => state.users)?.users;
    return (
        <div className="container" style={{marginTop:"60px"}}>
        <Accordion defaultActiveKey="0">
            {
                users?.map((item, i) => (
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header>{item?.email}</Accordion.Header>
                        <Accordion.Body>
                            {
                                item?.quiz?.map((userQuiz,k)=>(
                                    <p key={k}>{userQuiz?.name}{" "}{userQuiz?.score}</p>
                                ))
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    </div>
    )
}

export default ScoreBoard;