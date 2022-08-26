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

export function getCategorizedQuestions(id){
    return fetch(`http://127.0.0.1:8000/api/question_category/?category_id=${id}`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getCategories(){
    return fetch(`http://127.0.0.1:8000/api/category/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}
export function getQuizzes(){
    return fetch(`http://127.0.0.1:8000/api/quiz/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}
export function getCategory(id){
    return fetch(`http://127.0.0.1:8000/api/category/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })

}




export function AddQuestion(ques_type, question,options, answer,image, point){

    console.log(ques_type);
    //console.log(category);
    //console.log(category);
    console.log(question);
    console.log(point);

    return fetch('http://127.0.0.1:8000/api/questions/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({ques_type, question,options, answer, point}),
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
export function getOption(id){
    return fetch(`http://127.0.0.1:8000/api/options/${id}/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function getOptions(){
    return fetch(`http://127.0.0.1:8000/api/options/`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e)
    })
}

export function AddQuiz(name,about, club,created_by){

    return fetch('http://127.0.0.1:8000/api/quiz/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({name,about, club,created_by}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}

export function AddQuestionCategory(question_id,category_id){
    return fetch('http://127.0.0.1:8000/api/question_category/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({question_id,category_id}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}

export function AddQuizQuestion(quiz_id,question_id){

    return fetch('http://127.0.0.1:8000/api/quiz_question/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({quiz_id,question_id}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}


export function getQuestionsIdOfQuiz(id){

    console.log("Id -> "+ id);
    return fetch(`http://127.0.0.1:8000/api/quiz_question/?quiz_id=${id}`)
    .then(data => {
        return data.json();
    }).catch(e => {
        console.log(e);
        
    })    
}

export function AddQuizTaken(user,quiz,score){

    return fetch('http://127.0.0.1:8000/api/quiztaken/',{
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({user,quiz,score}),
     }).then(resp => resp.json())
     .catch(e =>{
        console.log(e)
     })
}
    

export function AddClubUser(club_id,user_id){

    return fetch('http://127.0.0.1:8000/api/clubuser/',{
       method: 'POST', 
       headers: {
           'Content-Type' : 'application/json'
       }, 
       body: JSON.stringify({club_id,user_id}),
    }).then(resp => resp.json())
    .catch(e =>{
       console.log(e)
    })
}

