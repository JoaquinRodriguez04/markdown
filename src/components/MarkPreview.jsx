import React, { useContext, useEffect, useState } from 'react'
import { MarkContext } from './markContext'
import WidgetVisibility from './widgetVisibility';

const MarkPreview = () => {

  const {markContent, previewDesktop} = useContext(MarkContext);

  // funcion que calcula la cantidad de asteriscos que recibe como parametro
  const countAsterisks = (line) => {
    const matches = line.match(/^#+/);
    return matches ? matches[0].length : 0;
  };

  // funcion que contiene la logica que retorna las etiquetas segun los signos o caracteres que ingrese el usuario
  const labelsContent = () => {
    const lines = markContent.split('\n');

    return lines.map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      } else {
        const numAsterisks = countAsterisks(line);
        const LabelNumber = numAsterisks > 0 && numAsterisks <= 6 ? `h${numAsterisks}` : 'p';

        const asterisksReplace = line.replace(/^#{1,6}/, '');

        // condicional para retornar punto de color si el line comienza con -
        if (line.startsWith('-')) {
          const pointIncludes = line.includes('-');
          const pointReplace = line.replace('-', '');

          const classPoint = `${pointIncludes ? 'point-color' : ''}`;

          return (
            <LabelNumber key={index}>
              <span 
                key={index} 
                className={ pointIncludes && classPoint}
              >•</span>
               {pointReplace}
            </LabelNumber>
          )           
        }

        // condicional para retornar contenedor(div) si el line comienza con >
        if (line.startsWith('>')) {
          const MayorReplace = line.replace('>', '');

          return (
            <div 
            key={index} 
            className='mayor-sign-wrapper'>
              <div className='mayor-border-color'></div>
              <div className='mayor-content'>{MayorReplace}</div>
            </div>
          )
        }

        // condicional para retornar contenedor(div) si el line comienza con ···
        if ( line.startsWith('···') ){
          const threePoints = line.replace('···', '');

          return (
            <div
            key={index} 
            className='editor-wrapper'>
              <div className='editor-content'>{threePoints}</div>
            </div>
          )
        }

        // retornando etiquetas h segun la cantidad de # que el usuario coloque
        return <LabelNumber key={index}>{asterisksReplace}</LabelNumber>;
      }
    });
  };

  return (
  // retornando el componente que renderiza la previsualizacion del editor del documento
    <div 
      className= {`mark-preview ${previewDesktop && 'mark-preview-hidden mark-preview-visible'}`}>
      <div className='markdown-top'>
        <span className='markdown-title'>PREVIEW</span>
        {/* renderizando el WidgetVisibility /funcionara en desktop/ */}
        <WidgetVisibility/>
      </div>
      <div className='mark-renders-wrapper'>
        {/* el labelContent es la funcion que renderiza toda la logica segun los signos que ingrese el usuario */}
        {labelsContent()}
      </div>
    </div>
  )
};

export default MarkPreview;