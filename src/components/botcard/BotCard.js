import { useState } from "react";
import React from "react";
//import App from "../apps/App";
//import BotCollection from "../botcollection/BotCollection";

function BotCard({addBot, id,name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at }) {
    let [added,setAdded] = useState(true)

   function deleteBot(){
    console.log('deleted')
    setAdded(false)
   fetch (`https://json-server2-swart.vercel.app/bots/${id}`,{
    method : 'DELETE'})
    .then(console.log('deletItem'))
  } 
    
    return (
        <div onClick={()=>{
            addBot( id,name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at )
        }} className="col-8 p-1 key" key={id}>
            <div className="card h-100">
                <img src={avatar_url} className="card-img-top" alt="..." />
                <div className="">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{catchphrase}</p>
                    <span>
                        Health: {health}
                    </span>
                    <br/>
                    <span>
                        Damage: {damage}
                    </span>
                    <br/>
                    <span>
                        Armor: {armor}
                    </span>
                    <br/>
                    <span>
                        Bot Class: {bot_class}
                    </span>
                    <br/>
                    <span>
                        Created at: {created_at}
                    </span>
                    <br/>
                    <span>
                        Updated at: {updated_at}
                    </span>
                    <br/>
                    <button onClick={
                        (e)=>{
                            e.stopPropagation()
                            deleteBot()
                        }
                    } className="btn btn-primary ">X</button>
                </div>
            </div>
        </div>

    )

}
export default BotCard;