import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: '100%', cursor: 'pointer', marginBottom: '20px', padding: 10 }} border="light">
                <Image width="100%" height="auto" src={device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.name.split(' ')[0]}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
