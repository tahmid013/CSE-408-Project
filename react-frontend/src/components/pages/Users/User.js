import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';
import { getClub } from '../../../services/club-services';

export default function User() {
  const { authData } = useAuth();
  console.log(authData.user);
  console.log(authData.user.profile.image);
  console.log(authData.user.profile.club);

  const [club, setClub] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getClub(authData.user.profile.club).then(data => {
          setClub(data);
      })
  }
  getData().catch(console.error);
  },[authData.user.profile.club]);

  console.log(club);

  return (
    <div className='user'>

      <img
        src={"http://127.0.0.1:8000" + authData.user.profile.image}

        alt="avatar"
      />
      <br/>
       <h4 className='userName'>{authData.user.username}</h4>
       {
        
          authData.user.profile.club  ?
          
          <>
          {authData.user.profile.is_club_admin ?
          <>
          <h4>Admin Member</h4>
          </>
          :
          <>
          <h4>Club Member</h4>
          </>

          }
          </>
          :
          <>
            <h4>Normal User</h4>
          </>
       }
       {authData.user.profile.club ? <h4>{club.name}</h4> : <h4>No Club</h4>}
      <Button onClick={() => {}}>Edit Profile</Button>
      <br/>
       <p>{authData.user.profile.bio}</p>
      {authData.user.profile.club ?
        
        <div className='add-btns'>
        
        <Button path_name='add_member' className='btns' buttonStyle='btn--fit' buttonSize='btn--small'>
          Add Member
        </Button>
        {
          authData.user.profile.is_club_admin ?
          <Button path_name='add_question' className='btns' buttonStyle='btn--fit' buttonSize='btn--small'>
          Add Question
        </Button>
        :
        null
        }
        
      </div>
      :
      <></>}
     
    </div>
  );
}
