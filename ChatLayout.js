import React,{useState} from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatLayout(){
  const [messages,setMessages]=useState([{from:"bot",text:"Good day, my dear."}]);
  async function send(msg){
    setMessages(m=>[...m,{from:"user",text:msg}]);
    const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:msg})});
    const d=await r.json();
    setMessages(m=>[...m,{from:"bot",text:d.reply}]);
  }
  return(<div><MessageList messages={messages}/><MessageInput onSend={send}/></div>);
}
