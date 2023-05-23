import React from 'react';
import { Card } from 'react-bootstrap';

const CajaDeColor = ({color}) => {
    return (
        <>
            <Card
              bg={color}
              style={{ width: '10rem', height:"10rem" }}
              className="mb-0"
            >
            </Card>     
        </>
    );
};

export default CajaDeColor;