import React, {useState} from 'react'

export default function DateNightIdeas() {
    const movieChoices = []
    const [movie, setMovie] = useState("")
    const [service, setService] = useState("")
    const [genre, setGenre] =  useState("")

    const updateList = function(e) {
        e.preventDefault()
        let info = {
            movie: e.target.name.value,
            service: e.target.service.value,
            genre: e.target.genre.value,
            genre2: e.target.genre2.value,
            genre3: e.target.genre3.value, 
        }
        movieChoices.push(info)
        console.log(movieChoices)
        e.target.reset()
    }


    return (
        <form onSubmit={updateList}>
            <div>
                <label>Movie Name</label>
                <input type="text" name="name" ></input>
            </div>
            <div>
                <label>Movie Service</label>
                <input type="text"  name="service" ></input>
            </div>
            <div>
                <label>Movie Genre(s)</label>
                <input type="text"  name="genre"></input>
                <input type="text"  name="genre2"></input>
                <input type="text"  name="genre3"></input>
            </div>
            <input type='submit'/>
        </form>
        //add games to play for movie?
    )
}