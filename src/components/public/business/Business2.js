import React, { useEffect } from 'react'
import './Business.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Business = () => {
useEffect(()=>{
    Aos.init({duration:"1500"})
},[])
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="card-group vgr-cards">
                    <div className="card" data-aos="fade-right">
                        <div className="card-img-body">
                            <img className="card-img" src="https://picsum.photos/500/230" alt="Card image cap" />
                        </div>
                        <div className="card-body p-4">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little
                                bit longer.</p>
                            <a href="#" className="btn btn-outline-primary">Primary</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-left">
                        <div className="card-img-body">
                            <img className="card-img" src="https://picsum.photos/500/230" alt="Card image cap" />
                        </div>
                        <div className="card-body p-4">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little
                                bit longer.</p>
                            <a href="#" className="btn btn-outline-primary">Primary</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Business