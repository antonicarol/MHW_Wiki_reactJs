import React, { useContext } from 'react';
import { Col, Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import ModalMonsterdetails from '../details/ModalMonsterDetails';
import { MonstersContext } from '../../../contexts/MonstersContext';

const {Meta} = Card;

const MonsterCard = ({monster}) => {
    const imgUrl = `img/monsters/icon/${monster.name}.png`;
    const{openDetailMonster,
      showDetailMonster,
      detailMonster,
      closeDetailMonster} = useContext(MonstersContext);

    const handleOpenModal = () => openDetailMonster(monster);
    return (
      <>
      {showDetailMonster && <ModalMonsterdetails></ModalMonsterdetails>}
        <Card 
         className="my-4 mz-2" avatar={imgUrl} bordered={false}
         >
          <Meta
          title={monster.name}
      avatar={<Avatar onClick={handleOpenModal} src={imgUrl} shape="square" size="large"/>}
      
    />
    
    
      </Card> 
      </>);
}
 
export default MonsterCard;