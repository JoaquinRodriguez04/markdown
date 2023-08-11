import React, { useContext, useState } from 'react'
import { MarkContext } from './markContext';
import FormDocument from './FormDocument';
import CLoseForm from './CLoseForm';
import DeleteConfirm from './DeleteConfirm';

const MarkNavbar = () => {

  const {
    nameDocument, 
    confirm, 
    setConfim,
    saved,
    setSaved
  } = useContext(MarkContext);
  const [active, setActive] = useState(false);

  const handleShow = () => {
    setActive(!active);
    setSaved(!saved);
  };

  const handleClose = () => {
    setActive(false);
    setConfim(false);
  };

  const handleConfim = () => {
    setConfim(true);
  };

  return (
    // retornando el header(navbar) donde el usuario podra interactuar, borrar su documento si lo desea y guardarlo con el nombre que quiera
    <header className='mark-navbar-container'> 
      <div className='mark-left-wrapper'>
          <button className='mark-navbar-home-bars'>
              <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className='mark-navbar-title'>MARKDOWN</h2>
          <div className='mark-navbar-line'></div>
          <div className='mark-navbar-document-keep'>
            <span className="material-symbols-outlined icon draft-icon">draft</span>
            <div className='document-content'>
              <p className='document-keep-title'>Document name</p>
              <p className='document-keep-name'>{nameDocument}.md</p>
            </div>
          </div>
      </div>
      <div className='mark-right-wrapper'>  
        <button className='mark-btn-delete'>
          <span 
            className="material-symbols-outlined icon icon-delete-navbar"
            onClick={handleConfim}>
            delete
          </span>
        </button>
        <button 
          className='mark-btn-saved'
          onClick={handleShow}>
          <span className="material-symbols-outlined icon-save">save</span>
          <p className='mark-btn-content'>Save Changes</p>
        </button>
      </div>

      {/* renderizando modal para confimar borrar el documento */}
      {confirm && <DeleteConfirm handleClose={handleClose}/>}

      {/* renderizando el 'formulario' donde el usuario guardara su documento */}
      {active && nameDocument === 'document' && <FormDocument setActive={setActive} />}

      {/* renderizando el boton para cerrar el formulario */}
      {active && nameDocument === 'document' && <CLoseForm handleClose={handleClose} />}
    </header>
  )
};

export default MarkNavbar;