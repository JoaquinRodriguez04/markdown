import React, { useContext } from 'react';
import { MarkContext } from './markContext';

const WidgetVisibility = () => {

    const {handlePreviewDesktop} = useContext(MarkContext);

    return (
      <span 
          className="material-symbols-outlined icon visibility-icon"
          onClick={handlePreviewDesktop}>
          visibility
      </span>
    )
};

export default WidgetVisibility;