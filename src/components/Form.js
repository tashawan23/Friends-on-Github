import React, { useState } from 'react'
import axios from 'axios';

export const Form = props => {
    const [username, setUsername] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="user">Enter Github Username</label>
            <input className="form-input" type="text" value={username} 
            onChange={event => setUsername(event.target.value)}
            placeholder="GitHub Username" required />
            <button className="btn" type="submit">Add Card</button>
        </form>
    )
}
