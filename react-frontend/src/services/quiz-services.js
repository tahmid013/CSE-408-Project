export function getQuestion(id){
    return fetch(`http://127.0.0.1:8000/api/questions/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getQuestions(){
    return fetch(`http://127.0.0.1:8000/api/questions/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}




export function AddQuestion(ques_type, category, question, answer, point){

    console.log(ques_type);
    console.log(category);
    console.log(category);
    console.log(question);
    console.log(point);

    return fetch('http://127.0.0.1:8000/api/questions/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({ques_type, category, question, answer, point}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}