import React, { useContext } from 'react';
import { MonstersContext } from '../../../contexts/MonstersContext';
import { Table } from 'evergreen-ui';
import MonsterRow from './MonsterRow';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Specie',
      dataIndex: 'specie',
    },
  ];

const MonstersAsTable = () => {
    const{resolvedData} = useContext(MonstersContext)
    console.log(resolvedData)
    return ( 
    <div className="row justify-content-between">

    <Table width={'100%'}>
    <Table.Head>
    <Table.TextHeaderCell>
        Name
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
      Type
    </Table.TextHeaderCell>
    <Table.TextHeaderCell>
      Specie
    </Table.TextHeaderCell >
  </Table.Head>
  <Table.Body height={240}>
   {resolvedData.map(monster => {
       return <MonsterRow key={monster.id} monster={monster}></MonsterRow>
    })}
  </Table.Body>
</Table>

    </div> );
}
 
export default MonstersAsTable;