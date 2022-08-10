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




export function AddQuestion(ques_type, category, question,options, answer,image, point){

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
       body: JSON.stringify({ques_type, category,options, question, answer, point}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}

export function AddOptions(op_1, op_2,op_3, op_4){

    

    return fetch('http://127.0.0.1:8000/api/options/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({op_1,op_2,op_3,op_4}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}