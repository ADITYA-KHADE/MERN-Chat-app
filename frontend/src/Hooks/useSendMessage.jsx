import React from 'react'
import useConversation from "../zustand/useConversation"
import {toast} from "react-hot-toast"
const useSendMessage = () => {
    const {messages,setMessages,selectedConversation}=useConversation();
    const [loading, setLoading] = React.useState(false);
    const sendMessage=async(message)=>{
        const receiverId=selectedConversation._id;
        setLoading(true);
        try{
            const res=await fetch(`/api/message/send/${receiverId}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({message})
            });

            const data=await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setMessages([...messages,data])
        
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {sendMessage,loading};
}

export default useSendMessage
