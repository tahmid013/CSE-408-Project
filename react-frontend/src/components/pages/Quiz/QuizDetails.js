import React, { useState, useEffect,useRef } from 'react';
import { Link , useParams, useLocation} from 'react-router-dom';
import { Button } from '../../Button';
import {getCategory} from '../../../services/quiz-services';


function QuizDetails() {
    var str = window.location.pathname.substring(1);
    const {categoryID} = useParams();
    console.log(categoryID)

    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('');

    // const useIsMounted = () => {
    //     const isMounted = useRef(false);
    //     useEffect(() => {
    //       isMounted.current = true;
    //       return () => isMounted.current = false;
    //     }, []);
    //     return isMounted;
    //   };

    // const isMounted = useIsMounted();

    // useEffect(() => {
    //     const getData = async () => {
    //         setLoading(true);
    //         await getCategory(categoryID).then(data => {
    //             setCategory(data);
                
                
    //         })
    //     }
    //     getData().catch(console.error);
    //     setLoading(false);
    // }, [])

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getCategory(categoryID).then(data => {
                setCategory(data);
            })
        }
        getData().catch(console.error);
        
    },[])

    useEffect(() => {
        setLoading(false);
    },[category])



    return (
        <>
        { loading && category ? 
            <>
                <div>Loading...</div>
            </>
             :
            <>
            <div className='clubsList'>

                        <div className='eachClubBox'>
                            <div className="quiz">
                                <div className='left-cont'>
                                
                                    <img src={window.location.origin + "/images/category/cat_"+`${category.id}`+".png"} alt= "Quiz Category" className="cards__item__IMG"/>
                                    <h2 className=''>{category.name}</h2>
                                    <p className='desc-quiz'> {category.about} </p>
                                    <p className="title-quiz">Football Bloody Hell - Sir Alex Farguson</p>
                                </div>
                                <div className='right-cont'>
                                        
                                    <p className='btn-Practice'><Button path_name={`${str}/practice`}  buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Practice</Button></p>

                                    <p className='btn-Single'><Button  path_name={`${str}/single`} buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Single Player</Button></p>
                                    <p className='btn-Double'><Button  path_name={`${str}/multi_lobby`}  buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>Multi Player</Button></p>
                                    <p className='btn-leader'><Button buttonStyle = 'btn--primary' buttonSize = 'btn--medium'>LeaderBoard</Button></p>
                                </div>
                            </div>
                        </div>





                

            </div>
            </> }       
        </>
    );
}

export default QuizDetails;
