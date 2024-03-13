import React from 'react'
import Red_Button from '../Red_Button/Red_Button'
import Black_Button from '../Black_Button/Black_Button'
import './Properties_Pagintion.css'
import Card_Item from '../Card_Item/Card_Item'
import Pagination from 'react-bootstrap/Pagination';
import im1 from '../../assets/Image/01.jpg'
import im2 from '../../assets/Image/02.jpg'
import im3 from '../../assets/Image/03.jpg'
import im4 from '../../assets/Image/04.jpg'
import im5 from '../../assets/Image/05.jpg'
import im6 from '../../assets/Image/06.jpg'

const Properties_Pagintion = () => {
    const villas=[
        {
            img: im1,
            type: "Luxury Villa",
            price : "$2.264.000" ,
            compare : "18 New Street Miami, OR 97219" ,
            Bedrooms: 8 ,
            Bathroom: 8,
            Area:"545m2" ,
            Floor: 3,
            Parking: "6 spots"
        },
        {
            img: im2,
            type: "Luxury Villa",
            price : "$1.180.000" ,
            compare : "54 Mid Street Florida, OR 27001" ,
            Bedrooms: 6 ,
            Bathroom: 5,
            Area:"450m2" ,
            Floor: 3 ,
            Parking: "8 spots"
        },
        {
            img: im3,
            type: "Luxury Villa",
            price : "$1.460.000" ,
            compare : "26 Old Street Miami, OR 38540" ,
            Bedrooms: 5 ,
            Bathroom: 4,
            Area:"225m2" ,
            Floor: 3 ,
            Parking: "10 spots"
        },
        {
            img: im4,
            type: "Apartment",
            price : "$584.500" ,
            compare : "12 New Street Miami, OR 12650" ,
            Bedrooms: 4 ,
            Bathroom: 3,
            Area:"125m2" ,
            Floor:"25th",
            Parking: "2 cars"
        },
        {
            img: im5,
            type: "Penthouse",
            price : "$925.600" ,
            compare : "34 Beach Street Miami, OR 42680" ,
            Bedrooms: 4 ,
            Bathroom: 4,
            Area:"180m2" ,
            Floor: "38th",
            Parking: "2 cars"
        },
        {
            img:im6,
            type: "Penthouse",
            price : "$925.600" ,
            compare : "34 Beach Street Miami, OR 42680" ,
            Bedrooms: 3 ,
            Bathroom: 2,
            Area:"165m2" ,
            Floor: "26th",
            Parking: "3 cars"
        }
    ]
  return (
    <div className='Pagintion '>

        <div className="container">
            <div className="row">
                <div className=' col-lg-6 offset-lg-3'>
                    <div className="buttons">
                        <Red_Button   btnR="Show All" />
                        <Black_Button btnB="Apartment" />
                        <Black_Button btnB="Villa House" />
                        <Black_Button btnB="Penthouse" />
                    </div>
                </div>
            </div>
        </div>
        <div className='container card'>
            <div className='row'>
                {
                    villas.map( (element)=> { 
                        return(
                            <div className='col-lg-4'>
                                <h4>
                                    <Card_Item img={element.img} type={element.type} price={element.price} 
                                    compare={element.compare} Bedrooms={element.Bedrooms} Bathroom={element.Bathroom} 
                                    Area={element.Area} Floor={element.Floor} Parking={element.Parking} />
                                </h4>
                            </div>
                        )}
                    )
                }
                <Pagination className='col-lg-4 offset-lg-4'>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>  
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    
    </div>
  )
}

export default Properties_Pagintion