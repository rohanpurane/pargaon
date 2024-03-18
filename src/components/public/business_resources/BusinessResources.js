import React from 'react'
import { getCurrentLang } from '../../../services/LocalStorageService'
import { frData } from './BusinessData'
import { Link } from "react-router-dom";
import './BusinessResources.scss'

const BusinessResources = () => {
    const currentLang = getCurrentLang()
    return (
        <div className=" mt-5 pt-3">
            <div className="">
                <h2 className="text-center text py-5">Business Sources in Village</h2>
                <div className="content">
                    <div className="gride container">
                        {frData.map((card, i) => {
                            return (
                                <div className="item card my-3 text-center align" >
                                    <Link to="/businessresitems" key={i} style={{ textDecoration: "none", textAlign:"center"}}>
                                        <img src={card.fruitimg} alt="" className='logo' srcset="" />
                                        <h6 className="text-center text mt-2">{currentLang.language === "mr" ? card.frName_mr : card.frName_en}</h6>
                                    </Link>
                                </div>
                            )
                        })}
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
        </div>
    )
}

export default BusinessResources
