import { Button } from "../Button";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import React, { useState } from "react";
import { auth } from "../../services/user-services";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Account from "./Account";
import User from "./User";


export default function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { authData, setAuth } = useAuth();
    const navigate = useNavigate();

    const handlerSubmit = async e => {
        e.preventDefault();
        const data = await auth({ username, password });
        setAuth(data);
    }
    const logout = () => {
        setAuth(null);
    }

    const goToAccount = () => {
        navigate('/account');
    }

    const goToUser = () => {
        navigate('/user', { props: authData } );
    }

    if (authData) {
        console.log(`authData true ${auth.token}`);
    } else {
        console.log("authData False");
    }
    return (
        <div className="login">
            {!authData ?
                <div>
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
                        <Button path_name='signin' type='submit' onClick={handlerSubmit}>
                            Login
                        </Button>
                    </div>
                    
                </form>
                <Link to ={'/signup'}>Don't have an account? Sign Up</Link>
                </div>
                :
                // <div className="logging">
                //     <User user={authData.user} />
                //     <Button color="primary" variant="contained" type='submit' onClick={() => logout()}>
                //         Logout
                //     </Button>
                    
                // </div>
                <div>
                    <h4>You have successfully logged in!</h4>
                    <Button path_name='user'>Go to User</Button>
                    <br/>
                    <Button path_name='signin'  onClick={() => logout()}>
                        Logout
                    </Button>

                </div>


            }
        </div>
    )
}