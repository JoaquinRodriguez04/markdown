import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { MarkContext } from './markContext';

const FormDocument = ({setActive}) => {

  const{setNameDocument} = useContext(MarkContext);
  const {register, handleSubmit} = useForm();

  const save = (data) => {
    setNameDocument(data.name);
    setActive(false);
  }

  return (
    <div className='form-name-document-wrapper'>
      <form 
      className='form-document'
      onSubmit={handleSubmit(save)}>
        <label className='form-label'>
          save your document name
          <span className='material-symbols-outlined icon-save'>save</span>
        </label>
        <input 
        type="text" 
        {...register('name')}/>
        <button>save</button>
      </form>
    </div>
  )
};

export default FormDocument;