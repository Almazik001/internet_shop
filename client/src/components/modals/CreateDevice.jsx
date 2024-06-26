import React, { useContext, useState } from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../main';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <div>
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id} >{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='mt-2'>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id} >{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Control 
                    className='mt-2'
                    placeholder='Введите названия устройство'
                    type='text'
                />
                <Form.Control 
                    className='mt-2'
                    placeholder='Введите стоимость устройство'
                    type='number'
                />
                <Form.Control 
                    className='mt-2'
                    type='file'
                />

                <Button 
                    className='mt-2'
                    variant='outline-dark'
                    onClick={addInfo}
                >
                    Добавить новое устройство
                </Button>
                {info.map(i => 
                    <Row className='mt-2' key={i.id}>
                        <Col md={4}>
                            <Form.Control 
                                placeholder='Введите назвния своиство'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder='Введите описания своиство'
                            />    
                        </Col>
                        <Col md={4}>
                            <Button onClick={() => removeInfo(i.number)} variant='outline-danger' >Удалить</Button>
                        </Col>
                    </Row>
                )}
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>

      </Modal.Footer>
    </Modal>
        </div>
    );
};

export default CreateDevice;