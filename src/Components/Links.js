import React from 'react'
import "./Links.css"

function Links(props) {
    return (
        <div className="orders">
            <p id='title'>{props.title}</p>
            <hr />
            <p>{props.a}</p>
            <p>{props.b}</p>
            <p>{props.c}</p>
            <p>{props.d}</p>
            <p>{props.e}</p>
            <p>{props.f}</p>
        </div>
    )
}

export default Links