import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { ButtonGroup, Button } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <ButtonGroup className="ms-2 mb-2">
            {device.brands.map(brand => (
                <Button
                    key={brand.id}
                    variant={brand.id === device.selectedBrand?.id ? 'outline-primary' : 'outline-secondary'}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Button>
            ))}
        </ButtonGroup>
    );
});

export default BrandBar;
