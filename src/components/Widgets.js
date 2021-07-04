import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import InfoIcon from '@material-ui/icons/Info'
import React from 'react'
import '../styles/Widgets.css'


const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>


    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("React-Redux", "Top News - 9000 readers")}
      {newArticle("Coronavirus: TG updates", "Top News - 562 readers")}
      {newArticle("OTR: Taxes,Impots", "Top News - 390 readers")}
      {newArticle("Is Redux too good ?", "Code - 320 readers")}
      {newArticle("Whatsapp: Quelle issue pour les contrefaçons ?", "Top News - 96950 readers")}
    </div>
  )
}

export default Widgets
