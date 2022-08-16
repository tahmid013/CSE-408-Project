import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions, getQuizzes } from '../../../services/quiz-services';


function QuizList() {

    const [quizzes, setQuizzes] = useState(null);
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
    

    
 
    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading....</h1>
    return (
        <>
            <div className='clubsList'>


                {quizzes && quizzes.map(quiz => {
                    return <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
                        <div className='eachClubBox'>
                            <div className="card">
                                <h2>{quiz.name}</h2>
                                <hr/>
                                <p>{quiz.about}</p>
                               
                                
                            </div>
                        </div>




                    </Link>
                })}

            </div>
        </>
    );
}

export default QuizList;
