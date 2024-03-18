import './Cards.scss'
import {sarpanchData} from './gramData'
import { getCurrentLang } from '../../../../services/LocalStorageService'

function XLCard() {
    const currentLang = getCurrentLang()
    return (
        <div className="">
            <div className=" mt-5">
                <div className="">
                    <div className="container">
                        <div className="row">
                        {sarpanchData.map((card,i) =>{
                            return (
                            <div className=" xlgrid my-3">
                                <img src={card.sarpanch} alt="" className='logo' srcset="" />
                                <h4 className='text-center mytext mt-2'>{currentLang.language==="mr" ?  card.emName_mr : card.emName_en}</h4>
                                <h5 className='text-center mytext'>{currentLang.language==="mr" ?  card.designation_mr : card.designation_en}</h5>
                            </div>
                        )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default XLCard;


