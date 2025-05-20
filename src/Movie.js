import React from "react";
import StarIcon from "./MovieGrade";
import "./App.css";


export default function Movie(props) {
    return (
        <li className="list-group-item">
            {props.item.title}
            <button id="delbtn" className="btn btn-sm btn-danger float-right" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
            <StarIcon grade={props.item.grade}></StarIcon>
        </li>
    )
}