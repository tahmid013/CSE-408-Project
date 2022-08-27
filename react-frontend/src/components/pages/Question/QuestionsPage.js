import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
//import { Button } from "../../Button";
import { useLocation, useNavigate } from "react-router-dom";

import { NotificationManager } from "react-notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import SortIcon from "@mui/icons-material/Sort";
import {
  AddOptions,
  AddQuestion,
  AddQuiz,
  AddQuizQuestion,
  getCategories,
  getOptions,
  AddQuestionCategory,
} from "../../../services/quiz-services";
import { useGlobalContext } from "../../../context";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import QuestionList from "./ques-list";
import {
    getQuestions,
    getCategorizedQuestions,
  } from "../../../services/quiz-services";

function QuestionsPage() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const location = useLocation();
  var str = window.location.pathname.substring(0);

  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [cat_id, setCat_id] = useState(-1);
  const [cat_s, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkVal, setCheckVal] = useState(1);

  useEffect(() => {
    const getData = async () => { 
      setLoading(true);
      await getCategories().then((data) => {
        setCats(data);
        //setLoading(false);
        console.log(data);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    setLoading(false);
    //console.log(cat_s);
  }, [cat_s]);

  const handleChangeCategory = async (event) => {
    const {
      target: { value },
    } = event;
    setCategory(value);
    await sleep(500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("click");
    //setCheckVal(checkVal + 1);
    //navigate('/');
    const cat_det = await fetch(
      `http://127.0.0.1:8000/api/category/?name=${category}`
    ).then((data) => {
      return data.json();
    });
    //console.log(cat_det[0].id);
    //console.log(uploaded.id);
    setCat_id(cat_det[0].id);
    console.log(str);
    navigate(`${str}`);
  };

  return (
    <>
      {loading ? (
        <>
          <div>loading</div>
        </>
      ) : (
        <div className="main">
          <div>
            {/* Here is the code for multiselect dropdown */}
            {/* <select value={value} onChange={handleChangeBtn}>
              {cat_s && cat_s.map(c_s => {
                return <option value={`${c_s.name}`}>{c_s.name}</option>
              })
              } 
            </select> */}
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
              >
                {cat_s.map((c_s) => (
                  <MenuItem key={c_s.name} value={c_s.name}>
                    <ListItemText primary={c_s.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              size="medium"
              onClick={handleSubmit}
              startIcon={<SortIcon />}
            >
              Sort By Category
            </Button>
          </div>
          <Routes>
            <Route path="/" element={<QuestionList category_name ={category} category_id={cat_id} />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default QuestionsPage;
