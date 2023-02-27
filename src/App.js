import React, {useState,useEffect} from "react"
// import logo from './logo.svg';
import './App.css';
// import DateNightIdeas from './Components/DateNightIdeas';
// import MovieList from "./Components/MovieList";
import Randomizer from './Components/Randomizer';
  


function App() {
  let fromStorage = window.localStorage.getItem("movies")
  let parsedData = JSON.parse(fromStorage)
  
  const [showList, setShowlist] = useState(false)
  const [listItems, setListItems] = useState(setArraystate())
  const [newItems, setNewItems] =useState("")
  const [removeItems, setRemoveItems] =useState("")
 

  let localstore = localStorage.getItem("Movies")


  function setMovieNameHandler(e){
      
  }

  function setArraystate() {
    
    if (window.localStorage.length === 0) {
      return []
    } else {
      return parsedData
    }
  }

  function removeItemsHandler(e) {
    e.preventDefault()
    if (listItems.indexOf(removeItems) !== -1 ){
    listItems.splice(listItems.indexOf(removeItems),1)
    window.localStorage.setItem("movies",JSON.stringify(listItems))
    }
    setRemoveItems("")
  }
 
  function setNewItemsHandler(e){
    
    setNewItems(e.target.value)
    console.log(newItems)
  }

  function setRemoveItemsHandler(e){
    
    setRemoveItems(e.target.value)
    console.log(removeItems)
  }

  function addListItems(e) {
    e.preventDefault()
    if (newItems !== "" && listItems.indexOf(newItems) === -1 ){
      listItems.push(newItems)
      window.localStorage.setItem("movies",JSON.stringify(listItems))
      setNewItems("")
    } else {
        alert("Either nothing was entered or the list already contains the item")
        setNewItems("")
      }
  }

  function logListItems(){
    console.log(listItems)
    console.log(newItems)
    console.log(fromStorage = window.localStorage.getItem("movies"))
    console.log(listItems.indexOf('Jungle Fever'))

  }

  function showListHandler() {
    if (showList === false) {return setShowlist(true)}
    else {return setShowlist(false)}
  }
 
  return (
    <div className="App">
      <form onSubmit={addListItems}>
        <input type="text" name="name" value={newItems} onChange={setNewItemsHandler}></input>
        <input type="submit" value="Submit"></input>
      </form>
      <button onClick={logListItems}>Log List</button>
      <Randomizer choices={listItems}/>
      <form onSubmit={removeItemsHandler}>
        <input type="text" value={removeItems} onChange={setRemoveItemsHandler}></input>
        <input type="submit" value="Remove Items"></input>
      </form>
      <div>
        <button onClick={showListHandler}>Show Movie List</button>
        {showList && listItems.map((items) => (
          <p>{items}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;

