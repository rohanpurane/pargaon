import React from 'react'
import './LatestUpdates.scss'
import ban from '../../../media/ban3.jpg'
import school from '../../../media/school_add.jpg'
import cold from '../../../media/cold_storage2.jpg'
import milk from '../../../media/milk1.jpg'
import { Link } from "react-router-dom";

const LatestUpdates1 = () => {

  return (
    <div>
        <div class="top-news">
            <div class="container-fluid pt-5">
                <div class="row align-items-center justify-content-center">
                    {/* <h2 className="text-center text py-5">गावातील ताज्या बातम्या आणि अपडेट्स</h2> */}
                    <div class="col-md-7 tn-left">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tn-img">
                                    <Link to="/latestupdatesdetails" style={{textDecoration:"none"}}>
                                        <img src={ban} />
                                        <div class="tn-content">
                                            <div class="tn-content-inner">
                                                <a class="tn-date" href=""><i class="far fa-clock"></i>05-Feb-2020</a>
                                                <a class="tn-title" href="">Integer faucibus pharetra odio</a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tn-img">
                                    <Link to="/latestupdatesdetails" style={{textDecoration:"none"}}>
                                        <img src={ban} />
                                        <div class="tn-content">
                                            <div class="tn-content-inner">
                                                <a class="tn-date" href=""><i class="far fa-clock"></i>05-Feb-2020</a>
                                                <a class="tn-title" href="">Integer faucibus pharetra odio</a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tn-img">
                                    <Link to="/latestupdatesdetails" style={{textDecoration:"none"}}>
                                        <img src={ban} />
                                        <div class="tn-content">
                                            <div class="tn-content-inner">
                                                <a class="tn-date" href=""><i class="far fa-clock"></i>05-Feb-2020</a>
                                                <a class="tn-title" href="">Integer faucibus pharetra odio</a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tn-img">
                                    <Link to="/latestupdatesdetails" style={{textDecoration:"none"}}>
                                        <img src={ban} />
                                        <div class="tn-content">
                                            <div class="tn-content-inner">
                                                <a class="tn-date" href=""><i class="far fa-clock"></i>05-Feb-2020</a>
                                                <a class="tn-title" href="">Integer faucibus pharetra odio</a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="py-3 ">
                                <nav aria-label="Page navigation ">
                                    <ul class="pagination align-items-center justify-content-center">
                                        <li class="page-item"><a class="page-link paginate" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link paginate" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link paginate" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link paginate" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link paginate" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>      
                        </div>
                    </div>
                    <div className="col-md-3    ">
                        <img src={milk} width='100%' style={{padding:'1rem'}} alt="" srcset="" />
                        <div className="flex-wrap">
                            <img src={school} width='50%' height='350pxl' style={{padding:'.5rem'}} alt="" srcset="" />
                            <img src={cold} width='50%' height='350pxl' style={{padding:'.5rem'}} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestUpdates1