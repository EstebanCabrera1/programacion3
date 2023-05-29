import React,{ useState } from 'react'
import card from './card.css'

function Card({name,about,job,img}) {

    return (
      <div className='card'>
        <div className="cardContainer ">
            <div className="cardImg">
                <img src={img} alt=''/>
            </div>
        </div>
        <div className="lower-container">
            <h3> { name } </h3>
            <h4> { job } </h4>
            <p>  { about } </p>
        </div>
      </div>
    )
}

export default Card;