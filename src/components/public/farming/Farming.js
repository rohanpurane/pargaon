import React from 'react'
import './Farming.scss'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import AnimalsList from './animales/AnimalsList'
import BirdsList from './birds/BirdsList'
import VegitablesList from './vegi/VegitablesList'
import MedicinesList from './medicines/MedicinesList'


const Farming = () => {
    return (
        <div className='mt-5 pt-5' >
            <Container className=''>
                <Row className=' align-items-center justify-content-center'>
                    <Tabs justify variant='pills' defaultActiveKey='tab-1' className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mb-5 pb-1'>
                        <Tab eventKey='tab-1' className='text-danger' title='Animals'>
                            <AnimalsList />
                        </Tab>
                        <Tab eventKey='tab-2' title='Birds'>
                            <BirdsList />
                        </Tab>
                        <Tab eventKey='tab-3' title='Vegitables'>
                            <VegitablesList />
                        </Tab>
                        <Tab eventKey='tab-4' title='Medicines'>
                            <MedicinesList />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    )
}

export default Farming