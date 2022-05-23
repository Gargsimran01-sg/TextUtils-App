import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
return word.charAt(0).toUpperCase() + word.slice(1)
    }
  return (
    //   props.alert && means if this is null dont move ahead else move ahead and treat everythinh as jabvascript
    // div is added to ensure a height of alert so that it doesn't shift the layout
    <div style={{height : "50px"}}>
   { props.alert && <div className={`alert alert-${props.alert.type} `}role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alert