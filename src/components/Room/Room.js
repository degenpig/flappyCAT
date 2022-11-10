import React from "react";

import "./Room.css";
const Room = () => {

  function chooseNFT(){
    // console.log(document.getElementsByClassName("modal")[0].style.display);
    document.getElementsByClassName("modal")[0].style.display = "block";
  }

  function close(){
    document.getElementsByClassName("modal")[0].style.display = "none";
  }

  function move(){
    window.location.href="/play";
  }

function myMove() 
{
  console.log("eee");
  var elemBluefish = document.getElementById("bluefish");
  var elemBluefishWin = document.getElementById("bluefishwin");
  var elemTurtle = document.getElementById("turtle");
  var elemTurtleWin = document.getElementById("turtlewin");
  
  var posBluefish = 0;
  var posTurtle = 0;

  var hasWinner = false;
  elemBluefishWin.style.display = 'none';
  elemTurtleWin.style.display = 'none';
  
  var id = setInterval(frame, 5);
  function frame()
  {
    if(posBluefish >= 350 && posTurtle >= 350)
    {
      clearInterval(id);
      return;
    }

    if(posBluefish < 350)
    {
      posBluefish += Math.round(Math.random()*10);
      if(posBluefish >= 350)
      {
        posBluefish = 350;
        if(!hasWinner){
          hasWinner = true;
          elemBluefishWin.style.display = 'unset';
        }
      }
      elemBluefish.style.left = posBluefish + 'px';
    }

    if(posTurtle < 350)
    {
      posTurtle += Math.round(Math.random()*10);
      if(posTurtle >= 350)
      {
        posTurtle = 350;
        if(!hasWinner){
          hasWinner = true;
          elemTurtleWin.style.display = 'unset';
        }
      }
      elemTurtle.style.left = posTurtle + 'px';
    }
  }
}

  return (
    <div className="container">
      <div className="row moving">
        <div className="col-sm-12">
          {/* <div id="traffic-light" className="row">
            <div className="row">
              <div id="stopLight" className="row bulb"></div>
              <div id="yeildLight" className="row bulb"></div>
              <div id="goLight" className="row bulb"></div>
            </div>
          </div> */}
          <div className="row" style={{marginTop:"250px"}}>
            <img id="bluefish" />
            <img id="turtle" />
            <img className="finishline"/>

            <img id="bluefishwin" />
            <img id="turtlewin" />
          </div>
          <div className="row" style={{marginTop:"-200px"}}>          
            <button style={{marginLeft:"500px"}} onClick={ myMove }>Click Me</button>
          </div>
        </div>
        {/* <div id="container">
          <div id="animate"></div>
        </div> */}
      </div>
      <div className="row" style={{}}>
        <div className="col-sm-1"></div>
        <div className="col-sm-9">
          <div className="row" style={{border: "5px solid black", height:"100px", borderRadius:"20px"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-1">
              <div style={{cursor:"pointer", marginTop:"30px"}} onClick={chooseNFT}>
                <img className="selectNFT" />
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-6"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-1"></div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row modal" style={{display:"none"}}>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-10"></div>
            <div className="col-sm-2"><div className="close" onClick={close}> X </div></div>
          </div>
          <div className="row">
            <div className="col-sm-4"><img className="Cat1" onClick={move}/></div>
            <div className="col-sm-4"><img className="Cat2" /></div>
            <div className="col-sm-4"><img className="Cat3" /></div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Room;
