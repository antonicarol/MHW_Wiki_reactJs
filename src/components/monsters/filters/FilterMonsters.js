import React, { useContext } from 'react';
import {Container, Form, Accordion, Card, Button } from 'react-bootstrap';
import {filtersSpecies} from '../../data/filtersData';
import { MonstersContext } from '../../../contexts/MonstersContext';


const FilterMonsters = ({}) => {
    const{type, species, handleSetType, handleSetSpecie} = useContext(MonstersContext);
    
    const speciesFilters = filtersSpecies;
    return ( 
        <>
        <div className="row">
        <div className="col-3">
            <h4 className="text-center"> Type </h4>
            <button onClick={()=> handleSetType('small')} type='button'
            disabled={type==='small'}> SMALL</button>
            <button  onClick={()=> handleSetType('large')}  type='button'
            disabled={type==='large'}> LARGE</button>
        </div>
        <div className="col-8">
        <h4 className="text-center"> Species </h4>
                
                 {speciesFilters.map(sp =>{
                    return sp.map(s=>{
                        return <Button 
                         onClick={()=>handleSetSpecie(s)} type="button">{s}</Button>
                        
                    })
                })} 
            </div>
            </div>

        </>
    );
}
 
export default FilterMonsters;