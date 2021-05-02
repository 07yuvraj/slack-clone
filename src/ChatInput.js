import React,{useState} from 'react';
import "./ChatInput.css";
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider';

function ChatInput({channelName,channelId}) {
    const [input,setInput]=useState("");
    const [{user}]=useStateValue();
    const sendMessage=(e)=>{
        e.preventDefault();
        if (!input) return false
		if (channelId) {
			db.collection("rooms").doc(channelId).collection("messages").add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userimage: user.photoURL,
			})
		}
		setInput("");   
    }
    return (
        <div className="chatInput">
            <form>
                <input 
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={e=>setInput(e.target.value)}     
                />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
            
        </div>
    )
}

export default ChatInput;
