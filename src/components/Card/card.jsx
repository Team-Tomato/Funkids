import React from "react";
import { Card} from 'react-bootstrap';
import Button from "../Button";
import logo from '../../logo2.png';



function CardComponent({title,content,buttonLabel}){

    return(
        <Card style={{width: '18rem'}} className="root">

            {/* <Card.Img variant="top" src={logo} className="root-img" /> */}
            <Card.Body>
                <Card.Title>{title ? title : 'Click Me'}</Card.Title>
                <Card.Text>
                    {content ? content : 'card-body'}
                </Card.Text>
                <Button
                    onClick=''
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