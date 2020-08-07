import React, { createContext, useState, useEffect } from 'react';
import { usePaginatedQuery } from 'react-query';

export const MonstersContext = createContext();

const fetchMonsters = async (key,t, s) =>{
    console.log(t,s)
    var res = [];
    var url = `https://mhw-db.com/monsters`;

    if(t === ' ' && s === ' '){
        url = `https://mhw-db.com/monsters`;
        res = await fetch(url);
    }
    else{
        if(t !== ' '){
            url = `https://mhw-db.com/monsters?q={%22type%22:%22${t}%22}`;
            res = await fetch(url);
            if(s !== ' '){
                url = `https://mhw-db.com/monsters?q={%22type%22:%22${t}%22,%22species%22:%22${s}%22}`;
                res = await fetch(url);
            }
        }
        else{
            url = `https://mhw-db.com/monsters?q={%22species%22:%22${s}%22}`;
            res = await fetch(url);
        }
        
    }
    return res.json()
}

const MonstersContextProvider = (props) => {
    const [type, setType] = useState(' ');
    const [specie, setSpecie] = useState(' ');
    const {
        resolvedData,
        latestData
        , status } = usePaginatedQuery(['monsters',type,specie], fetchMonsters);
    const[detailMonster, setDetailMonster] = useState({});
    const[showDetailMonster, setShowDetailMonster] = useState(false);
    
    const handleSetType = (type)=>{
    setType(type);
    }
    const handleSetSpecie = (specie)=>{
        setSpecie(specie);
    }
    const openDetailMonster =(monster)=>{
        setDetailMonster(monster);
        setShowDetailMonster(true);
    }
    const closeDetailMonster =()=>{
        setShowDetailMonster(false);
    }
    useEffect(()=>{
        console.log(showDetailMonster)
        fetchMonsters('monster', type, specie); 
      },[type, specie, showDetailMonster])
    return ( 
        <MonstersContext.Provider value={{type, specie,
             resolvedData, status, showDetailMonster, detailMonster,
        handleSetType, handleSetSpecie, openDetailMonster, closeDetailMonster }}>
            {props.children}
        </MonstersContext.Provider>
     );
}
 
export default MonstersContextProvider;