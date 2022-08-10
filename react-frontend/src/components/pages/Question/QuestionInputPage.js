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
  const [options, setOptions] = useState('');

  const [op_1, setOption_1] = useState('');
  const [op_2, setOption_2] = useState('');
  const [op_3, setOption_3] = useState('');
  const [op_4, setOption_4] = useState('');



  const { authData, setAuth } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    setImage(null);
    setOptions(null);
    console.log("Adding question");
    const uploaded = await AddQuestion(
      ques_type,
      category,
      question,
      options,
      answer,
      image,
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


  const [answer_, setAnswer_] = useState(false);
  const toggleAnswer = () => setAnswer_(!answer_);

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

          <div>
            <input type="radio" value={true} name="option" onClick={toggleAnswer} />
            <span>Give Options</span>

          </div>
          {answer_ ?
            <form >
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-with-sx" label="Option 1" variant="standard"
                  onChange={e => setOption_1(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-with-sx" label="Option 2" variant="standard"
                  onChange={e => setOption_2(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-with-sx" label="Option 3" variant="standard"
                  onChange={e => setOption_3(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField id="input-with-sx" label="Option 4" variant="standard"
                  onChange={e => setOption_4(e.target.value)}
                />
              </Box>

            </form>


            : <div>You said no! </div>
          }


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
