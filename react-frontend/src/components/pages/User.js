import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';

export default function User() {
<<<<<<< HEAD
    const { authData } = useAuth();
    console.log(authData.user.profile.image);
=======
  const { authData } = useAuth();
  console.log(authData.user);
  console.log(authData.user.profile.image);
>>>>>>> 459a83dd462ba8315ad6de8b2766ee6960f94dbf

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
      </div>
     
    </div>
  );
}
