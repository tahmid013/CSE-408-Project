import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';
import { useNavigate } from "react-router-dom";


import { NotificationManager } from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { AddOptions, AddQuestion, AddQuiz, AddQuizQuestion, getCategories, getOptions } from '../../../services/quiz-services';
import { useGlobalContext } from '../../../context';


export default function QuastionInputPageLoop({ nav_path }) {
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

  const checkOptionMatched = () => {

    if(is_op1_ans == true){      
      console.log("Setting op1 as answer...." + answer);
    }
    else if(is_op2_ans == true){
      console.log("Setting op2 as answer...." + answer);
    }
    else if(is_op3_ans == true){

      console.log("Setting op3 as answer...." + answer);
    }
    else if(is_op4_ans == true){
      console.log("Setting op4 as answer...." + answer);
    }
    else{


      console.log("Setting answer to null...." + answer);
    }

    if (answer != null) {
      setMatched(true);
      handleSubmit();

    }

    else {
      setMatched(false);
    }

  }

  const handleSubmit = async e => {

    console.log("Options: " +op_1 + " " + op_2 + " " + op_3 + " " + op_4);
    console.log("Answer: " + answer);

    const op_added = await AddOptions(
      op_1, op_2, op_3, op_4
    );

    console.log(op_added);

    console.log("Now opt id: " + op_added.id);
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

      console.log(localStorage.getItem('clubId'));
      const quiz_added = await AddQuizQuestion(
        localStorage.getItem('quiz-info'), uploaded.id

      );



      navigate(`/club/${localStorage.getItem('clubId')}/host-event/new-page`);
    }
    else {
      NotificationManager.error("Error adding question");
    }
  }


  const [answer_, setAnswer_] = useState(false);
  const [is_op1_ans, setOp1_ans] = useState(false);
  const [is_op2_ans, setOp2_ans] = useState(false);
  const [is_op3_ans, setOp3_ans] = useState(false);
  const [is_op4_ans, setOp4_ans] = useState(false);

  const toggleAnswer = () => {
      console.log("Toggling answer " + answer_ );
      if (answer_ === false) {
         
         setAnswer_(true);
      }
      else {
          setAnswer_(false)
      }
    }
  const toggleOp1 = () => {
    console.log("Toggling op1 " + is_op1_ans);
    if (is_op1_ans === false) {
      setAnswer(op_1);
      setMatched(true);
      setOp1_ans(true);
    }
    else {

      setOp1_ans(false)
    }
  }

  const toggleOp2 = () => {
    console.log("Toggling op2 " + is_op2_ans);
    if (is_op2_ans === false) {
      setAnswer(op_2);
      setMatched(true);
      setOp2_ans(true);
    }
    else {

      setOp2_ans(false)
    }
  }
  const toggleOp3 = () => {
    console.log("Toggling op3 " + is_op3_ans);
    if (is_op3_ans === false) {
      setAnswer(op_3);
      setMatched(true);
      setOp3_ans(true);
    }
    else {
      setOp3_ans(false)
    }
  }
  const toggleOp4 = () => {
    console.log("Toggling op4 " + is_op4_ans);
    if (is_op4_ans === false) {
      setAnswer(op_4);
      setMatched(true);
      setOp4_ans(true);
    }
    else {
      setOp4_ans(false)
    }
  }


  


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

          {/*<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Answer" variant="standard"
              onChange={e => setAnswer(e.target.value)}
            />
          </Box>
            */}

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="Point" variant="standard"
              onChange={e => setPoint(e.target.value)}
            />
          </Box>

          <div>
            <input type="radio" value={answer_} name="option" onClick={toggleAnswer} />
            <span>Give Options</span>

          </div>
          {answer_ ?
            <form >
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <input type="checkbox" value={true} name="option_1" onClick={toggleOp1} />
                <TextField id="input-with-sx" label="Option 1" variant="standard"
                  onChange={e => setOption_1(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <input type="checkbox" value={true} name="option_2" onClick={toggleOp2} />
                <TextField id="input-with-sx" label="Option 2" variant="standard"
                  onChange={e => setOption_2(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <input type="checkbox" value={true} name="option_3" onClick={toggleOp3} />
                <TextField id="input-with-sx" label="Option 3" variant="standard"

                  onChange={e => setOption_3(e.target.value)}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <input type="checkbox" value={true} name="option_4" onClick={toggleOp4} />
                <TextField id="input-with-sx" label="Option 4" variant="standard"
                  onChange={e => setOption_4(e.target.value)}
                />
              </Box>

            </form>


            : <div></div>
          }

          {matched ?
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
