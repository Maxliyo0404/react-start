import { useTranslation } from "react-i18next";
import "./Cards.css";
import React from 'react'
import i18next from "i18next";

function Cards() {
    const {t, i18n } = useTranslation();
    const handleChangeLanguage = (event) =>{
      i18n.handleChangeLanguage(event.target.value)
    }
  return (
    <div className="container">
         <select className="select" onChange={handleChangeLanguage} value={i18n.language}>
           <option value="uz">Uz</option>
            <option value="en">Eng</option>
            <option value="ru"> Rus</option>
         </select>
        <h1 className="title">{t("cards.title")}</h1>
    </div>
  )
}

export default Cards