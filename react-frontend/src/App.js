
import React from 'react';
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/Sign-up';
import SignIn from './components/pages/Sign-in';
import QuizMainPage from './components/pages/QuizMainPage';
import Features from './components/pages/Features';
import HowWorks from './components/pages/HowWorks';
import DemoGuideVideo from './components/pages/DemoGuideVideo';
import Category from './components/pages/Category';
import Account from './components/pages/Account';
import User from './components/pages/User';
import { AuthProvider } from './hooks/useAuth';
import ClubsPage from './components/pages/ClubsPage';
import SinglePlayer from './components/pages/SinglePlayer';
import MultiPlayer from './components/pages/MultiPlayer';
import Practice from './components/pages/Practice';

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
          <Route   path = "/type_mcq/quizcategory"  element = {<Category/>} />
          <Route exact path = "/type_written/quizcategory"  element = {<Category/>} />
          <Route exact path = "/type_fill/quizcategory"  element = {<Category/>} />
          <Route path = "/demo"  element = {<DemoGuideVideo/>} />
          <Route path = "/quizcategory"  element = {<Category/>} />
          <Route exact path = "/clubspage"  element = {<ClubsPage/>} />
          <Route exact path = "/quizmainpage/single"  element = {<SinglePlayer/>} />
          <Route exact path = "/quizmainpage/multi"  element = {<MultiPlayer/>} />
          <Route exact path = "/quizmainpage/practice"  element = {<Practice/>} />
          
          <Route path = "/user"  element = {<User/>} />
        </Routes>
        </AuthProvider>
        </Router>

        
      </>
    );
  
}
export default App;


