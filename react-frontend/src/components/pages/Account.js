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


export default function Account() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');

    const { authData, setAuth } = useAuth();

    const passMatch = () => {
        return password === password2;
    }
    
    const handlerSubmit = async e => {
        e.preventDefault();
        
        
    }

    return(
        <div className="signup">
            <Link to="/">Back to Home</Link>
            <h1>Account</h1>
            
        </div>
    )
}