import React, { useEffect, useState } from "react";
import { useLocation, Router, Routes, Route, Link } from "react-router-dom";
import "../../../Apps/App.css";
import { getClub } from "../../../services/club-services";
import { getQuizzesTop3 } from "../../../services/quiz-services";
import { Button } from "../../Button";
import "../styles/QuizMainPage.css";

export default function QuizMainPage() {
  const location = useLocation();
  let l_p = location.pathname.substring(1);
  const mcqType = () => {
    localStorage.setItem("quiz_type", "MCQ");
  }
  const writtenType = () => {
    localStorage.setItem("quiz_type", "Written");
  }


  const [quizzes, setQuizzes] = useState([]);
  const [club_name_List, setClubNameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getQuizzesTop3().then(data => {
        setQuizzes(data);
        setLoading(false);
      })
    }
    getData();
  }, [])

  useEffect(() => {
    setLoading(true);
    const getData = async () => {

      const club_name_List = await Promise.all(
        quizzes.map(async (each_q) => {
          const club = await getClub(each_q.club);
          return {
            name: club.name,
          };
        })
      );
      setClubNameList(club_name_List);
      console.log(club_name_List);
      setLoading(false);
    };
    getData().catch(console.error);
  }, [quizzes]);



  return (
    <>
      <div id="body">
        <div className="sidebar-btns">
          <div>
            <Button
              path_name="clubspage"
              className="btns"
              buttonStyle="btn--fit"
              buttonSize="btn--large"
            >
              Club
            </Button>
          </div>

          <div>
            <Button
              path_name="questionspage"
              className="btns"
              buttonStyle="btn--fit"
              buttonSize="btn--large"
            >
              Archive
            </Button>
          </div>
          <div>
            <Button
              path_name="quiz-list"
              className="btns"
              buttonStyle="btn--fit"
              buttonSize="btn--large"
            >
              Event
            </Button>
          </div>
          <div>
            <Button
              path_name="leaderboard"
              className="btns"
              buttonStyle="btn--fit"
              buttonSize="btn--large"
            >
              Leaderboard
            </Button>
          </div>
          <div>
            <div className="w3-dropdown-hover">
              <div>
                <Button
                  path_name="quizmainpage"
                  className="btns"
                  buttonStyle="btn--fit"
                  buttonSize="btn--large"
                >
                  Quiz
                </Button>
              </div>
              <div className="w3-dropdown-content w3-bar-block w3-border">
                <Button
                  path_name="type_mcq/quizcategory"
                  className="btns"
                  buttonStyle="btn--fit"
                  buttonSize="btn--large"
                  onClick={mcqType}
                >
                  MCQ
                </Button>
                <Button
                  path_name="type_written/quizcategory"
                  className="btns"
                  buttonStyle="btn--fit"
                  buttonSize="btn--large"
                  onClick={writtenType}
                >
                  Written
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="main-body">
          <div id="upcoming-quiz">
          {quizzes && quizzes.map((quiz,index) => {
                    return <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
                        <div className='eachClubBox_2'>
                            <div className="card">
                                <h2>{quiz.name}</h2>
                                <hr />
                                <p>{quiz.about}</p>

                                <div>Hosted by: { club_name_List && club_name_List[index] && club_name_List[index].name}</div>

                            </div>
                        </div>

                    </Link>
                })}


          </div>
         
        </div>
      </div>
    </>
  );
}
