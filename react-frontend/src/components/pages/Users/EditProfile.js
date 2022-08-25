import { Routes, Route } from "react-router-dom";
import QuestionList from "../Question/ques-list";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EmailIcon from "@mui/icons-material/Email";
import React, { useEffect, useState } from "react";
import { auth, Update } from "../../../services/user-services";
import { useAuth } from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { register } from "../../../services/user-services";
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';

function EditProfile() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bio_data, setBio] = useState("");


  const { authData, setAuth } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


  useEffect(() => {
    const setData = async () => {
      console.log(authData);
      console.log("inside useEffect");
      setFirstName(authData.user.first_name);
      setLastName(authData.user.last_name);
      setUsername(authData.user.username);
      setBio(authData.user.profile.bio);
      setEmail(authData.user.email);

      setPassword(authData.user.password);
      await sleep(1000)

      //console.log("first_name: " + first_name);
      //console.log("last_name: " + last_name);
      //console.log("password: " + password);

      setLoading(false);
    }
    setData();

  }, [authData]);




  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(username) ;
    console.log(password) ;
    console.log(email) ;
    console.log(first_name) ;
    console.log(last_name) ;
    console.log(bio_data) ;
    const regData = await Update(
      authData.user.id,
      {

        username: username,
        first_name:first_name,
        last_name:last_name,
        email:email,
        
        profile: {
          is_club_member: false,
          bio: bio_data
        },
      });
    if (regData) {

      navigate("/user");
    }

  };


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {!loading ?
        <>
          <div className="main" align='center'>
            <div>.</div>
            <h1>Edit Profile</h1>
            <form onSubmit={handlerSubmit} >
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Username"
                  defaultValue={username}
                  variant="standard"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="First Name"
                  defaultValue={first_name}
                  variant="standard"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Last Name"
                  defaultValue={last_name}
                  variant="standard"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <InfoIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Bio"
                  defaultValue={bio_data}
                  variant="standard"
                  onChange={(e) => setBio(e.target.value)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="E-mail"
                  defaultValue={email}
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              {<Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Change Password"
                  defaultValue="****"
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
                	</Box>}


              <div className="logging">
                <Button color="primary" variant="contained" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </div>

        </>
        :
        <>
        </>
      }
    </>
  );

}

export default EditProfile;
