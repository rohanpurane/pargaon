// import { useEffect, useState } from 'react';
// import get_card_data from '../../../../services/ApiCard'
import { gramData } from './gramData'
import { getCurrentLang } from '../../../../services/LocalStorageService'
import './Cards.scss'

function Cards() {
    const currentLang = getCurrentLang()
    // const [carddata, setCarddata] = useState([])
    // useEffect(() => {
    //     let mount = true
    //     get_card_data()
    //     .then(res => {
    //     setCarddata(res)
    //     return() => mount = false
        
    //     })
    // }, [])
  return (
    <div className="">
            <div className=" mt-5">
                <div className="">
                    <div className="">
                        <div className="grid container">
                            {gramData.map((card,i) =>{
                            return (
                                    <div className="item  my-3" key={i}>
                                        <img src={card.avatar} alt="" className='logo' srcset="" />
                                        <h4 className='text-center mytext mt-2'>{currentLang.language==="mr" ?  card.emName_mr : card.emName_en}</h4>
                                        <h5 className='text-center mytext '>{currentLang.language==="mr" ?  card.designation_mr : card.designation_en}</h5>
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

export default Cards;


