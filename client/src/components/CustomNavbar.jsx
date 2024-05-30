import { Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import React, { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const CustomNavbar = observer(()  => {
    const {user} = useContext(Context)
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE} >NEWEST...</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button>Админ панель</Button>
              <Button style={{marginLeft: 10}} >Выйти</Button>
            </Nav>
          :
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    );
});

export default CustomNavbar;
