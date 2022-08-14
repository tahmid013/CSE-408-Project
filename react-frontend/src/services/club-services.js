export function getClub(id){
    return fetch(`http://127.0.0.1:8000/api/clubs/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getUser(id){
    return fetch(`http://127.0.0.1:8000/api/users/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getClubs(SearchTerm){
    return fetch(`http://127.0.0.1:8000/api/clubs/?search=${SearchTerm}`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getUsers(SearchTerm){
    return fetch(`http://127.0.0.1:8000/api/users/?search=${SearchTerm}`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getClubMembersByClubId(clubId){
    return fetch(`http://127.0.0.1:8000/api/clubuser/?club_id=${clubId}`)
    .then(data=>{
        return data.json();
    }).catch(e=>{
        console.log(e)
    })

}

export function getClubsFromUserId(userId){
    return fetch(`http://127.0.0.1:8000/api/clubuser/?user_id=${userId}`)
    .then(data=>{
        return data.json();

    }).catch(e=>{
        console.log(e)
    })

}

export function getClubMembersByUserId(clubId, userId){
    return fetch(`http://127.0.0.1:8000/api/clubuser/?club_id=${clubId}&user_id=${userId}`)
    .then(data=>{
        return data.json();
    }).catch(e=>{
        console.log(e)
    })
}

export function AddClub(name , about, institute){

    return fetch('http://127.0.0.1:8000/api/clubs/',{
       method: 'POST', 
       headers: {
            Accept: 'application/json',
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({name, about,institute}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
 }