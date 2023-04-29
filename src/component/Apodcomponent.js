import React from "react";
const Apodcomponent=({apod})=>{
    return (
    <div>{apod?(
        <div>
           
          <img src={apod.url}/>
          <h1>{apod.title}</h1>
          <p>{apod.explanation}</p>
        </div>)
          :
          (<p>...yükleniyor</p>)
          }
      </div>)
}

export default Apodcomponent;