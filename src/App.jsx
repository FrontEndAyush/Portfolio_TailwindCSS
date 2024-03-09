import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { useState } from "react";
function App() {
  let [isTrue, setIsTrue] = useState(false)
  return (
    <>
      <Navbar setIsTrue = {setIsTrue} isTrue ={isTrue}></Navbar>
      <div className="flex ">
        <Sidebar isTrue = {isTrue}></Sidebar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
