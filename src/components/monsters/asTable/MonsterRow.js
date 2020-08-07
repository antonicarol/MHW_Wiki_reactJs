import React, { useContext } from 'react';
import { Table, Tab } from 'evergreen-ui';
import Avatar from 'antd/lib/avatar/avatar';
import { MonstersContext } from '../../../contexts/MonstersContext';
import ModalMonsterDetail from '../details/ModalMonsterDetails';

const MonsterRow = ({monster}) => {
    const imgUrl = `img/monsters/icon/${monster.name}.png`;
    const{openDetailMonster,showDetailMonster
        } = useContext(MonstersContext);

    const handleOpenModal = ()=>{
        openDetailMonster(monster);
    }
    return (
        <>
        {showDetailMonster && <ModalMonsterDetail></ModalMonsterDetail>}
        <Table.Row  isSelectable onSelect={handleOpenModal}>
            <Table.TextCell>{monster.name}</Table.TextCell>
            <Table.TextCell>{monster.type}</Table.TextCell>
            <Table.TextCell>{monster.species}</Table.TextCell>
            <Table.Cell><Avatar src={imgUrl} shape="square" size="small"/></Table.Cell>
        </Table.Row>
        </>
     );
}
 
export default MonsterRow;