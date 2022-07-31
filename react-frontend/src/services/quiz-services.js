export function AddQuestion(ques_type, category, question, answer, image, point){
    return fetch('http://127.0.0.1:8000/api/questions/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({ques_type, category, question, answer, image, point}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}