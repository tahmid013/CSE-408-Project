import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from "react";
import { auth } from "../../services/user-services";
import { useAuth } from "../../hooks/useAuth";
import {Link} from 'react-router-dom';
import {register} from '../../services/user-services';
import {useNavigate} from 'react-router-dom';

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');

    const { authData, setAuth } = useAuth();
    const navigate = useNavigate();

    const passMatch = () => {
        return password === password2;
    }
    
    const handlerSubmit = async e => {
        e.preventDefault();
        if(passMatch()){
            const regData = await register({
                username,
                email,
                password,
                profile: {
                    is_club_member: false,
                }
            })
            if(regData){
                const data = await auth({ username, password });
                setAuth(data);
                navigate('/account');
            }
        } else {
            console.log("passwords do not match");
        }
        
    }

    return(
        <div className="signup">
            <Link to="/">Back to Home</Link>
            <h1>SignUp</h1>
            <form onSubmit={handlerSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Username" variant="standard"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="E-mail" variant="standard"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Password" variant="standard" type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Confirm Password" variant="standard" type="password"
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </Box>
                    <div className="logging">
                        <Button color="primary" variant="contained" type='submit'>
                            Sign Up
                        </Button>
                    </div>
                </form>
        </div>
    )
}