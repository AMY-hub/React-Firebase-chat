import { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';


const Login = () => {

    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} =  await auth.signInWithPopup(provider);
    }

    return (
        <div className="wrapper">
            <div className="login">
                <p>Please login to join chat</p>
                <button className="btn login-btn" type="button" onClick={login}>Login</button>
            </div>
        </div>

    )
}

export default Login;