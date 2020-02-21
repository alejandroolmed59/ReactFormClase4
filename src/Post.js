import React from 'react'

const Post = props => {
    return(
        <section>
            <h3>{props.name}</h3>
            <p>{props.text}</p>

            <img src = {props.image} alt = {props.image}/>
            <div className="likes">
                <button onClick = {props.onClick}>Like!</button>
                <p> Cantidad de likes: {props.likes} </p>
            </div>
        </section>
    );
}

export default Post;