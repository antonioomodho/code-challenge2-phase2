//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
//import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import BotCollection from '../botcollection/BotCollection';
import YourBotArmy from '../botdisplay/YourArmyBot';




function App() {
  const [bots, setData] = useState([]);
  let[numbersArray,setArray] = useState ([])
  // const [searchValue,setSearch]=useState("")
  useEffect(() => {
    // const URL= "http://localhost:8001/bots"
    fetch("https://json-server2-swart.vercel.app/bots")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data)
      })
      .catch((error) => console.log(error))


  }, [])


  //Function for Adding bot to army
  function addBot(id,name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at ){
    // console.log( id,name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at )
    let array = [...numbersArray]
  array.push(id)
  setArray(array)
  if(numbersArray.find(item => item === id)){
    console.log("match")
  }else{
    let botArmy = document.querySelector(".army")
    let appendedArmy = document.createElement("div")
    appendedArmy.id = "appendedBot"
    appendedArmy.innerHTML =
    `
    <img id = "appendedImage" src= ${avatar_url}/>
    <h2>${name}<h2>
    `
    appendedArmy.addEventListener('click',()=>{
      let value = parseInt(appendedArmy.getAttribute('value'));
      let newValue = numbersArray.filter((item)=>{
        return item !== value
      })
      setArray(newValue)
      appendedArmy.remove()
    })
    botArmy.appendChild(appendedArmy)
  }
  }


  return (
    <div>
      <Navbar />
      <YourBotArmy/>
      <BotCollection addBot = {addBot} bots={bots} />

    </div>


  );
}

export default App;
