import React,{useState} from "react";
export default function MessageInput({onSend}){
  const [v,setV]=useState("");
  return(<form onSubmit={e=>{e.preventDefault();onSend(v);setV("");}}>
    <input value={v} onChange={e=>setV(e.target.value)}/>
    <button>Send</button>
  </form>);
}
