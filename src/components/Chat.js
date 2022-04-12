import { useContext, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { serverTimestamp } from 'firebase/firestore';
import { Context } from '../index';
import Loader from './Loader';
import Message from './Message';

const Chat = () => {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
       firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async (e) => {
        e.preventDefault();
        const time = firebase.firestore.FieldValue.serverTimestamp();
    
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp()
        })
        setValue('');
        console.log(firestore.collection('messages'));
    }

    if(loading) {
        return (
          <Loader/>
        )
    }  

    let messagesToRender;
    if( messages ) {
        messagesToRender = messages.map( message => {
            const time = message.createdAt === null? '' : message.createdAt.toDate().toLocaleString();
            
            return (
                <Message 
                    data={message} 
                    time={time}
                    userId={user.uid}
                    key={ message.createdAt === null? '' :
                        message.createdAt.seconds + '.' + message.createdAt.nanoseconds}/>
            )
        })
    }

    return (
        <div className='wrapper'>
           {messagesToRender}
            <form className="form_message">
                <textarea  className="message-field" cols="30" rows="5" 
                value={value}
                onChange={ (e) => setValue(e.target.value) }
                ></textarea>
                <button className="btn send-btn" 
                onClick={sendMessage}
                >Send</button>
            </form>
        </div>
        
    )
}

export default Chat;