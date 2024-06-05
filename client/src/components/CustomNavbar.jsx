import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import React, { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { useNavigate, Link } from 'react-router-dom';

const CustomNavbar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{ color: 'white' }} to={SHOP_ROUTE}>NEWEST...</Link>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>

                        <Button
                            style={{ marginLeft: 10 }}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default CustomNavbar;
