import React, {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { AddClub } from '../../services/club-services';
import { Link } from "react-router-dom";

import {NotificationManager} from 'react-notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';


export default function ClubsInputPage() {
    const [name, setClubname] = useState('');
    const [institute, setInstitution] = useState('');
    const [about, setDesc] = useState('');
    const [image, setImg] = useState('');

    const { authData, setAuth } = useAuth();
    const navigate = useNavigate();

    const handlerSubmit = async e => {
        e.preventDefault();
		setImg(null);
        console.log("In handleSubmit")
		const uploaded = await AddClub(
			name,
			about,
            institute,
            image
		);
		if (uploaded) {
			NotificationManager.success(
				'Club uploaded successfully'
			);
		} else {
			NotificationManager.error('Error, Club info was not correct');
		}
    }
  

  return (


    <div className='clubinput'>
      
            
                <div>
                <form onSubmit={handlerSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Club Name" variant="standard"
                            onChange={e => setClubname(e.target.value)}
                        />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Institution" variant="standard" 
                            onChange={e => setInstitution(e.target.value)}
                        />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Description" variant="standard" 
                            onChange={e => setDesc(e.target.value)}
                        />
                    </Box>
                    <div className="logging">
                        <Button path_name='signin' type='submit' onClick={handlerSubmit}>
                            Submit
                        </Button>
                    </div>
                    
                </form>
                
                </div>
               

    </div>
  );
}
