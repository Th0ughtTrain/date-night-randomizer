import React, {useState} from "react"
// import logo from './logo.svg';
import './App.css';
import IdeaList from "./Components/IdeaList";
import AddToList from './Components/AddToList';
import Randomizer from './Components/Randomizer';
// import RemoveListItems from "./Components/RemoveListItems";  
import Title from "./Components/Title";


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
      "Work on a Puzzle Together",
      'Plan a Vaction Together',
      "Listen To Music Together`",
      "Couple Book Club",
      "At Home Exercise Together",
      "Cook a New Recipe Together",
      "Plant a Garden",
      "Learn Something New Together",
      "Have a Meditation Session", 
      "Bingewatch a TV Show"
    ]},
    {generaloutside: [
      "Movie at Theater and Dinner",
      "Dinner at Restaurant",
      "Dinner At  New Restaurant",
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
      "Find a discounted activity to do",

    ]}
  ]

  const [showList, setShowList] = useState(false)
  const [listItems, setListItems] = useState(setArraystate())
  const [newItems, setNewItems] =useState("")
  // const [removeItems, setRemoveItems] =useState("")
 

  function setArraystate() {
    
    if (window.localStorage.length === 0) {
      return []
    } else {
      return parsedData
    }
  }

  return (
    <div className="App">
      <div className="functionality-wrapper">
        <Title />
        <Randomizer 
          defaultChoices={defaultDateList}
          choices={listItems}
        />
        <AddToList 
          listItems={listItems}
          setListItems={setListItems}
          newItems={newItems}
          setNewItems={setNewItems}
        />
        <div className="idea-list-wrapper">
                <IdeaList 
                  list={listItems} 
                  showList={showList} 
                  setShowList={setShowList} 
                />
        </div>
      </div>
    </div>
  );
}

export default App;

