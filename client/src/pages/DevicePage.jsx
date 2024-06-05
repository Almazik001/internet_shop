import React from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import BigStar from '../assets/BigStar.png'

const DevicePage = () => {

    const device = { id: 1, name: 'Apple Iphone 12 Pro', price: '120000', rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202834000' };
    const description = [
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '12мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Кол-во ядро', description: '2'},
        {id:5, title: 'Аккамулятор', description: '4000'},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${BigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                        
                        >
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card 
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} тенге.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-5'>
                <h1>Характеристики</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}, {info.description}
                    </Row>
                )}
            </Row>  

        </Container>
    );
};

export default DevicePage;