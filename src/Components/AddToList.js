    import React, {useState} from 'react'
    import styles from './AddToList.module.css'

    export default function AddtoList(props) {

        function setNewItemsHandler(e){
    
            props.setNewItems(e.target.value)
            console.log(props.newItems)
          }
        

        function addListItems(e) {
            e.preventDefault()
            if (props.newItems !== "" && props.listItems.indexOf(props.newItems) === -1 ){
              props.listItems.push(props.newItems)
              window.localStorage.setItem("movies",JSON.stringify(props.listItems))
              props.setNewItems("")
            } else {
                alert("Either nothing was entered or the list already contains the item")
                props.setNewItems("")
              }
          }

        return (
            <div className={styles['addList-wrapper']}>
                <div>
                    <p className={styles.p}>Feel Free to Add your Own Ideas!</p>    
                </div>
                <form 
                onSubmit={addListItems} 
                className={styles[`add-list-form`]}>
                    <input 
                        type="text" 
                        name="name" 
                        value={props.newItems} 
                        onChange={setNewItemsHandler}
                        className={styles[`add-list-form-text`]}
                        />
                    <input 
                    type="submit" 
                    value="Submit"
                    className={styles[`add-list-form-submit`]}>
                    </input>
                </form>
            </div>
        )
    }