import React from "react";

function Post(props){
    return(

        <div>
            <div className="post">
                <div>
                    <img className="post-img" src={props.imgURL} alt="newyork"></img>
                </div>
                <div className="info">
                    <h1 className="info--title">{props.title}</h1>
                    <span>{props.location}</span>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p> {props.description} </p>
                </div>
            </div>
            <hr></hr>
        
        </div>

    )
}

export default Post;