import React from 'react'
import { Card } from './Card'

export const CardList = props => {
    
    return (
        <div>
            {props.cards.map((card, index) => (<Card {...card} key={index} deleteCard={props.deleteCard} id={index}/>
            ))}
        </div>
    )
}
