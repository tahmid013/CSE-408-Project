export function getClub(id){
    return fetch(`http://127.0.0.1:8000/api/clubs/${id}/`)
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