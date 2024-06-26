import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../main';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup style={{cursor: 'pointer'}}>
            {device.types.map(type => 
                <ListGroup.Item 
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;