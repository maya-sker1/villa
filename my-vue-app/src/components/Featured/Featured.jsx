import './Featured.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f_img from '../../assets/Image/featured_img.jpg'

import List from '../List/List';
import AccordionSection from '../AccordionSection/AccordionSection';
import { Link } from 'react-router-dom';
import icon5 from '../../assets/Image/featured-icon.png'

function Featured() {
  return (
    <Container className='featured container'>
        <Row>
            <Col className='col-lg-4  col-md-12 part1'>
            <img src={f_img} className='img' />
            <Link ><img src={icon5} alt=""  /></Link>
            </Col>
            <Col className='col-lg-4  col-md-12 part2'>
                <h6>| FEATURED</h6>
                <div className='Fhead'>
                    <h2>Best Appartment & Sea View</h2>
                </div>
                
                <div>
                    <AccordionSection />
                </div>
            </Col>

            <Col className='col-lg-4  col-md-12 part3'>
                <List />
            </Col>
        </Row>
    </Container>
  );
}

export default Featured;