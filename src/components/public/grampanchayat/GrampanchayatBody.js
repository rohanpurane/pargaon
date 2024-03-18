import React from 'react'
import './GrampanchayatBody.scss'
import Cards from './card/Cards'
import XLCard from './card/XLCard'



const GrampanchayatBody = () => {
  return (
    <div>
        <div className="main-content">
            <div className="layout">
                  <XLCard  />
                  <Cards  />
            </div>
        </div>
    </div>
  )
}

export default GrampanchayatBody