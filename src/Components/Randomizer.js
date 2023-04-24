import React, {useState,useEffect} from 'react'
import ListFilter from './ListFilter'
import styles from './Randomizer.module.css'

export default function Randomizer(props){

    const combinedListCustom = []
    const defaultDateListOutCustom = []
    const defaultDateListHomeCustom = []
    const [selection, setSelection] = useState()
    const [randomizedList, setRandomizedList] = useState()
    const [isRandomized, setIsRandomized] = useState(false)
    const dateList = props.choices
    const defaultDateListHome = props.defaultChoices[0].generalathome
    const defaultDateListOut = props.defaultChoices[1].generaloutside
    const [toggleCustom, setToggleCustom] = useState(false)
    const [whatsSelected, setWhatsSelected] = useState('both')
    
    const combinedList = defaultDateListHome.map((items) => {
       return items
    })  

    combinedList.map((items) => {
        return combinedListCustom.push(items)
    })
    
    defaultDateListHome.map((items) => {
        defaultDateListHomeCustom.push(items)          
    })

    defaultDateListOut.map((items) => {
        combinedList.push(items)
        defaultDateListOutCustom.push(items) 
        combinedListCustom.push(items)         
    })

    dateList.map((items)=> {
        combinedListCustom.push(items)
        defaultDateListOutCustom.push(items)
        defaultDateListHomeCustom.push(items)
    });

    
    function useCustomList(e) { 
        
        setToggleCustom(true)

        if (toggleCustom === true && whatsSelected === "stay") {
            setSelection(defaultDateListHomeCustom)
            console.log(`home selected`)
       } 

        if (toggleCustom === true && whatsSelected === "going") {
            setSelection(defaultDateListOutCustom)
            console.log(`out selected`)
        } 

        if (toggleCustom === true && whatsSelected === "both" ) {
            console.log(whatsSelected)
            setSelection(combinedListCustom)
            console.log('both selected')
        } 
    }
    
    function excludeCustomList(e) { 
       
        setToggleCustom(false)

        if (toggleCustom === false && whatsSelected === "stay") {
            setSelection(defaultDateListHome)
            console.log(`home selected`)
       } 

        if (toggleCustom === false && whatsSelected === "going") {
            setSelection(defaultDateListOut)
            console.log(`out selected`)
        } 

        if (toggleCustom === false && whatsSelected === "both" ) {
            console.log(whatsSelected)
            setSelection(combinedList)
            console.log('both selected')
        }

    }   


    function setListFocus(e){ 

        if (e.target.id === "staying in" && toggleCustom === false) {
            setSelection(defaultDateListHome)
            setWhatsSelected('stay')
        }

        if (e.target.id === "going out" && toggleCustom === false) {
            setSelection(defaultDateListOut)
            setWhatsSelected(`going`)
        }

        if (e.target.id === "both" && toggleCustom === false) {
            setSelection(combinedList)
            setWhatsSelected(`both`)
        }

        if (toggleCustom === true && e.target.id === "staying in") {
            setWhatsSelected('stay')
            setSelection(defaultDateListHomeCustom)
            console.log(`home selected`)
       } 

        if (toggleCustom === true && e.target.id === "going out") {
            setWhatsSelected(`going`)
            setSelection(defaultDateListOutCustom)
            console.log(`out selected`)
        } 

        if (toggleCustom === true && e.target.id == 'both') {
            setWhatsSelected(`both`)
            setSelection(combinedListCustom)
            console.log('both selected')
        } 
    }   
    
    function getRandomInt(min,max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * max )
    }
    
    function randomSelection() {
        setRandomizedList(selection[getRandomInt(0,selection.length)])
        setIsRandomized(true)
    }

    useEffect(() => {
        if (selection === undefined) {
            setIsRandomized(false)
            setSelection(combinedList)
        } 
        console.log(isRandomized)
        
    },[]) 

    return(
        <div className={styles.randomizer}>
            <ListFilter 
                noCustomFilter={excludeCustomList}
                customFilter={useCustomList}
                filter={setListFocus} 
                selection={selection}
                updateSelection={setSelection}
                combinedList={combinedList}
                toggleCustom={toggleCustom}
               />
            {/* <button onClick={ () => {console.log(selection); console.log(toggleCustom)}}>Log Filters</button> */}
            <button className={styles[`randomize`]} onClick ={randomSelection}>Randomize</button>
            <section className={styles.results}>
                <p>Today's Date Night Idea is</p>
                <div className={isRandomized ? styles[`pulse-origin`] : undefined}>
                    <p 
                        className={styles['randomizerViz']}>
                        {randomizedList}
                    </p>
                </div>
            </section>
            <br></br>
        </div>
    )

    
}


