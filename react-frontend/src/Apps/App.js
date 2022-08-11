
import React from 'react';
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../components/pages/Mains/Navbar';
import Home from '../components/pages/Mains/Home';
import About from '../components/pages/Mains/About';
import SignUp from '../components/pages/Users/Sign-up';
import SignIn from '../components/pages/Users/Sign-in';
import QuizMainPage from '../components/pages/Quiz/QuizMainPage';
import Features from '../components/pages/Mains/Features';
import HowWorks from '../components/pages/Mains/HowWorks';
import DemoGuideVideo from '../components/pages/Mains/DemoGuideVideo';
import Category from '../components/pages/Mains/Category';
import Account from '../components/pages/Users/Account';
import User from '../components/pages/Users/User';
import { AuthProvider } from '../hooks/useAuth';
import ClubsPage from '../components/pages/Club/ClubsPage';
import SinglePlayer from '../components/pages/Quiz/SinglePlayer';
import SinglePlayerWritten from '../components/pages/Quiz/SinglePlayerWritten';
import MultiPlayer from '../components/pages/Quiz/MultiPlayer';
import MultiPlayerWritten from '../components/pages/Quiz/MultiPlayerWritten';
import Practice from '../components/pages/Quiz/Practice';
import ClubsInputPage from '../components/pages/Club/ClubsInputPage';
import QuizDetails from '../components/pages/Quiz/QuizDetails';
import ResultSingle from '../components/pages/Quiz/ResultSingle';
import QuestionInputPage from '../components/pages/Question/QuestionInputPage';
import QuestionsPage from '../components/pages/Question/QuestionsPage';


const App = () =>  {

   const user = JSON.parse(localStorage.getItem('quizz-user'));

    return (
      <>
    
        <Router> 
        <AuthProvider user = {user}>
        <Navbar/>
        <Routes>
          <Route exact path = "/"  element = {<Home/>} />
          <Route path = "/howitworks"  element = {<HowWorks/>} />
          <Route path = "/features"  element = {<Features/>} />
          <Route path = "/about"  element = {<About/>} />
          <Route path = "/account"  element = {<Account/>} />
          <Route path = "/signup"  element = {<SignUp/>} />
          <Route path = "/signin"  element = {<SignIn/>} />
          <Route path = "/quizmainpage"  element = {<QuizMainPage/>} />
          <Route exact path = "/type_mcq/quizcategory"  element = {<Category/>} />
          <Route exact path = "/type_written/quizcategory"  element = {<Category/>} />
          <Route exact path = "/type_fill/quizcategory"  element = {<Category/>} />

          <Route path = "/demo"  element = {<DemoGuideVideo/>} />
          <Route exact path = "/clubspage"  element = {<ClubsPage/>} />
          <Route exact path = "/questionspage"  element = {<QuestionsPage/>} />
          <Route exact path = "/club_input_form"  element = {<ClubsInputPage/>} />
          <Route exact path = "/quizmainpage/single"  element = {<SinglePlayer/>} />
          <Route exact path = "/quizmainpage/multi"  element = {<MultiPlayer/>} />

          <Route exact path = "/add_question" element={<QuestionInputPage />} />
          
          <Route exact path = "/type_mcq/quizcategory/:categoryID" element = {<QuizDetails/>}/>  
          <Route exact path = "/type_written/quizcategory/:category" element = {<QuizDetails/>}/>  
          <Route exact path = "/type_fill/quizcategory/:category" element = {<QuizDetails/>}/>  

          <Route exact path = "/type_mcq/quizcategory/:category/practice" element = {<Practice/>}/>
          <Route exact path = "/type_written/quizcategory/:category/practice" element = {<Practice/>}/>  
          <Route exact path = "/type_fill/quizcategory/:category/practice" element = {<Practice/>}/>  

          <Route exact path = "/type_mcq/quizcategory/:category/single" element = {<SinglePlayer/>}/>
          <Route exact path = "/type_written/quizcategory/:category/single" element = {<SinglePlayerWritten/>}/> 
          <Route exact path = "/type_fill/quizcategory/:category/single" element = {<SinglePlayerWritten/>}/> 

          <Route exact path = "/type_mcq/quizcategory/:category/multi"  element = {<MultiPlayer/>} />
          <Route exact path = "/type_written/quizcategory/:category/multi" element = {<MultiPlayerWritten/>}/>   
          <Route exact path = "/type_fill/quizcategory/:category/multi" element = {<MultiPlayerWritten/>}/>   

          <Route path = "/user"  element = {<User/>} />
          <Route path = "/result"  element = {<ResultSingle/>} />
          
        </Routes>
        </AuthProvider>
        </Router>

        
      </>
    );
  
}
export default App;


