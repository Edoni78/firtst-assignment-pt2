import React from 'react'
import './Card.css'

function Card(props) {
  return (  
 <div className="card">
        <div className="rate">
            <p>{props.rate}</p>
        </div>

            <div className="cardUp-container">

                <div className="btn">
                    <button style={{backgroundColor: `${props.backgroundColor}`}}>{props.status}</button>
                </div>

                <div className="img-holder">
                    <div className="img" style={{ content: `url(${props.image})` }}></div>
                    <h3>{props.name}</h3>
                </div>

            </div>

        <div className="cardDown-container">
            <div className="card-text">
                <p>{props.text}</p>
            </div>

            <div className="card-link">
                <a href="">{props.link}</a>
            </div>
        </div>
</div>

       
    
       
  )
}

export default Card
