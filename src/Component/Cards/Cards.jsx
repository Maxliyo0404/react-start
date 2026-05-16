import { useTranslation } from "react-i18next";
import "./Cards.css";
import React from 'react'
import i18next from "i18next";
import axios from "axios";

function Cards() {
    const {t, i18n } = useTranslation();
    const handleChangeLanguage = (event) =>{
     i18n.changeLanguage(event.target.value)
    }
    const sendMessage = (event)=>{
        event.preventDefault();
         const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`
         const chat_id =  647264939
         const url = `https://api.telegram.org/bot${token}/sendMessage`;
         const name = document.getElementById("username").value
         const number = document.getElementById("tel").value
         const messageContent =`Name: ${name}\n Phone nimber: ${number}`;
         axios ({
          url:url,
          method:"POST",
          data: {
            chat_id:chat_id,
            text:messageContent,
          }
         })
         .then(()=>{
            alert("Hammasi joyida ✅");
         }).catch((error)=>{
            console.log(error);
            
         })
    }
  return (
    <div className="container">
         <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
           <option value="uz">Uz</option>
            <option value="en">Eng</option>
            <option value="ru"> Rus</option>
         </select>
        <h1 className="title">{t("cards.title")}</h1>
        <form className="form">
            <label className="label">
                <input id="username" type="text"required placeholder={t("cards.name")} />
            </label>
            <label className="label">
                <input id="tel" type="number"required placeholder={t("cards.number")} />
            </label>
            <button type="submit" className="button">{t("cards.btn")}</button>
        </form>
    </div>
  )
}

export default Cards 