import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export default function User() {
  const { authData } = useAuth();
  console.log(authData.user);
  console.log(authData.user.profile.image);

  return (
    <div className='user'>

      <img
        src={"http://127.0.0.1:8000" + authData.user.profile.image}

        alt="avatar"
      />
      <br/>
       <h4 className='userName'>{authData.user.username}</h4>
       {authData.user.profile.is_club_admin ? <h4>Admin</h4> : <h4>User</h4>}
      <Button onClick={() => {}}>Edit Profile</Button>
      <br/>
       <p>{authData.user.profile.bio}</p>
      <div className='add-btns'>
        <Button path_name='club_input_form' className='btns' buttonStyle='btn--fit' buttonSize='btn--small'>
          Add Club
        </Button>
        <Button path_name='add_question' className='btns' buttonStyle='btn--fit' buttonSize='btn--small'>
          Add Question
        </Button>
        
      </div>
     
    </div>
  );
}
