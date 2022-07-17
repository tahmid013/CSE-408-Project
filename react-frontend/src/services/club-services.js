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