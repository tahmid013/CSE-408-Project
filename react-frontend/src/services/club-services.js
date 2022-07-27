export function getClub(id){
    return fetch(`http://127.0.0.1:8000/api/clubs/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getClubs(){
    return fetch(`http://127.0.0.1:8000/api/clubs/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function AddClub(name , about, institute,image){

    return fetch('http://127.0.0.1:8000/api/clubs/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({name, about,institute, image}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
 }