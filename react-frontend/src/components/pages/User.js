import React, {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';

export default function User() {
    const { authData } = useAuth();

  return (
    <div className='signup'>
      
      <img
        src={"http://127.0.0.1:8000" + authData.user.profile.image}

        alt="avatar"
      />

      <Button path_name='club_input_form' className='btns' buttonStyle='btn--fit' buttonSize='btn--large'>
            Add Club
        </Button>

      <h4>{authData.user.username}</h4>
    </div>
  );
}
