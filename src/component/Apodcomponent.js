import React from "react";
const Apodcomponent=({apod,dateChange,currentDate})=>{
  
  return (
    <div>{apod?(
        <div>
          <header className="header">Evreni Keşfedelim</header>
        <div className="container">
                  <div className="background"style={{ backgroundImage: `url(${apod.hdurl})` }}></div>

          <div className="cerceve">
            <div className="tarih">
                <input type="date"
                value={currentDate}
                onChange={(e)=>dateChange(e.target.value)}/>
            </div>  
            <div className="govde">
              <img src={apod.url} width="700" height="500" />
                <div className="icerik-yazi">
                  <h1>{apod.title}</h1>
                  <p>{apod.explanation}</p>
                </div>
            </div>
          </div>

        </div>

        </div>)



          :
          (<p>...yükleniyor</p>)
          
      }</div>)
}

export default Apodcomponent;