import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel } from 'react-bootstrap';  
import { useEffect, useState } from 'react';
import { getCurrentLang } from '../../../../services/LocalStorageService'
import get_img_data from '../../../../services/ApiCarousel'
// import './Mycarousel.scss'

function MyCarousel() {
  const [imgdata, setImgdata] = useState([])
  
  const currentLang = getCurrentLang()
  useEffect(() => {
    let mount = true
    get_img_data()
    .then(res => {
      setImgdata(res)
      return() => mount = false
    })
  }, [])
  
  return (
    <>
      <div className='mt-5'> 
        <Carousel className='carousel-bg'>
          {imgdata.map(mydata => {
          return <Carousel.Item key={mydata.id}>  
          <img style={{maxHeight:"90vh"}} className="d-block w-100" src={mydata.image} alt="First slide"/>  
            <Carousel.Caption>  
              <h3>{currentLang.language==="mr" ?  mydata.title_mr : mydata.title_en}</h3>  
              <p>{currentLang.language==="mr" ?  mydata.description_mr : mydata.description_en}</p>  
            </Carousel.Caption>  
          </Carousel.Item> 
        })}
        </Carousel>
      </div>  
    </>
  )
}  
export default MyCarousel;  