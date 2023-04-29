import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Apodcomponent from "./component/Apodcomponent";

function App() {
  const [apod,setApod]=useState();
  const [date,setDate]=useState(new Date().toISOString().split("T")[0]);
  
  useEffect(()=>{
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=Pl0f3w8rqfP0ha9hl50PBRg1RuiVi5hcOso0Q9x2&date=" + date)
  .then((res)=>{
  console.log("nasa",res.data)
  setApod(res.data);
  
  })

},[date])

  return (
    <div className="App">
      <input type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>
      <Apodcomponent apod={apod}/>
      
    </div>
  );
}

export default App;
