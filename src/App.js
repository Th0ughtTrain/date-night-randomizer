import React, {useState} from "react"
// import logo from './logo.svg';
import './App.css';
import MovieList from "./Components/MovieList";
import AddToList from './Components/AddToList';
import Randomizer from './Components/Randomizer';
import RemoveListItems from "./Components/RemoveListItems";  


function App() {
  let fromStorage = window.localStorage.getItem("movies")
  let parsedData = JSON.parse(fromStorage)
  
  const [showList, setShowList] = useState(false)
  const [listItems, setListItems] = useState(setArraystate())
  const [newItems, setNewItems] =useState("")
  const [removeItems, setRemoveItems] =useState("")
 

  function setArraystate() {
    
    if (window.localStorage.length === 0) {
      return []
    } else {
      return parsedData
    }
  }

  // function removeItemsHandler(e) {
  //   e.preventDefault()
  //   if (listItems.indexOf(removeItems) !== -1 ){
  //   listItems.splice(listItems.indexOf(removeItems),1)
  //   window.localStorage.setItem("movies",JSON.stringify(listItems))
  //   }
  //   setRemoveItems("")
  // }
 
  function setNewItemsHandler(e){
    
    setNewItems(e.target.value)
    console.log(newItems)
  }

  // function setRemoveItemsHandler(e){
    
  //   setRemoveItems(e.target.value)
  //   console.log(removeItems)
  // }

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

  // function showListHandler() {
  //   if (showList === false) {return setShowlist(true)}
  //   else {return setShowlist(false)}
  // }
 
  return (
    <div className="App">
      <AddToList 
        listItems={listItems}
        setListItems={setListItems}
        newItems={newItems}
        setNewItems={setNewItems}
      />
      <button onClick={logListItems}>Log List</button>
      <Randomizer 
        choices={listItems}
      />
      <RemoveListItems 
        list={listItems} 
        removeItems={removeItems} 
        setRemoveItems={setRemoveItems} 
      />
      <MovieList 
        list={listItems} 
        showList={showList} 
        setShowList={setShowList} 
      />
    </div>
  );
}

export default App;

