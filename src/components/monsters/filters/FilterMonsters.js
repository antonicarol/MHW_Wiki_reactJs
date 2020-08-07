import React, { useContext } from 'react';
import {Container, Form, Accordion, Card} from 'react-bootstrap';
import {filtersSpecies} from '../../data/filtersData';
import { MonstersContext } from '../../../contexts/MonstersContext';
import { Button, Collapse } from 'antd';


const { Panel } = Collapse;



const FilterMonsters = ({}) => {
    const{type, species, handleSetType, handleSetSpecie} = useContext(MonstersContext);
    
    const speciesFilters = filtersSpecies;
    return ( 
        <>
        <Collapse defaultActiveKey={['1']}>
            <Panel header="See Filters" key="1">
            <div className="row">
        <div className="col-4">
            <Button value="primary" onClick={()=>{
                handleSetType(' ');
                handleSetSpecie(' ');
            }}>Clear Filters</Button>
            
            <div className="border p-0 m-0 mt-2 d-flex flex-row">
            <span className="badge bg-info"> Type </span>
            
            <Button size="small"
             onClick={()=> handleSetType('small')} type='button'
            disabled={type==='small'}> SMALL</Button>
            <Button  size="small"
             onClick={()=> handleSetType('large')}  type='button'
            disabled={type==='large'}> LARGE</Button>
            </div>
        </div>
        <div className="col-8">
        <div className="border p-2 m-0">
        <h4 className="text-center"> Species </h4>
                
                {speciesFilters.map(sp =>{
                    return <div className="m-0 p-2 d-flex flex-row justify-content between">
                        {sp.map(s=>{
                       return(
                            <Button size="small" onClick={()=>handleSetSpecie(s)} style={{fontSize:'0.72rem'}}
                             type='button'  disabled={species===s}>{s}</Button>
                        
                       )
                   })}
                   </div>
               })}  </div>
            </div>
            </div>
             
        </Panel>
        
            </Collapse>
        </>
    );
}
 
export default FilterMonsters;