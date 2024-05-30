import React from 'react';
import { Card, Container, Button, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 400, textAlign: 'center'}} className='p-3' >
                <h2 className='mt-5' >{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-5'
                        placeholder='Введите email...'
                    />
                    <Form.Control 
                        className='mt-2'
                        placeholder='Введите пороль...'
                    />

                    <div className='d-flex flex-column mt-3'>
                        <Button className='mt-2 align-self-center mt-1 mb-5' variant={'outline-success'}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button> 

                        {isLogin ?
                            <div className='mb-5'>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} >Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div className='mb-5'>
                                Есть аккаунта? <NavLink to={LOGIN_ROUTE} >Войдите!</NavLink>
                            </div>
                        }
                    </div>
                </Form>
            </Card>
            
        </Container>
    );
};

export default Auth;