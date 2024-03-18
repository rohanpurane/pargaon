import React,{useEffect} from 'react'
import ReactPlayer from 'react-player'
import video from '../../../../media/video.mp4'
import './VideoCard.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { getCurrentLang } from '../../../../services/LocalStorageService'
import { videoData } from '../HomeData'


const VideoCard = () => {
    useEffect(()=>{
        Aos.init({duration:"1500",
            // once:true,
            disable: 'mobile'
        })
    },[])
    const currentLang = getCurrentLang()
  return (
    <div>
        <div class="">
            <div class="container mt-5 pt-5">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center justify-content-center " >
                        <ReactPlayer width="100%" className="video-space "data-aos="fade-right" height="100%" url={video} controls='true' />
                    </div>
                    <div class="col-lg-6 d-flex align-items-center justify-content-center ">
                        {videoData.map((card,i) =>{
                            return (
                                <div class="video-text video-space" data-aos="fade-left" key={i}>
                                    <p class="marathi2">{currentLang.language==="mr" ?  card.date_mr : card.date_en}</p>
                                    <h2 className='display-6 font-weight-bold marathi1'>{currentLang.language==="mr" ?  card.title_mr : card.title_en}</h2>
                                    <p className='marathi2'>{currentLang.language==="mr" ?  card.desc_mr : card.desc_en}</p>
                                </div>
                                )
                                })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard