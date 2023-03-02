import React from 'react'


export default function MovieList(props) {
    

    function showListHandler() {
        if (props.showList === false) {return props.setShowList(true)}
        else {return props.setShowList(false)}
      }

    return(
        <div>
        <button onClick={showListHandler}>Show Movie List</button>
        {props.showList && props.list.map((items) => (
          <p key={Math.random()} >{items}</p>
          ))
        }
      </div>
    )
}