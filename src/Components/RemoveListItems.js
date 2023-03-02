import React from 'react'

export default function RemoveListItems(props){

    function setRemoveItemsHandler(e){
        props.setRemoveItems(e.target.value)
        console.log(props.removeItems)
    }
    
    function removeItemsHandler(e) {
        e.preventDefault()
        if (props.list.indexOf(props.removeItems) !== -1 ){
        props.list.splice(props.list.indexOf(props.removeItems),1)
        window.localStorage.setItem("movies",JSON.stringify(props.list))
        }
        props.setRemoveItems("")
    }
    

    return (<form onSubmit={removeItemsHandler}>
        <input type="text" value={props.removeItems} onChange={setRemoveItemsHandler}></input>
        <input type="submit" value="Remove Items"></input>
      </form>
      
    )
}