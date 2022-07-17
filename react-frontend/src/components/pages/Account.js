//import { Button } from "@mui/material";
import { Button } from "../Button";
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
import { uploadAvatar } from "../../services/user-services";
import {NotificationManager} from 'react-notifications';


export default function Account() {

    

    const { authData, setAuth } = useAuth();
    const [image, setImage] = useState('');

    // const uploadFile = async (e) => {
    //     e.preventDefault();
    //     const uploadData = new FormData();
    //     uploadData.append('image', image, image.name);
    
    //     console.log(uploadData);
    //     const profileData = await uploadAvatar(authData.user.profile.id ,uploadData);
        
    // }

    const uploadPhoto = async (e) => {
		e.preventDefault();
		const uploadData = new FormData();
		uploadData.append('image', image, image.name);

		const uploaded = await uploadAvatar(
			authData.token,
			authData.user.profile.id,
			uploadData
		);
		if (uploaded) {
			NotificationManager.success(
				'Image uploaded successfully'
			);
		} else {
			NotificationManager.error('Error, image was not correct');
		}
	};

    return(
        <div className="signup">
            <Link to="/">Back to Home</Link>
            <h1>Account</h1>
            <form onSubmit={uploadPhoto}>
                <label>
                    <p>Upload Avatar</p>
                    <TextField type='file' onChange={(e) => setImage(e.target.files[0])} />
                </label>
                <Button type="submit" path_name="user" buttonSize="btn--medium" buttonStyle="btn--primary">Upload</Button>
            </form>
            
        </div>
    )
}