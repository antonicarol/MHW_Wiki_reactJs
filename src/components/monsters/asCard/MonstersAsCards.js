import React, { useState, useContext } from 'react';
import { usePaginatedQuery } from 'react-query';
import MonsterCard from './MonsterCard';
import { Row } from 'react-bootstrap';
import { MonstersContext } from '../../../contexts/MonstersContext';

const MonstersAsCards = () => {
    const{resolvedData} = useContext(MonstersContext)
    return ( 
        <div className="row justify-content-between">
        
         {resolvedData.map(monster =>{
        return (
            <div className="col-4">
            <MonsterCard key={monster.id} monster={monster}></MonsterCard>
            </div>
        )})}
        </div>
        
     );

}
 
export default MonstersAsCards;