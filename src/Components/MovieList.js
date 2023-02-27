import React from 'react'


export default function MovieList(props) {

    function movieListDiagnostics() {
        console.log(localStorage)
        console.log(props.choices)
    }

    return(
        <div>
            <ul>
            {/* {props.choices.map((movies) => (
                <p>{movies.movie}</p>
            ))} */}
            </ul>
            <button onClick={movieListDiagnostics}>ClickMe</button>
        </div>
    )
}