import React, {useState} from 'react'

export default function Randomizer(){
    const [selection, setSelection] = useState("")

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
        console.log(DUMMY_ARRAY[getRandomInt(0,DUMMY_ARRAY.length)].name)
        setSelection(DUMMY_ARRAY[getRandomInt(0,DUMMY_ARRAY.length)].name)
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


