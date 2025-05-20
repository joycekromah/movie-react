import React from "react";

export default function Movie(props) {
    return (
        <li className="list-group-item">
            {props.item.title}
            <img src="/star.png" alt="star-icon"/>
            <button className="btn btn-sm btn-danger float-right" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}