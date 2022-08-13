import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';
import { useNavigate } from "react-router-dom";


import { NotificationManager } from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { AddOptions, AddQuestion, getCategories, getOptions } from '../../../services/quiz-services';
import { useGlobalContext } from '../../../context';


export default function QuastionInputPage({nav_path}) {
  const [ques_type, setQues_type] = useState('');
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [image, setImage] = useState('');
  const [point, setPoint] = useState('');

  const [op_1, setOption_1] = useState('');
  const [op_2, setOption_2] = useState('');
  const [op_3, setOption_3] = useState('');
  const [op_4, setOption_4] = useState('');


  const [matched, setMatched] = useState(false);

  const { optionSearchTerm } = useGlobalContext();

  const { authData, setAuth } = useAuth();
  const navigate = useNavigate();


  const [options, setopts] = useState('');

  const checkOptionMatched = ()  => {

      if(answer == op_1 || answer == op_2 || answer == op_3 || answer == op_4 ){
          setMatched(true);
          handleSubmit();
      }

      else{
          setMatched(false);
      }

  }

  const handleSubmit = async e => {

   
    const op_added = await AddOptions(
      op_1,op_2,op_3,op_4
    );

    console.log(op_added);
        
    console.log("Now opt id: "+op_added.id);
    // to be fetched option id first
    setImage(null);
    console.log("Adding question");
    const uploaded = await AddQuestion(
      ques_type,
      category,
      question,
      op_added.id,
      answer,
      image,
      point
    );
    if (uploaded) {
      NotificationManager.success("Question added successfully");
      localStorage.setItem('ques_set_id', uploaded.id);
      console.log(nav_path);
      navigate(`/${localStorage.getItem('nav-item')}`);
    }
    else {
      NotificationManager.error("Error adding question");
    }
  }


  const [answer_, setAnswer_] = useState(false);
  const toggleAnswer = () => setAnswer_(!answer_);

  const [ques_type_list, setques_type_list] = useState(['MCQ', 'Written', 'Fill In the Blanks']);

  const [cat_s, setCats] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getCategories().then(data => {
        setCats(data);
        setques_type_list(['MCQ', 'Written', 'Fill In the Blanks']);
        setLoading(false);
      })
    }
    getData();
  }, [])


  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChangeBtn = (e) => {
    
    setValue(e.target.value);
    setCategory(value);
    setQues_type(value);
    console.log(value);
  };
  


  return (


    <div className='clubinput'>
      <div>
        
        <form >
         
        <div>
            <select value={value} onChange={handleChangeBtn}>
                {ques_type_list && ques_type_list.map(l_s => {
                     return <option value={`${l_s}`}>{l_s}</option>
                })   
                }
            </select>
            
          </div>

          <div>
            <select value={value} onChange={handleChangeBtn}>
                {cat_s && cat_s.map(c_s => {
                     return <option value={`${c_s.name}`}>{c_s.name}</option>
                })   
                }
            </select>
            
          </div>

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

          { matched ? 
            <div></div>
            :
            <>
              <div>Please provide valid options</div>
              <div>Answer does not match with any of the options</div>
            </>
          }

          <div className="logging">
            <Button path_name='add_question' type='submit' onClick={checkOptionMatched}>
              Add Question
            </Button>
          </div>



        </form>


      </div>

    </div>
  );
}
