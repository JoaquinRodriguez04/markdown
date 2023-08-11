import React, { useContext } from 'react'
import { MarkContext } from './markContext';

const DeleteConfirm = ({handleClose}) => {

    const {handleDelete, nameDocument} = useContext(MarkContext);

    return (
      <section className='delete-confirm-container'>
        <span className="material-symbols-outlined icon-delete">
            { nameDocument === 'document' ? 'error' : 'question_mark'}
        </span>
        <p className='delete-paragraph'>
            {nameDocument === 'document' ? `you don't have any files to delete` : `Are you sure you want to delete the document, you won't be able to recover it`
        }</p>
        { nameDocument !== 'document' && 
            <button 
                className='delete-confirm-btn'
                onClick={() => handleDelete()}
            >delete</button>
        }
        { nameDocument === 'document' && 
        <button 
            className='delete-return-wrapper'
            onClick={handleClose}>
            <span className='material-symbols-outlined'>arrow_left</span>
            <p>return</p>
        </button>
        }
      </section>
    )
};

export default DeleteConfirm;