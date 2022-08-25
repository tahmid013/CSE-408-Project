import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getQuestions,
  getCategorizedQuestions,
} from "../../../services/quiz-services";

function QuestionList(category) {
  const [questions, setQues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quesIDs, setQuesIDs] = useState([]);
  const [finalID, setFinalID] = useState(-1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getQuestions().then((data) => {
        setQues(data);
        //setLoading(false);
      });
    };

    getData();
  }, []);

  useEffect(() => {
    setLoading(false);
    console.log(category.category_id);
    setFinalID(category.category_id);
    console.log(finalID);
  }, [category]);

  //   useEffect(() => {
  //     const getCategorizeData = async () => {
  //       setLoading(true);
  //       await getCategorizedQuestions(category.category_id).then((data) => {
  //         setQuesIDs(data);
  //         setLoading(false);
  //       });
  //     };

  //     if (category.category_id != -1) {
  //         getCategorizeData();
  //         setFinalIDs(quesIDs);
  //         console.log(finalIDs);
  //       //setQuesIDs([1]);
  //     }
  //     console.log(category.category_id);
  //   }, [category]);

  const [btnpressed, SetPressed] = useState(false);
  const pressed = () => {
    SetPressed(true);
  };

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading....</h1>;
  return (
    <>
      <div className="clubsList">
        {questions &&
          questions.map((question) => {
            return (
              <Link key={question.id} to={`/question/${question.id}`}>
                <div className="eachClubBox">
                  <div className="card">
                    <p>{question.id}</p>
                    <h1>{question.question}</h1>
                    <button onClick={pressed}></button>

                    <p>{question.answer}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default QuestionList;
