import React from "react";
import ChatLayout from "./components/ChatLayout";
export default function App(){
  return(<div className="app-root">
    <header className="app-header"><h1>Chat with Queen Elizabeth II</h1></header>
    <main><ChatLayout/></main>
  </div>);
}
