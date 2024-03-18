import React, { useEffect } from "react";
import "./Hero.scss";
import temp from "../../../../media/temp2.png";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { getCurrentLang } from '../../../../services/LocalStorageService'
import { heroData } from '../HomeData'

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: "1500",
      // once: true,
      disable: 'mobile'
    })
  }, [])
  const currentLang = getCurrentLang()
  return (
    <div className="Intro">
      <div className='container'>
        <section class="main-banner" >
          <div class="container" style={{ minHeight: "100vh" }}>
            <div class="row">
              <div class="col-lg-5 align-self-center" data-aos="fade-right">
                {heroData.map((card, i) => {
                  return (
                    <div class="header-text" key={i}>
                      <h2 className="text-center heading">{currentLang.language === "mr" ? card.heading1_mr : card.heading1_en}</h2>
                      <h1 className="text-center heading2">{currentLang.language === "mr" ? card.heading2_mr : card.heading2_en}<br /> <span className="heading2">{currentLang.language === "mr" ? card.heading3_mr : card.heading3_en}</span></h1>
                    </div>
                  )
                })}
              </div>
              <div class="col-lg-7" data-aos="fade-left">
                <div class="right-image" >
                  <img src={temp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
