import React, {useState, useEffect} from 'react'
import MetaTags from 'react-meta-tags'
import './videos.css'

export default function Videos(props) {
    const [title, setTitle]= useState("")
    useEffect(()=>{
        let tit = props.match.params.title
        setTitle(tit)
    })
    return (
        <>
            <MetaTags>
                <meta name="monetization" content="$ilp.uphold.com/ibnzJLZBmb28" />
            </MetaTags>
            <div className="vids">
                <p>This page uses web monetization with coil, to understand more <a href="https://coil.com">here</a></p>
                <h1>{title}</h1>
                <iframe src="https://www.youtube.com/embed/mglJoVAGkuE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button onClick={()=>{props.history.push('/')}} >Return</button>
            </div>

        </>
    )
}
