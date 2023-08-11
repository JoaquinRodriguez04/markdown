import React from 'react'

const CLoseForm = ({handleClose}) => {
  return (
    <span 
        className="material-symbols-outlined close-icon" 
        onClick={handleClose}
    >close
    </span>
  )
};

export default CLoseForm;