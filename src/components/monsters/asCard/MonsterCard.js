import React from 'react';
import { Col, Card } from 'antd';


const MonsterCard = ({monster}) => {

    return (
        <Card className="my-4 mz-2" title={monster.name} bordered={false}>
        
      </Card> );
}
 
export default MonsterCard;