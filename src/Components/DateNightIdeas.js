    import React, {useState} from 'react'

    export default function DateNightIdeas(props) {


        const [movie, setMovie] = useState("")
        const [service, setService] = useState("")
        const [genre, setGenre] =  useState("")
        const [genre2, setGenre2] =  useState("")
        const [genre3, setGenre3] =  useState("")

        
        function setMovieNameHandler(e){
            setMovie(e.target.value)
        }

        function setServiceHandler(e){
            setService(e.target.value)
        }

        function setGenreHandler(e) {
            setGenre(e.target.value)
        }
        function setGenre2Handler(e) {
            setGenre2(e.target.value)
        }
        function setGenre3Handler(e) {
            setGenre3(e.target.value)
        }

        function resetFields() {
            setMovie("")
            setService("")
            setGenre("")
            setGenre2("")
            setGenre3("")
        }
        
        

        const updateList = function(e) {
            e.preventDefault()
            let info = {
                key: Math.random(),
                movie: movie,
                service: service,
                genre: genre,
                genre2: genre2,
                genre3: genre3, 
            }
        
            if (props.choiceUpdate === null)
            {   
                props.choiceUpdate({list:"saved list",movies: []})
                localStorage.setItem("Movies",JSON.stringify({
                list:"saved list",movies: []
                 }))
            } else { 

            }
        }

        function clearStorageHandler() {
            localStorage.removeItem("Movies")
            
        }


        return (
            <div>    
                <form onSubmit={updateList}>
                    <div>
                        <label>Movie Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={movie} 
                        onChange={setMovieNameHandler}
                        ></input>
                    </div>
                    <div>
                        <label>Movie Service</label>
                        <input 
                        type="text"  
                        name="service" 
                        value={service} 
                        onChange={setServiceHandler}
                        ></input>
                    </div>
                    <div>
                        <label>Movie Genre(s)</label>
                        <input 
                        type="text"  
                        name="genre" 
                        value={genre} 
                        onChange={setGenreHandler}>
                        </input>
                        <input 
                        type="text"  
                        name="genre2" 
                        value={genre2}
                        onChange={setGenre2Handler}>
                        </input>
                        <input 
                        type="text"  
                        name="genre3" 
                        value={genre3}
                        onChange={setGenre3Handler}
                        >
                        </input>
                    </div>
                    <input type='submit'/>
                </form> 
                <button onClick={clearStorageHandler}>Clear Options</button>
            </div>
            //add games to play for movie?
        )
    }