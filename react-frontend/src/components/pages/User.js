import React, {useState} from 'react';

export default function User(props) {

  return (
    <div>
      
      <img
        src={"http://127.0.0.1:8000" + props.user.profile.image}
        alt="avatar"
      />
      <h4>{props.user.username}</h4>
    </div>
  );
}
