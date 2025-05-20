import React from "react";
import StarIcon from "./MovieGrade";


export default function Movie(props) {
    return (
        <li className="list-group-item">
            {props.item.title}
            <StarIcon grade={props.item.grade}></StarIcon>
            <button className="btn btn-sm btn-danger float-right" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}