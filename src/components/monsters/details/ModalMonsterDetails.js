import React, { useContext } from 'react';
import {MonstersContext} from '../../../contexts/MonstersContext';
import { Modal } from 'react-bootstrap';


const ModalMonsterdetails = () => {
    const{showDetailMonster,
        detailMonster,
        closeDetailMonster} = useContext(MonstersContext);
    
        const handleClose = () => closeDetailMonster();
    return (
    <Modal show={showDetailMonster} onHide={handleClose} size='lg'>
        <Modal.Header>
            <Modal.Title>
                <div className="d-flex flex-row">
                    <h1>{detailMonster.name}</h1>
                    <div>
                        <h5 className="ml-5"> {detailMonster.type}</h5>
                        <h5 className="ml-5"> {detailMonster.species}</h5>
                    </div>
                </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-4">
                    <p>{detailMonster.description}</p>
                    <h2>Located in : </h2>
                    <ul>
                        {detailMonster.locations.map(loc =>{
                            return <li key={loc.id}> {loc.name} </li>
                        })}
                    </ul>
                    <h4> Rewards: </h4>
                    <ul className="small">
                        {detailMonster.rewards.map(rew =>{
                            return <li key={rew.id}>{rew.item.name}</li>
                        })}
                    </ul>
                    
    
                    </div>
                    <div className="col-3">
                    <h4>Weakness :</h4>
                    
                    <ul className="small">
                        {detailMonster.weaknesses.map(weak =>{
                            return <li key={weak.id}>{weak.element}</li>
                        })}
                    </ul>
                    <h4> Resistances </h4>
                    <ul className="small">
                        {detailMonster.resistances.map(res =>{
                            return <li key={res.id}>{res.element}</li>
                        })}
                    </ul>
                    </div>
            </div>
            
        </Modal.Body>
    </Modal> );
}
 
export default ModalMonsterdetails;