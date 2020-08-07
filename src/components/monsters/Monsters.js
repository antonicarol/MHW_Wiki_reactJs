import React, { useState, useEffect, useContext } from 'react';
import FilterMonsters from './filters/FilterMonsters';
import { LayoutContext } from '../../contexts/LayoutContext';
import MonstersAsCards from './asCard/MonstersAsCards';
import MonstersContextProvider, { MonstersContext } from '../../contexts/MonstersContext';
import MonstersAsTable from './asTable/MonstersAsTable';


/* 
    HOW TO FETCH A SINGULAR MONSTER BY HIS ID

    `https://mhw-db.com/monsters?q={%22id%22:${id}}` 

    HOW TO FETCH A SINGULAR MONSTER BY HIS Type

    https://mhw-db.com/monsters?q={%22type%22:%22small%22}
*/

const Monsters = () => {
    const{seeAs} = useContext(LayoutContext)
    const{status} = useContext(MonstersContext)
    
    return ( <>
    <MonstersContextProvider>
        <FilterMonsters></FilterMonsters>
        {status === 'error' && (
            <div>Error Feching data</div>
        )}
        {status === 'loading' && (
            <div>Loading Data</div>
        )}
        {status === 'success' && (
            <>
            <div>
            {(seeAs === 'cards') && (<MonstersAsCards></MonstersAsCards>)}
            </div>
            
            <div>
            {(seeAs === 'table') && (<MonstersAsTable></MonstersAsTable>)}
            </div>
            </>
        )}
              
    </MonstersContextProvider>
            </>
    );
}
 
export default Monsters;

/* 
<div className="row justify-content-between">
                <div className="col-4 bg-light">
               <FilterMonsters setType={setType} type={type}
               setSpecie={setSpecie} specie={specie} />
                </div> */