import React from 'react';
import { Card } from 'react-bootstrap';

const CajaDeColor = ({variant}) => {
    return (
        <>
        {[
            'Primary',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              style={{ width: '10rem', height:"10rem" }}
              className="mb-0"
            >
            </Card>
          ))}
        </>
    );
};

export default CajaDeColor;