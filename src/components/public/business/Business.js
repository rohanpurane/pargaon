import * as React from "react";
import ban from '../../../media/ban3.jpg'
import milk from '../../../media/milk1.jpg'
import school from '../../../media/school_add.jpg'
import school2 from '../../../media/school_add2.jpg'
import cold from '../../../media/cold_storage2.jpg'
import { Link } from "react-router-dom";
// import './latestUpdateDetails/LatestUpdateDetails'
import './Business.scss'

function Business() {
    return (
        <div className="container my-5 pt-5">
            <div className="row">

                <div className="cardcontainer mb-5 col-sm-8 ">
                    <div className="blog-post mb-4">
                        <div className="blog-post-img">
                            <img src={ban} alt="" srcset="" />
                        </div>
                        <div className="blog-post-info">
                            <div className="blog-post-date">
                                <span className="">Sunday </span>
                                <span className="">October 27 2019</span>
                            </div>
                            <h1 className="blog-post-title ">Shark Sighting</h1>
                            <p className="blog-post-text ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum harum facere molestiae dicta, aliquid alias a laudantium repellendus! Nesciunt harum debitis veritatis maiores ab molestiae voluptas ea aut corporis.
                            </p>
                            <Link to="/businessdetail" className="blog-post-cta" style={{textDecoration:"none"}}>Read More</Link>
                        </div>
                    </div>
                    <div className="blog-post mb-4">
                        <div className="blog-post-img">
                            <img src={ban} alt="" srcset="" />
                        </div>
                        <div className="blog-post-info">
                            <div className="blog-post-date">
                                <span className="">Sunday </span>
                                <span className="">October 27 2019</span>
                            </div>
                            <h1 className="blog-post-title ">Shark Sighting</h1>
                            <p className="blog-post-text ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum harum facere molestiae dicta, aliquid alias a laudantium repellendus! Nesciunt harum debitis veritatis maiores ab molestiae voluptas ea aut corporis.
                            </p>
                            <Link to="/businessdetail" className="blog-post-cta" style={{textDecoration:"none"}}>Read More</Link>
                        </div>
                    </div>
                    <div className="blog-post mb-4">
                        <div className="blog-post-img">
                            <img src={ban} alt="" srcset="" />
                        </div>
                        <div className="blog-post-info">
                            <div className="blog-post-date">
                                <span className="">Sunday </span>
                                <span className="">October 27 2019</span>
                            </div>
                            <h1 className="blog-post-title ">Shark Sighting</h1>
                            <p className="blog-post-text ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum harum facere molestiae dicta, aliquid alias a laudantium repellendus! Nesciunt harum debitis veritatis maiores ab molestiae voluptas ea aut corporis.
                            </p>
                            <Link to="/businessdetail" className="blog-post-cta" style={{textDecoration:"none"}}>Read More</Link>
                        </div>
                    </div>
                    <div className="blog-post mb-4">
                        <div className="blog-post-img">
                            <img src={ban} alt="" srcset="" />
                        </div>
                        <div className="blog-post-info">
                            <div className="blog-post-date">
                                <span className="">Sunday </span>
                                <span className="">October 27 2019</span>
                            </div>
                            <h1 className="blog-post-title ">Shark Sighting</h1>
                            <p className="blog-post-text ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum harum facere molestiae dicta, aliquid alias a laudantium repellendus! Nesciunt harum debitis veritatis maiores ab molestiae voluptas ea aut corporis.
                            </p>
                            <Link to="/businessdetail" className="blog-post-cta" style={{textDecoration:"none"}}>Read More</Link>
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

                <div className="col-md-4">
                    <img src={milk} width='100%' style={{padding:'1rem'}} alt="" srcset="" />
                    <div className="flex-wrap">
                        <img src={school} width='50%' height='350pxl' style={{padding:'.5rem'}} alt="" srcset="" />
                        <img src={cold} width='50%' height='350pxl' style={{padding:'.5rem'}} alt="" srcset="" />
                    </div>
                    <img src={school2} width='100%' style={{padding:'1rem'}} alt="" srcset="" />
                </div>
            </div>

        </div>
    );
}
export default Business;