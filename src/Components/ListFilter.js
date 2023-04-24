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

    function renderUserListConfirmation() {
        if (props.toggleCustom === true) {
        return <p className={styles[`enable-user-list`]}>User List Enabled!</p>
        } else {
            return
        }
      }


   return (
        <div className={styles[`filter-wrapper`]}>
            <form 
            className={styles[`filter-form`]}
            >
                <input 
                    type="radio" 
                    id="staying in" 
                    name="list-categories" 
                    value="Staying At Home" 
                    onFocus={setListFocus}
                    className={styles[`filter-input`]}
                    />
                <label htmlFor="staying in" >Stay At Home</label>
                <input 
                    type="radio" 
                    id="going out" 
                    value="Going Out" 
                    name="list-categories"
                    onFocus={setListFocus}
                    className={styles[`filter-input`]}
                    />
                <label htmlFor="going out">Going Out</label>
                <input
                    type="radio" 
                    id="both" 
                    value="Either" 
                     name="list-categories"
                    onFocus={setListFocus}
                    ref={myRef}
                    onChange={focusHandler}
                    className={styles[`filter-input`]}
                />
                <label htmlFor="both">Both</label>
            </form>
            <form 
                className={styles[`filter-form`]}
            >
                <input
                type="radio"
                id="exclude custom"
                name='list-custom'
                value="exclude"
                onFocus={noCustomList}
                onChange={noCustomList}
                className={styles[`filter-input`]}
                ></input>
                <label htmlFor='exclude custom'>Exclude User List</label>
                <input
                type='radio'
                id="add custom"
                name="list-custom"
                value="add"
                onFocus={useCustomList}
                onChange={useCustomList}
                className={styles[`filter-input`]}
                ></input>
                <label htmlFor="add custom">Add User List</label>
            </form>
            {renderUserListConfirmation()}
    </div>
    )
}