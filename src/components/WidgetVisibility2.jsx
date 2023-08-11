import React, { useContext } from 'react'
import { MarkContext } from './markContext';

const WidgetVisibility2 = () => {

    const {handlePreviewDesktop} = useContext(MarkContext);

    return (
      <span 
          className="material-symbols-outlined icon visibility-icon hidden-icon"
          onClick={handlePreviewDesktop}>
          visibility
      </span>
    )
};

export default WidgetVisibility2;