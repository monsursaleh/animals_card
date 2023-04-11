import React from 'react'
import './Card.css'

// Card component that displays an animal card with an image, name, likes and remove button
const Card = (props) => {
  return (
    <div className="card">
      {/* Image of the animal from the Unsplash API */}
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt={props.name}
      />

      {/* Button to remove the animal card */}
      <button onClick={props.removeCard} className="remove">
        x
      </button>

      {/* Name of the animal */}
      <h3>{props.name}</h3>

      {/* Likes of the animal, displayed with a heart or a broken heart depending on the number */}
      <div className="likes_container">
        <button onClick={props.removeLikes}>-</button>
        {props.likes >= 0 ? (
          <p className="likes">❤️ {props.likes}</p>
        ) : (
          <p className="likes">💔 {props.likes}</p>
        )}
        <button onClick={props.addLikes}>+</button>
      </div>
    </div>
  )
}

export default Card
