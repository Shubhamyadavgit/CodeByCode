import React, { useState } from 'react'

const Props = (props) => {
    const [language,setLanguage] = useState(props.language)
    const changeName = ()=>{
        if(language === "Reactjs"){
            setLanguage(props.language)
        }else{
            setLanguage("Reactjs")
        }
    }
  return (
    <div>
        <h3>{language}</h3>
        <button onClick={changeName}>Change language</button>
    </div>
  )
}

export default Props