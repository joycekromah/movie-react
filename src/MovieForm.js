import React, {useRef}   from "react";


export default function MovieForm({movies, setMovies}) {

    const inputRef = useRef();
    const gradeRef = useRef();

    function addMovie(event) {
        event.preventDefault();
            if (inputRef.current.value.trim() === "") {
                alert("Du måste fylla i en titel");
                return;
            } 

            if (gradeRef.current.value === "0") {
                alert("Filmen måste ha ett betyg");
                return;
            }        
        
        const newId = Date.now();

        setMovies([...movies, {
            id: newId,
            title: inputRef.current.value,
            grade: gradeRef.current.value
        }]);

        inputRef.current.value = "";
        gradeRef.current.value = "0";
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Titel</label>
                <input type="text" class="form-control" id="title" placeholder="Titel här..." ref={inputRef}/>

                <label htmlFor="grade">Betyg:</label>
                <select class="form-control" id="grade" ref={gradeRef}>
                    <option value="0">Välj betyg här...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                
                <button type="submit" class="btn btn-success" onClick={addMovie}>Spara film</button>
            </form>
        </div>
    )
}