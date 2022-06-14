
import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { changeScore } from "../../redux/reducers/users/users";
function Result() {
    const location = useLocation();
    const [result, setResult] = useState(location.state);
    const [score,setScore]=useState(null);

    const navigate = useNavigate();
    const dispatch=useDispatch();
    const users=useSelector((state)=>state.users)?.users;
    const currentUser=useSelector((state)=>state.users)?.currentUser
    console.log(users,currentUser,result)
    useEffect(()=>{
        let filterQuestions=result?.questions?.filter((item,i)=>{
            return item?.isAnsweredCorrectly===true;
        })
        setScore(filterQuestions?.length*20)
        let newArr=JSON.parse(JSON.stringify(users))
        let newCurrentUserArr=JSON.parse(JSON.stringify(currentUser))
        for(let i=0;i<newArr?.length;i++){
            console.log(i)
            for(let j=0;j<newArr[i]?.quiz?.length;j++){
                console.log(j)
                if(newArr[i]?.email===newCurrentUserArr?.userInfo?.email && newArr[i]?.quiz[j]?.name===result?.name){
                    console.log("newArr=",newArr[i])
                    newArr[i].quiz[j]={...newArr[i]?.quiz[j],score:filterQuestions?.length*20}
                    newCurrentUserArr.userInfo={...newArr[i]}
                }
            }
        }
        let payload={
            users:newArr,
            currentUser:newCurrentUserArr
        }
        dispatch(changeScore(payload))
    },[])
    return (
        <div className="container" style={{marginTop: "60px"}}>
            <Card style={{width:"100%", maxWidth:"500px", margin:"0 auto"}}>
                <Card.Header className="text-center">Result</Card.Header>
                <Card.Body>
                    <Card.Title>Your Score</Card.Title>
                    <Card.Text style={{fontSize: "44px",textAlign: "center",fontWeight: "bold"}}>
                        {score}/100
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <div className="d-flex justify-content-between">
                <Link to="/quiz" state={result} variant="primary">Restart</Link> 
                <Link to="/home" variant="primary">Start New Quiz</Link> 
                </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Result;