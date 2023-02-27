import React, {useState} from 'react'

export default function Randomizer(props){
    const [selection, setSelection] = useState("")
    const movieList = props.choices

    let DUMMY_ARRAY = [
        {name: "movieA"},
        {name: "movieB"},
        {name: "movieC"},
        {name: "movieD"},
    ]
    
    function getRandomInt(min,max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min )
    }
    function RandomMovieSelection() {
        console.log(movieList[getRandomInt(0,movieList.length)])
        setSelection(movieList[getRandomInt(0,movieList.length)])
    }

    return(
        <div>
            <button onClick ={RandomMovieSelection}>Randomize</button>
        <section>
            <p>Today's Date Night Idea is</p>
            <p>{selection}</p>
        </section>
        </div>
    )

    
}


