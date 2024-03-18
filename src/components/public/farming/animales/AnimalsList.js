import React from 'react'
import { getCurrentLang } from '../../../../services/LocalStorageService'
import anData from './anData'
import { Link } from "react-router-dom";
import '../ListItems.scss'
import school from '../../../../media/school_add2.jpg'
import milk from '../../../../media/milk1.jpg'

const AnimalsList = () => {
    const currentLang = getCurrentLang()
    return (
        <div className=" mt-5">
            <div className="">
                <div className="content">
                    <div className="gride container">
                        {anData.map((card, i) => {
                            return (
                                <div className="items card my-3">
                                    <Link to="/animaldetail" key={i} style={{textDecoration:"none", textAlign:"center"}}>
                                        <img src={card.animalimg} alt="" className='logo' srcset="" />
                                        <h6 className="text-center text mt-2">{currentLang.language==="mr" ?  card.anName_mr : card.anName_en}</h6>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="pt-5 pb-3">
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
                    <div className="advertise">
                        <img src={milk} className='add'  alt="" srcset="" />
                        <img src={school} className='add'  alt="" srcset="" />
                        <img src={milk} className='add'  alt="" srcset="" />
                        <img src={school} className='add'  alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimalsList