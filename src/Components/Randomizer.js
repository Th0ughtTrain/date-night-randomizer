import React, {useState} from 'react'
import ListFilter from './ListFilter'

export default function Randomizer(props){
    
    const [selection, setSelection] = useState("")
    const [randomizedList, setRandomizedList] = useState([])
    const dateList = props.choices
    const defaultDateListHome = props.defaultChoices[0].generalathome
    const defaultDateListOut = props.defaultChoices[1].generaloutside
    const combinedList = defaultDateListHome.map((items) => {
       return items
    })

    

    function setListFocus(e){ 
        if (e.target.id === "staying in") {
            setSelection(defaultDateListHome)
        }

        if (e.target.id === "going out") {
            setSelection(defaultDateListOut)
    }   
        if (e.target.id === "both") {
            setSelection(combinedList)
        }
    }    


    defaultDateListOut.map((items) => {
        return combinedList.push(items)
    })
    dateList.map((items)=> {
        return combinedList.push(items)
    })

    function getRandomInt(min,max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * max )
    }
    function randomSelection() {
        setRandomizedList(selection[getRandomInt(0,selection.length)])
    }

    return(
        <div>
            <ListFilter filter={setListFocus} />
            <button onClick={ () => {console.log(selection)}}>Log Filters</button>
            <button onClick ={randomSelection}>Randomize</button>
            <section>
                <p>Today's Date Night Idea is</p>
                <p>{randomizedList}</p>
            </section>
        </div>
    )

    
}


