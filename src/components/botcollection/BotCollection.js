import React from "react";
import BotCard from "../botcard/BotCard";

function BotCollection ({addBot,bots}){
    console.log(bots)
    return(
        <div className="grid">
        {bots && bots.map((bots) => 
            <BotCard
            addBot = {addBot}
            id = {bots.id}
            key= {bots.id}
            name={bots.name}
            health={bots.health}
            damage={bots.damage}
            armor= {bots.armor}
            bot_class={bots.bot_class}
            catchphrase={bots.catchphrase}
            avatar_url={bots.avatar_url}
            created_at={bots.created_at}
            updated_at={bots.updated_at} />
            )}
            </div>
    );
    

}
export default BotCollection;