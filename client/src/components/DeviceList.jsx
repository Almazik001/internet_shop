import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../main';
import DeviceItem from './DeviceItem';
import { Row, Col, Container } from 'react-bootstrap';

const DeviceList = observer(() => {
    const { device } = useContext(Context);
    return (
        <Container>
            <Row>
                {device.devices.map(device => (
                    <Col key={device.id} xs={12} sm={6} md={4} lg={3}>
                        <DeviceItem device={device} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
});

export default DeviceList;
