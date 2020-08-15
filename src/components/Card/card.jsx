import React from "react";
import { Card } from 'react-bootstrap';
import Button from "../Button";


function CardComponent({ title, content, buttonLabel, color, width, onClick }) {

    return (
        <Card
            style={{
                width: width ? width : '18rem',
                marginLeft: '20px',
                backgroundColor: color ? color : 'white'
            }}
        >

            <Card.Body>
                <Card.Title>{title ? title : 'Click Me'}</Card.Title>
                <Card.Text>
                    {content ? content : 'card-body'}
                </Card.Text>
                <Button
                    onClick={onClick}
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--large"
                    className="btn-spacing"
                >
                    {buttonLabel ? buttonLabel : 'Click me'}
                </Button>

            </Card.Body>
        </Card>
    )
}

export default CardComponent;