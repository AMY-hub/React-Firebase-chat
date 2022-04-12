
import { useContext } from 'react';
import {Route, Routes, Navigate} from 'react-router'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..';
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

const AppRouter = () => {

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return user? 
        (
           <Routes>
               {
                   privateRoutes.map( ({path, Component}) => {
                       return <Route path={path} 
                       element={<Component />} 
                        key={path}/>
                   })
               }
               <Route path="*" element={<Navigate to ={CHAT_ROUTE} />}/>
           </Routes> 
        )
        :
        (
        <Routes>
            {
                publicRoutes.map( ({path, Component}) => {
                    return <Route path={path} 
                    element={<Component/>} 
                    key={path}/>
                })
            }
            <Route path="*" element={<Navigate to ={LOGIN_ROUTE} />}/>
        </Routes> 
        )
}

export default AppRouter;