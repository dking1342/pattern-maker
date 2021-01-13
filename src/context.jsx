import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [panel1, setPanel1]=useState('M0 0');
    const [panel2, setPanel2]=useState('M0 0');
    const [panel3, setPanel3]=useState('M0 0');
    const [panel4, setPanel4]=useState('M0 0');
    const [palette, setPalette] = useState([]);

    return(
        <AppContext.Provider value={{
            panel1,
            panel2,
            panel3,
            panel4,
            palette,
            setPanel1,
            setPanel2,
            setPanel3,
            setPanel4,
            setPalette
        }}>
            { children }
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppContext, 
    AppProvider
}