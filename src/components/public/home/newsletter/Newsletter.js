import React,{useEffect} from "react";
import ban from '../../../../media/ban3.jpg'
import { newsletter1 } from "./NewsletterData";
import './Newsletter.scss'
import { useState } from 'react'
import Modal from './Modal'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Newsletter() {
  useEffect(()=>{
    Aos.init({duration:"1500",
            // once:true,
            disable: 'mobile',
            })
  },[])

  const [showModal, setShowModal] = useState(false);
  const closeModal = () =>setShowModal(false);



  return (
    <div className="container-fluid">
      <div className="row mt-5 pt-5" >
		  <h2 className="text-center text">गावातील काही महत्त्वाचे मुद्दे</h2>
        <div className="col-md-6  d-flex align-items-center justify-content-center">
            <div className="mt-5">
            {newsletter1.map((news, i) => {
              return (
                
                <div onClick={()=> setShowModal(true)}  key={i} id={news.id} className="cardcontainer2 mb-3" data-aos="fade-right">
                  <div className="blog-post2">
                    <div className="blog-post-img2">
                      <img src={news.img} alt="" srcset="" />
                    </div>
                      <div className="blog-post-text2">एकूण लोकसंख्या</div>
                    <div className="blog-post-info2">{news.num}</div>
                  </div>
                </div>
              )
            })}
            {showModal && <Modal  props={{closeModal:{closeModal}, fkey:'1'}} />}
            </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="mt-5">
              <div className="cardcontainer2 mb-3" data-aos="fade-left">
                <div className="blog-post2">
                  <div className="blog-post-img2">
                    <img src={ban} alt="" srcset="" />
                  </div>
                    <div className="blog-post-text2">एकूण लोकसंख्या</div>
                  <div className="blog-post-info2">1551</div>
                </div>
              </div>
              <div className="cardcontainer2 mb-3" data-aos="fade-left">
                <div className="blog-post2">
                  <div className="blog-post-img2">
                    <img src={ban} alt="" srcset="" />
                  </div>
                    <div className="blog-post-text2">एकूण लोकसंख्या</div>
                  <div className="blog-post-info2">1551</div>
                </div>
              </div>
              <div className="cardcontainer2 mb-3" data-aos="fade-left">
                <div className="blog-post2">
                  <div className="blog-post-img2">
                    <img src={ban} alt="" srcset="" />
                  </div>
                    <div className="blog-post-text2">एकूण लोकसंख्या</div>
                  <div className="blog-post-info2">1551</div>
                </div>
              </div>
              
              
            </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;