import React from "react";

export default function StarIcon ({grade}) {
    const gradeValue = parseInt(grade);
    const stars = [];

    for (let i = 0; i < gradeValue; i++) {
        stars.push(
            <img key={i} src="/star.png" alt="star-icon" id="star" />
        );
    }

    return <>{stars}</>;
}