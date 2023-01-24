import React from "react";

function BotCard ({name, health, damage, armor,bot_class,catchphrase,avatar_url,created_at,updated_at}){
    return (
        <div className="col-4 p-1">
            <div className="card">
                <img className="card-img-top" src="" alt=""/>
                 <div className="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Avatar Url:{avatar_url}</li>
                        <li class="list-group-item">Name:{name}</li>
                        <li class="list-group-item">Health:{health}</li>
                        <li class="list-group-item">Damage:{damage}</li>
                        <li class="list-group-item">Armor:{armor}</li>
                        <li class="list-group-item">Bot Class:{bot_class}</li>
                        <li class="list-group-item">Catch Phrase:{catchphrase}</li>
                        <li class="list-group-item">Created at:{created_at}</li>
                        <li class="list-group-item">Updated at:{updated_at}</li>
  </ul>
                   <a href="#" className="btn btn-primary">Delete</a>
                    
                </div>
            </div>
            
        </div>
    )

}
export default BotCard;