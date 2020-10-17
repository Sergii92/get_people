import React from 'react'
import './style.css'

const People =({people})=>{
   return(
      <div className="people-block" > 
         <p>{people.name} {people.lastname}</p>
         <p><span>Возрвст: </span>{people.age}</p>
         <p><span>Пол: </span>{(people.sex==='f')?"женский":'мужской'}</p>
      </div>
   )
}

export default People