import React, {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function User() {
    const { authData } = useAuth();

  return (
    <div className='signup'>
      
      <img
        src={"http://127.0.0.1:8000" + authData.user.profile.image}
        alt="avatar"
      />
      <h4>{authData.user.username}</h4>
    </div>
  );
}
