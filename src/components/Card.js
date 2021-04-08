import React from 'react'

export const Card = (props) => {  

    return (
        <div className="card-container" >
        <div style={{ margin: '1em' }}>
          <img alt="avatar" style={{ width: '250px' }} src={props.avatar_url} />
          <div>
            <div className="name">{props.name}</div>
            <div>{props.blog}</div>
            <a href={`https://github.com/${props.login}`}>Go to GitHub Profile</a>
            <br />
            <button className="delete-btn" onClick={() => props.deleteCard(props.name)}>Delete Card</button>
          </div>
        </div>
        </div>
    )
  }
  
