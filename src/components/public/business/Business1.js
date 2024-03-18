import React from 'react'
import './Business.scss'
import  { Container, Row, Tabs, Tab } from 'react-bootstrap'
// import ban from '../../../media/ban3.jpg'


const Business = () => {
    const data = [
    {'menu':'Shops', 'name':'Hello MyWorld 1'}, 
    {'menu':'Business', 'name':'Hello MyWorld 2'}, 
    {'menu':'Farmers', 'name':'Hello MyWorld 3'}, 
    {'menu':'Clinics', 'name':'Hello MyWorld 4'}]

  return (
    <div className=" container upside">
      <Container className='py-2'>
            <Row className=' align-items-center justify-content-center'>
                <Tabs justify variant='pills' defaultActiveKey='tab-1' className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mb-5 pb-1'>
                {data.map((card, i) => {
                  
                  return (
                    
                    <Tab eventKey={`tab-${i}`} key={i} title={card.menu}>
                      <h5 className="text-center my-5">{card.name}</h5>
                    </Tab>
                  )
                })}
              
                </Tabs>
            </Row>
        </Container>
    </div>
  )
}

export default Business