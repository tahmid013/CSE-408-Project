import {status} from '../utils';

export function auth(credentials){

     return fetch('http://127.0.0.1:8000/api/authenticate/',{
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify(credentials),
     }).then(resp => resp.json())
     .catch(e =>{
        console.log(e)
     })
}

export function register(userData){

   return fetch('http://127.0.0.1:8000/api/users/',{
      
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(userData),
   }).then(resp => resp.json())
   .catch(e =>{
      console.log(e)
   })
}
export function Update(id, userData){
   

   console.log(userData);
   return fetch(`http://127.0.0.1:8000/api/users/${id}/`,{
      
      method: 'PATCH', 
      headers: {
          'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(userData),
   }).then(resp => resp.json())
   .catch(e =>{
      console.log(e)
   })
}


// export function uploadAvatar(profileID,data){

//    return fetch(`http://127.0.0.1:8000/api/profile/${profileID}/`,{
//       method: 'PUT', 
//       body: data,
//    }).then(resp => resp.json())
//    .catch(e =>{
//       console.log(e)
//    })
// }

export function uploadAvatar(token, profileId, data) {
	return fetch(`http://127.0.0.1:8000/api/profile/${profileId}/`, {
		method: 'PUT',
		headers: {
			Authorization: `Token ${token}`,
		},
		body: data,
	})
		.then(status)
      .catch(e =>{
         console.log(e)
      })
}

export function uploadInfo(token, profileId, data) {
	return fetch(`http://127.0.0.1:8000/api/profile/${profileId}/`, {
		method: 'PUT',
		headers: {
			Authorization: `Token ${token}`,
		},
		body: data,
	})
		.then(status)
      .catch(e =>{
         console.log(e)
      })
}

export function AddLobby(user_id , name){

   return fetch('http://127.0.0.1:8000/api/lobby/',{
      method: 'POST', 
      headers: {
           Accept: 'application/json',
          'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify({user_id , name}),
   }).then(resp => resp.json())
   .catch(e =>{
      console.log(e)
   })
}
export function AddMultiplayer(player_1,player_2,cur_pt_1,cur_pt_2,name_1,name_2){

   return fetch('http://127.0.0.1:8000/api/multiplayer/',{
      method: 'POST', 
      headers: {
           Accept: 'application/json',
          'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify({player_1,player_2,cur_pt_1,cur_pt_2,name_1,name_2}),
   }).then(resp => resp.json())
   .catch(e =>{
      console.log(e)
   })
}
