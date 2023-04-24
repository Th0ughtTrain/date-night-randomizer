import React from 'react'
import styles from './IdeaList.module.css'


export default function IdeaList(props) {
    

    function showListHandler() {
        if (props.showList === false) {return props.setShowList(true)}
        else {return props.setShowList(false)}
      }

      // function deleteHandler(item) {
      //   props.list.splice(props.list.indexOf(items),1)
      // }


    return(
        <div className={props.showList ? `${styles.container}` : ``}>
          <button onClick={showListHandler}>My List</button>
          {props.showList && props.list.map((items) => (
            <div className={styles['list-item-wrapper']} key={Math.random()}>
              <p className={styles['list-item']} >{items}</p>
              <button 
                className={styles['list-item-delete']}
                onClick={(e) => {
                    if (props.list.indexOf(items) !== -1 ){
                      props.list.splice(props.list.indexOf(items),1)
                      window.localStorage.setItem("movies",JSON.stringify(props.list))
                      console.log(e.target.previousSibling.hidden = true)
                      console.log(e.target)
                      console.log(e.target.hidden = true)
                    }
                }}>
                Delete
                </button>
            </div>
            ))
          }
      </div>
    )
}