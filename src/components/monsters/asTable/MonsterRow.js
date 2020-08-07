import React from 'react';
import { Table, Tab } from 'evergreen-ui';


const MonsterRow = ({monster}) => {
    return ( 
        <Table.Row  isSelectable>
            <Table.TextCell>{monster.name}</Table.TextCell>
            <Table.TextCell>{monster.type}</Table.TextCell>
            <Table.TextCell>{monster.species}</Table.TextCell>
        </Table.Row>
     );
}
 
export default MonsterRow;