import React, {useState,useRef,useEffect} from 'react'
import styles from './ListFilter.module.css'

export default function ListFilter(props){
    const setListFocus = props.filter
    const myRef = useRef()
    const useCustomList = props.customFilter
    const noCustomList = props.noCustomFilter

    useEffect(() => {
       myRef.current.setAttribute("checked","true")

    })
    
    function focusHandler(e){
        console.log(e.target)
    }


   return (
        <div>
            <form 
            className={styles[`filter-form`]}
            >
                <input 
                    type="radio" 
                    id="staying in" 
                    name="list-categories" 
                    value="Staying At Home" 
                    onFocus={setListFocus}
                />
                <label htmlFor="staying in" >Stay At Home</label>
                <input 
                    type="radio" 
                    id="going out" 
                    value="Going Out" 
                    name="list-categories"
                    onFocus={setListFocus}/>
                <label htmlFor="going out">Going Out</label>
                <input
                    type="radio" 
                    id="both" 
                    value="Either" 
                     name="list-categories"
                    onFocus={setListFocus}
                    ref={myRef}
                    onChange={focusHandler}
                />
                <label htmlFor="both">Both</label>
            </form>
            <form >
                <input
                type="radio"
                id="exclude custom"
                name='list-custom'
                value="exclude"
                onFocus={noCustomList}
                onChange={noCustomList}
                ></input>
                <label htmlFor='exclude custom'>Exclude Custom List</label>
                <input
                type='radio'
                id="add custom"
                name="list-custom"
                value="add"
                onFocus={useCustomList}
                onChange={useCustomList}
                ></input>
                <label htmlFor="add custom">Add Custom List</label>
                <input 
                    type="submit"

                ></input>
            </form>
    </div>
    )
}