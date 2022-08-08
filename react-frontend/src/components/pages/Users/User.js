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
       <h4>{authData.user.username}</h4>
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
