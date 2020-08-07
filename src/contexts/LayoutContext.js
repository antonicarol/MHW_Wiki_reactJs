import React, { createContext, useState, useEffect } from 'react';

export const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
    const[module, setModule] = useState('');
    const[page,setPage] = useState('');
    const[seeAs, setSeeAs] = useState('cards');

    const handleSetPage = (page) =>{
        setPage(page);
    }
    const handleSetSeeAs=(page) =>{
        setSeeAs(page)
    }
    const toggleSetSeeAs = () =>{
        if(seeAs === 'cards'){
            setSeeAs('table');
        }
        else if(seeAs==='table'){
            setSeeAs('cards')
        }
        
    }
    const handleSetModule=(module) =>{
        setModule(module)
    }
    useEffect(()=>{
        console.log(seeAs)
    },[seeAs])
    return ( 
        <LayoutContext.Provider value={{page, seeAs, module
        ,handleSetPage, handleSetSeeAs,toggleSetSeeAs, handleSetModule}}>
            {props.children}
        </LayoutContext.Provider>
     );
}
 
export default LayoutContextProvider;