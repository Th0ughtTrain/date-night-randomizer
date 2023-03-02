    import React, {useState} from 'react'
    import './AddToList.css'

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
            <div className='addList-wrapper'>    
                <form onSubmit={addListItems}>
                    <input type="text" name="name" value={props.newItems} onChange={setNewItemsHandler}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }