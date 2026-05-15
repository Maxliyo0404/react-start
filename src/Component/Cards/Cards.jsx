import { useTranslation } from "react-i18next";
import "./Cards.css";
import React from 'react'
import i18next from "i18next";

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
         const name = document.getElementById("username")
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
                <input id="username" type="text"required placeholder=" " />
            </label>
        </form>
    </div>
  )
}

export default Cards 