import { sliderClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getQuestions,
  getCategorizedQuestions,
  getQuestion,
} from "../../../services/quiz-services";

function QuestionList(category) {
  const [questions, setQues] = useState(null);
  const [catQuestions, setCatQues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quesIDs, setQuesIDs] = useState([]);
  const [finalID, setFinalID] = useState(-1);
  const [navigateVar, setNavigateVar] = useState();
  const [catUsed, setCatUsed] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  function createData(question, category) {
    return { question, category };
  }

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getQuestions().then((data) => {
        setQues(data);
        setLoading(false);
      });
    };

    getData();
    console.log("here");
  }, []);

  useEffect(() => {
    const getValues = async () => {
      setLoading(true);
      console.log(category.category_id);
      setFinalID(category.category_id);
      setCatQues([]);
      await sleep(500);
      //console.log(finalID);

      setLoading(false);
    };
    getValues();
  }, [category.category_id]);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const clubList = await Promise.all(
  //         group.map(async (member) => {
  //           const club = await getClub(member.club_id);
  //           console.log(club);
  //           return {
  //             id: club.id,
  //             name: club.name,
  //           };
  //         })
  //       );
  //       setClubList(clubList);
  //     };
  //     getData().catch(console.error);
  //   }, [group]);

  useEffect(() => {
    //console.log(finalID);
    const getCategorizeData = async () => {
      //setLoading(true);
      await getCategorizedQuestions(category.category_id).then((data) => {
        //setQuesIDs(data);
        data.map(async (item) => {
          const thisQues = await getQuestion(item.question_id).then((data) => {
            return data;
          });
          // console.log(thisQues);
          // console.log(category.category_name);
          setCatQues((catQuestions) => [
            createData(thisQues, category.category_name),
            ...catQuestions,
          ]);
        });
        sleep(500);
        setCatUsed(true);
        //setLoading(false);
      });
    };
    getCategorizeData();
    

    console.log(catQuestions);
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
      {loading ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          {catUsed ? (
            <>
              <h1>{category.category_name}</h1>
              <div className="clubsList">
                {catQuestions &&
                  catQuestions.map((question) => {
                    return (
                      <Link key={question.question.question_id} to={`/question/${question.question.question_id}`}>
                        <div className="eachClubBox">
                          <div className="card">
                            <p>{question.question.question_id}</p>
                            <h1>{question.question.question}</h1>
                            <button onClick={pressed}></button>

                            <p>{question.question.answer}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </>
          ) : (
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
          )}
        </>
      )}
    </>
  );
}

export default React.memo(QuestionList);
