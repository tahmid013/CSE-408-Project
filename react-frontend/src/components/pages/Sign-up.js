import { Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from "react";
import { auth } from "../../services/user-services";
import { useAuth } from "../../hooks/useAuth";


export default function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { authData, setAuth } = useAuth();

    const handlerSubmit = async e => {
        e.preventDefault();
        const data = await auth({ username, password });
        setAuth(data);
    }
    const logout = () => {
        setAuth(null);
    }

    if (authData) {
        console.log(`authData true ${auth.token}`);
    } else {
        console.log("authData False");
    }
    return (
        <div className="signup">
            {!authData ?

                <form onSubmit={handlerSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Username" variant="standard"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="password" variant="standard" type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Box>
                    <div className="logging">
                        <Button color="primary" variant="contained" type='submit'>
                            Register
                        </Button>
                    </div>
                </form>
                :
                <div className="logging">
                    <p>{authData.user.username}</p>
                    <Button color="primary" variant="contained" type='submit' onClick={() => logout()}>
                        Logout
                    </Button>
                </div>


            }
        </div>
    )
}