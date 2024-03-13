import React from 'react'
import './Card_Item.css'
import Button from 'react-bootstrap/Button';
// import img from '../../assets/Image/01.jpg';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Card_Item = ({img ,type ,price ,compare ,Bedrooms ,Bathroom ,Area ,Floor ,Parking}) => {
  return (
    <div className="container">
        <div className="row">
                <Card style={{ width: '18rem' }} className='col-lg-4 card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>
                            <div className='d-flex g-3  top-info'>
                                <span>{type}</span>
                                <h6 className='price'>{price}</h6>
                            </div>
                            <div className='villa-info'>
                                <h4><Link>{compare}</Link></h4>
                            </div>
                        </Card.Title>
                        <Card.Text className='card_text'>
                            <ul>
                                <li>
                                    Bedrooms: 
                                    <span>{Bedrooms}</span>
                                </li>
                                <li>
                                    Bathroom: 
                                    <span>{Bathroom}</span>
                                </li>
                                <li>
                                    Area: 
                                    <span>{Area}</span>
                                </li>
                                <li>
                                Floor: 
                                    <span>{Floor}</span>
                                </li>
                                <li>
                                    Bedrooms: 
                                    <span>{Parking}</span>
                                </li>
                            </ul>
                        </Card.Text>
                        <Link>                       
                            <Button variant="primary" className='button'>Schedule a visit</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

    </div>
  )
}

export default Card_Item