import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
    const [ modalIsVisible, setModalIsVisible ] = useState(false);
    const [ modalAccept, setModalAccept ] = useState(null);
    const [ modalTitle, setModalTitle ] = useState("");

    return (
        <ModalContext.Provider value={{ modalIsVisible, setModalIsVisible, modalAccept, setModalAccept, modalTitle, setModalTitle }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;