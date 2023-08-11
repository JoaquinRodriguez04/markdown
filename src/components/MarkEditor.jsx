import React, { useContext } from 'react'
import { MarkContext } from './markContext';
import WidgetVisibility from './widgetVisibility';
import WidgetVisibility2 from './WidgetVisibility2';

const MarkEditor = () => {

  const {
    setMarkContent, 
    markContent,
    previewDesktop
  } = useContext(MarkContext);

  const handleEditorChange = (e) => {
    setMarkContent(e.target.value);
  };

  return (
    // retornando el componente que renderiza el editor donde el usuario creara su documento
    <section 
      className={`mark-editor ${previewDesktop && 'border-hidden mark-editor-hidden'}`}>
      <div className='markdown-top'>
        <span className='markdown-title'>MARKDOWN</span>

        {/* renderizando el WidgetVisibility2 /funcionara en mobile/ ==> cuando el media querie funcione(max-width:900px) el widget aparecera ya que por defecto esta en display: none, cuando llega a 900px cambia a display: block, para que el usuario pueda seguir haciendo show del preview */}
        <WidgetVisibility2/>  
    
        {/* renderizando el WidgetVisibility /funcionara en desktop/ ==> este se encargara de efectuar el show para alternar el componente MarkPreview cuando este se oculte ya que el widget tambien desaparecera */}
        {previewDesktop && <WidgetVisibility/>}  
      </div>
      <div className='mark-renders-wrapper'>
        {/* con el textarea se podra recuperar la informacion o palabras que el usuario escriba */}
        <textarea 
          onChange={handleEditorChange}
          placeholder='## Welcome to Markdown'
          spellCheck='false'
          className='editor-text'
          value={markContent}></textarea>
      </div>
    </section>
  )
};

export default MarkEditor;