import { createContext, useEffect, useState } from "react";

export const MarkContext = createContext();

const documentLS = localStorage.getItem('document') || '';
const documentNameLS = localStorage.getItem('name') || 'welcome';

export const MarkProvider = ( {children} ) => {

    // estado para renderizar las palabras que ingrese el usuario
    const [markContent, setMarkContent] = useState(documentLS);

    // estado para renderizar el nombre del documento
    const [nameDocument, setNameDocument] = useState(documentNameLS); 

    // estado para indicarle al useeffect que cuando cambie el saved se vuelva a hacer el localStorage para guardar el documento del usuario(el el setSaved lo pasamos en FormDocument, en la funcion que guarda el nombre)
    const [saved, setSaved] = useState(false);
    
    // estado para hacer el show del modal para confirmar borrar del documento
    const [confirm, setConfim] = useState(false);

    // estado para los preview de las diferentes resoluciones(desktop and mobile)
    const [previewDesktop, setPreviewDesktop] = useState(false);  

    useEffect(() => {
        localStorage.setItem('document', markContent);
        localStorage.setItem('name', nameDocument);
    }, [nameDocument, saved]);
    
    const handleDelete = () => {
        setMarkContent('');
        setNameDocument('document');
        setConfim(false);
    }

    const handlePreviewDesktop = () => {
        setPreviewDesktop(!previewDesktop);
    }

    return (    
        <MarkContext.Provider value={{
            markContent, 
            setMarkContent,
            nameDocument,
            setNameDocument,
            handleDelete,
            confirm,
            setConfim,
            saved,
            setSaved,
            previewDesktop, 
            setPreviewDesktop,
            handlePreviewDesktop
        }}>
            {children}
        </MarkContext.Provider>
    ) 

};