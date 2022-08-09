import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { AddClub } from '../../services/club-services';
import { Link } from "react-router-dom";

import { NotificationManager } from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { AddQuestion } from '../../services/quiz-services';
import { getQuestions } from '../../services/quiz-services';

export default function CategoryInputPage() {



  const [category_A, setCategoryA] = useState('');
  const [category_B, setCategoryB] = useState('');


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

  const [ques_type, setQues_type] = useState('');
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [image, setImage] = useState('');
  const [point, setPoint] = useState('');

  const fetcthAndChangeCategory = async e => {
    
  }



  const { authData, setAuth } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async e => {
    for(let i = 0; i<questions.length ;i++){
      //console.log(question.category);
      //console.log("\n");
      //console.log(category_A);
      let question_each = questions[i]
      if (question_each.category === category_A) {
        console.log(question_each.category);


        console.log("In handle submit");
        setImage(null);
        console.log("Adding question");
    
        
        console.log(question_each.ques_type);
        console.log(question_each.category);
        console.log(question_each.category);
        console.log(question_each.question);
        console.log(question_each.point);


        const uploaded =  await AddQuestion(
          question_each.ques_type,
          question_each.category,
          question_each.question,
          question_each.answer,
          question_each.point
        );
        if (uploaded) {
          NotificationManager.success("Question added successfully");
          navigate('/');
        }
        else {
          NotificationManager.error("Error adding question");
        }
 
      }
    }
    
   
  }


  return (


    <div className='clubinput'>
      <div>
        <h1>Add category</h1>
        <form >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Category 1" variant="standard"
              onChange={e => setCategoryA(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Category 2" variant="standard"
              onChange={e => setCategoryB(e.target.value)}
            />
          </Box>


          <div className="logging">
            <Button path_name='user' type='submit' onClick={handleSubmit}>
              change Question
            </Button>
          </div>
        </form>
      </div>

    </div>
  );
}
