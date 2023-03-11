import React, {useState} from 'react'

export default function ListFilter(props){
    const setListFocus = props.filter
   return (
        <form>
                <input 
                    type="radio" 
                    id="staying in" 
                    name="list-categories" 
                    value="Staying At Home" 
                    onFocus={setListFocus}
                />
                <label htmlFor="stay" >Stay At Home</label>
                <input 
                    type="radio" 
                    id="going out" 
                    value="Going Out" 
                    name="list-categories"
                    onFocus={setListFocus}/>
                <label htmlFor="stay">Going Out</label>
                <input 
                    type="radio" 
                    id="both" 
                    value="Either" 
                    name="list-categories"
                    onFocus={setListFocus}
                />
                <label htmlFor="both">Both</label>
            </form>
    )
}