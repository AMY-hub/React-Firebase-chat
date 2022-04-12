import { useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..';

const NavBar = () => {

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    
    return (
        
        <div className="nav">
            <div className='wrapper'>
                <div className='nav_row'>
                    <div className="nav_greeting">Welcome :)</div>
                    {
                        user ? 
                        <button className="btn logout-btn" 
                        onClick={()=> auth.signOut()}>Logout</button>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar;