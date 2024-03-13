import React from 'react'
import './Properties_Section.css'
import Card_Item from '../Card_Item/Card_Item'
import im1 from '../../assets/Image/01.jpg'
import im2 from '../../assets/Image/02.jpg'
import im3 from '../../assets/Image/03.jpg'
import im4 from '../../assets/Image/04.jpg'
import im5 from '../../assets/Image/05.jpg'
import im6 from '../../assets/Image/06.jpg'
const Properties_Section = () => {
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
    <div className='properties'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 offset-lg-4'>
                    <div className='head_properties text-center'>
                        <h6>| Properties</h6>
                        <h2>We Provide The Best Property You Like</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                {
                    villas.map( (element)=> { 
                        return(
                            <div className='col-lg-4 col-md-6'>
                                <h4>
                                    <Card_Item img={element.img} type={element.type} price={element.price} 
                                    compare={element.compare} Bedrooms={element.Bedrooms} Bathroom={element.Bathroom} 
                                    Area={element.Area} Floor={element.Floor} Parking={element.Parking} />
                                </h4>
                            </div>

                        )}
                    )
                 }
            </div>
        </div>
    </div>
  )
}

export default Properties_Section