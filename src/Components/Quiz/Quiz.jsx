import { Button, ListGroup } from "react-bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Quiz() {
    const [question, setQuestion] = useState(0);
    const location = useLocation();
    const [data, setData] = useState(location.state);

    const handleActive = (question, index) => {
        for (let i = 0; i < data?.questions?.length; i++) {
            for (let j = 0; j < data.questions[i].options?.length; j++) {
                if (i === question && index === j) {
                    data.questions[i].options[j] = { ...data.questions[i].options[j], active: true }
                    if(data.questions[i].options[j]?.isCorrect){
                        data.questions[i]={...data.questions[i],isAnsweredCorrectly:true}
                    }
                    else{
                        data.questions[i]={...data.questions[i],isAnsweredCorrectly:false}
                    }
                }
                else if (i === question && index !== j) {
                    data.questions[i].options[j] = { ...data.questions[i].options[j], active: false }
                }
            }
        }
        setData({ ...data })
    }
    console.log(data)
    return (
        <div className="container" style={{ marginTop: "60px" }}>
            {
                <Card>
                    <Card.Header>Question {question + 1}.</Card.Header>
                    <Card.Body>
                        <Card.Title>{data?.questions[question]?.title}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                {
                                    data?.questions[question]?.options?.map((item, i) => (
                                        <ListGroup.Item key={i} onClick={(e) => handleActive(question, i)} className={`${item?.active === true && "active"} `} >{item?.title}</ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            <Button variant="primary" onClick={(e) => { question !== 0 ? setQuestion(question - 1) : setQuestion(0) }}>Previous</Button>
                            {
                                question === data?.questions?.length - 1 ?
                                <Link to="/result" state={data} variant="primary">Next</Link> 
                                :
                                <Button variant="primary" onClick={(e) => { question === data?.questions?.length - 1 ? setQuestion(data?.questions?.length - 1) : setQuestion(question + 1) }}>Next</Button>
                            }
                            
                            {/* <Link to="/result" variant="primary">Next</Link> */}
                        </div>

                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default Quiz;