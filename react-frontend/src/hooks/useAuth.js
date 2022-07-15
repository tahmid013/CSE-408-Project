import { useContext, createContext, useState } from "react";


const AuthContext = createContext(null);

export const AuthProvider = ({user, children}) => {

    const [authData, setAuthData] = useState(user);



    const setAuth = newUser =>{
        if(newUser){
            console.log("new user true...");
            localStorage.setItem('quizz-user', JSON.stringify(newUser));
        }
        else{
            console.log("new user deleted...");
            localStorage.removeItem('quizz-user');
        }
        setAuthData(newUser);
    }

    return (
        <AuthContext.Provider value = {{authData, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);