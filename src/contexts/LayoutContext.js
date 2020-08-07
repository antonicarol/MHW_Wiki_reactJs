import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
    const[module, setModule] = useState('');
    const[page,setPage] = useState('');
    const[seeAs, setSeeAs] = useState('');

    const handleSetPage = (page) =>{
        setPage(page);
    }
    const handleSetSeeAs = (page) =>{
        setSeeAs(page);
    }
    const handleSetModule=(module) =>{
        setModule(module)
    }
    return ( 
        <LayoutContext.Provider value={{page, seeAs, module
        ,handleSetPage, handleSetSeeAs, handleSetModule}}>
            {props.children}
        </LayoutContext.Provider>
     );
}
 
export default LayoutContextProvider;