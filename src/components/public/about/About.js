import React from 'react'
import './About.scss'
import village from '../../../media/village.jpg'
import gram from '../../../media/grampanchayat.jpg'
import { getCurrentLang } from '../../../services/LocalStorageService'
import { aboutVillage, aboutGram } from './AboutData'

const About = () => {
  const currentLang = getCurrentLang()
  return (
    <div className=" container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-sm-10">
          <div className="description-container">
            {aboutVillage.map((card, i) => {
              return (
                <div className="">
                  <div className="village" key={i}>
                    <img src={village} className='img-responsive floating-image left' alt="" srcset="" />
                    <h3 className='text'>{currentLang.language === "mr" ? card.title1_mr : card.title1_en}</h3>
                    <p className='text'>{currentLang.language === "mr" ? card.desc1_mr : card.desc1_en}</p>
                  </div>
                  <div className="gram mt-5" key={i}>
                    <img src={gram} className='img-responsive floating-image right' alt="" srcset="" />
                    <h3 className='text'>{currentLang.language === "mr" ? card.title2_mr : card.title2_en}</h3>
                    <p className='text'>{currentLang.language === "mr" ? card.desc1_mr : card.desc1_en}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About