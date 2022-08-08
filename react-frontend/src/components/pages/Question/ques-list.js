import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../services/quiz-services';


function QuestionList() {

    const [questions, setQues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getQuestions().then(data => {
                setQues(data);
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


                {questions && questions.map(question => {
                    return <Link key={question.id} to={`/question/${question.id}`}>
                        <div className='eachClubBox'>
                            <div className="card">

                                <h1>{question.question}</h1>
                                <p>{question.answer}</p>
                                
                            </div>
                        </div>




                    </Link>
                })}

            </div>
        </>
    );
}

export default QuestionList;
