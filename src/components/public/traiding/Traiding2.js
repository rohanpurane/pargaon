import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchItems, fetchMenus } from '../../../features/itemSlice';
import './Traiding.scss' 

const Traiding = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
      dispatch(fetchMenus());
  }, []);
  
  const getID = (i) =>{
    console.log('ID : ',i)
    dispatch(fetchItems(i));
    
  }
  return (
    <div className="container upside">
      <div className='row py-2 align-items-center justify-content-center'>
        <div className='col-12 col-sm-8'>
          <div className="business">
            <div className='menu'>
                {items.map((card, i) => {
                  return (
                  <> 
                    <Link to="/" style={{textDecoration:"none"}}>
                      <div className="menu-item" onClick={()=>{getID(card.id)}}  key={i}>{card.menu_mr}</div>
                    </Link>
                  </>
                  )
                })} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traiding