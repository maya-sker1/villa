import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import S_img1 from '../../assets/Image/s_img2.jpg'
import S_img2 from '../../assets/Image/s_img3.jpg'
import S_img3 from '../../assets/Image/s_img1.jpg'
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={S_img1} alt='' className='image' />

        <Carousel.Caption>
            <div><p>Toronto,<span>Canada</span></p></div>
          
          <h3>HURRY! GET THE BEST VILLA FOR YOU</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={S_img2} alt='' className='image' />
        <Carousel.Caption>
          <p>Melbourne,<span>Australia</span></p>
          <h3>BE QUICK! GET THE BEST VILLA IN TOWN</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={S_img3} alt='' className='image' />

        <Carousel.Caption>
          <p>Miami,<span>South Florida</span></p>
          <h3>ACT NOW! GET THE HIGHEST LEVEL PENTHOUSE</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;