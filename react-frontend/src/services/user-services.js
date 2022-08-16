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