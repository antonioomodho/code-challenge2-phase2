// import React, { useState } from "react";
// const URL = "http://localhost:3000/transactions"
//  function BotDisplay(){
//     const [name , setName] = useState([])
//     const [ health, setAmount] = useState([])
//     const [damage , setDamage] = useState([])
//     const [ armor , setArmor] = useState([])
//     const [ bot_class, setBot_class] = useState([])
//     const [ catchphrase , setCatchphrase] = useState([])
//     const [ avatar_url, setAvatar_url] = useState([])
//     const [ created_at , setCreated_at] = useState([])
//     const [ updated_at , setUpdated_at] = useState([])

//    const handleSubmit = (e)=>{
//        e.preventDefault()
//        const bot =  { name, health, damage, armor,bot_class,catchphrase,avatar_url,created_at,updated_at}
       
//        fetch(URL ,{
//            method: "POST",
//            headers:{"Content-Type":"application/json"},
//            body:JSON.stringify(bot)
//        })
//        .then(()=>{
//        })
//    }
// }
//    export default BotDisplay;