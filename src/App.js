import React, {useState} from "react"
// import logo from './logo.svg';
import './App.css';
import IdeaList from "./Components/IdeaList";
import AddToList from './Components/AddToList';
import Randomizer from './Components/Randomizer';
import RemoveListItems from "./Components/RemoveListItems";  


function App() {
  let fromStorage = window.localStorage.getItem("movies")
  let parsedData = JSON.parse(fromStorage)
  
  const defaultDateList = [
    {generalathome: [
      "Pizza and Wine",
      "Netflix and Chill", 
      "A Cooperative Video Game","A Board Game", 
      "A Card Game", 
      "Home Cooked Candlelit Dinner",
      "Karaoke",
      "Paint and Wine",
      "Take a Bath Together",
      "Fun DIY Project",
      'Fun Crafts Project',
      'Fitness Together',
      "Work on A Puzzle Together",
      'Plan A Vaction Together',
      "Listen To Music Together`",
    ]},
    {generaloutside: [
      "Movie at Theater and Dinner",
      "Dinner at Restaurant",
      "Dinner At A New Restaurant",
      "Pub Crawl",
      "Checkout A New Town Together",
      "Go to an Arcade Together",
      "Go To Museum Together",
      "Do Brunch Together",
      "Go Bowling Together",
      "Go Mini Golfing Together",
      "Go Camping Together",
      "Take Dance Lessons Together",
      "Go Dancing Together",
      "Overnight Road Trip",
      "Go To A Concert",
      "Try A New Hobby Together",
      "Go To An Escape Room Together",
      "Go Biking Together",
      "Take a Class Together",
    ]}
  ]

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



  function logListItems(){
    console.log(listItems)
    console.log(newItems)
    console.log(fromStorage = window.localStorage.getItem("movies"))
  }


  return (
    <div className="App">
      <div className="functionality-wrapper">
        <AddToList 
          listItems={listItems}
          setListItems={setListItems}
          newItems={newItems}
          setNewItems={setNewItems}
        />
        <button onClick={logListItems}>Log List</button>
        <Randomizer 
          defaultChoices={defaultDateList}
          choices={listItems}
        />
        <RemoveListItems 
          list={listItems} 
          removeItems={removeItems} 
          setRemoveItems={setRemoveItems} 
      />
      </div>
      <div className="idea-list-wrapper">
        <IdeaList 
          list={listItems} 
          showList={showList} 
          setShowList={setShowList} 
        />
      </div>
    </div>
  );
}

export default App;

