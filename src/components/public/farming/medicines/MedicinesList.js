import React from 'react'
import { getCurrentLang } from '../../../../services/LocalStorageService'
import '../ListItems.scss'
import { Link } from "react-router-dom";
import { mdData } from './mdData'
import school from '../../../../media/school_add2.jpg'
import milk from '../../../../media/milk1.jpg'

const MedicinesList = () => {
    const currentLang = getCurrentLang()
    return (
        <div className=" mt-5">
            <div className="">
                <div className="content">
                    <div className="gride container">
                    {mdData.map((card, i) => {
                        return (
                            <Link to="/birddetail" key={i} style={{textDecoration:"none", textAlign:"center"}}>
                                <div className="items card my-3">
                                    <img src={card.medicineimg} alt="" className='logo' srcset="" />
                                    <h6 className="text-center text mt-2">{currentLang.language==="mr" ?  card.mdName_mr : card.mdName_en}</h6>
                                </div>
                            </Link>
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

export default MedicinesList