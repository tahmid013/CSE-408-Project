import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../../../services/club-services";
import { useGlobalContext } from "../../../context";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { Checkbox, Chip, OutlinedInput } from "@mui/material";
import { Box } from "@mui/material";
import { AddClubUser } from "../../../services/quiz-services";
import { Button } from "../../Button";


export default function MemberList() {

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

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];


  const [members, setMembers] = useState(null);
  const [flaglist, setFlagList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { memberSearchTerm } = useGlobalContext();
  const [user, setUser] = useState([]);

  const handleChangeCategory = (event) => {
    const {
      target: { value },
    } = event;
    setUser(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const fetchMembers = async () => {
    setLoading(true);
    console.log("Printing ......");
    console.log(memberSearchTerm);
    await getUsers(memberSearchTerm).then((data) => {
      setMembers(data);

      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchMembers();

  }, [memberSearchTerm]);

  const add_1st_into_table = async (e) => {
    console.log("Adding club user");
    
    for (let i = 0; i < user.length; i++) {
      console.log(user[i]);
      const cat_det = await fetch(`http://127.0.0.1:8000/api/users/?username=${user[i]}`)
        .then(data => {
          return data.json();
        });
      console.log(cat_det[0].id);
      console.log(cat_det[0].username);
      const cat_added = await AddClubUser(localStorage.getItem("clubId"), cat_det[0].id);
      // console.log(cat_added);
    }


  }

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading....</h1>;
  return (
    <>
      {!loading ?
        <>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Add Multiple Members
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={user}
              onChange={handleChangeCategory}
              input={<OutlinedInput label="Category" />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Placeholder</em>;
                }

                return (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                );
              }}
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {members && members.map((member) => (
                <MenuItem key={member.username} value={member.username}>
                  <Checkbox checked={user.indexOf(member.username) > -1} />
                  <ListItemText primary={member.username} />
                </MenuItem>
              ))}

            </Select>
          </FormControl>
          <button onClick={add_1st_into_table}>Add all</button>

          {<div className="clubsList">
            {members &&
              members.map((member, index) => {
                return (
                  <>
                    <div className="eachClubBox" >
                      <div className="card">
                        <h1>{member.username}</h1>
                      </div>
                      {/* <button onClick={add_1st_into_table}>Add</button> */}
                    </div>
                  </>
                );
              })}
          </div>}
        </>
        :
        <>
          <div>Loading....</div>
        </>
      }
    </>
  );
}

