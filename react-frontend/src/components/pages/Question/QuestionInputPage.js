import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';
import { useNavigate } from "react-router-dom";


import { NotificationManager } from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { AddQuestion } from '../../../services/quiz-services';


export default function QuastionInputPage() {
  const [ques_type, setQues_type] = useState('');
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [image, setImage] = useState('');
  const [point, setPoint] = useState('');

  const { authData, setAuth } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    setImage(null);
    console.log("Adding question");
    const uploaded = await AddQuestion(
      ques_type,
      category,
      question,
      answer,
      point
    );
    if (uploaded) {
      NotificationManager.success("Question added successfully");
      navigate('/');
    }
    else {
      NotificationManager.error("Error adding question");
    }
  }


  return (


    <div className='clubinput'>
      <div>
        <h1>Add Question</h1>
        <form >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Question Type" variant="standard"
              onChange={e => setQues_type(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Category" variant="standard"
              onChange={e => setCategory(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Question" variant="standard"
              onChange={e => setQuestion(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Answer" variant="standard"
              onChange={e => setAnswer(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Point" variant="standard"
              onChange={e => setPoint(e.target.value)}
            />
          </Box>

          
          <div className="logging">
            <Button path_name='user' type='submit' onClick={handleSubmit}>
              Add Question
            </Button>
          </div>
        </form>
      </div>

    </div>
  );
}
