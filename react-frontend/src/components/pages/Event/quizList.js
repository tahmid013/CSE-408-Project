import SelectInput from '@mui/material/Select/SelectInput';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchClubs } from '../../../hooks/fetch-clubs';
import { getClub } from '../../../services/club-services';
import { getQuestions, getQuizzes } from '../../../services/quiz-services';

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};


function QuizList() {

    const [quizzes, setQuizzes] = useState([]);
    const [club_name_List, setClubNameList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getQuizzes().then(data => {
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


    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>
    return (
        <>
            <div className='clubsList'>


                {quizzes && quizzes.map((quiz,index) => {
                    return <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
                        <div className='eachClubBox'>
                            <div className="card">
                                <h2>{quiz.name}</h2>
                                <hr />
                                <p>{quiz.about}</p>

                                <div>Hosted by: { club_name_List[index].name}</div>


                            </div>
                        </div>




                    </Link>
                })}

            </div>
        </>
    );
}

export default QuizList;
