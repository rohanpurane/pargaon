import React from 'react'
import './LatestUpdates.scss'
import ban from '../../../media/ban3.jpg'
import { Link } from "react-router-dom";

const LatestUpdates = () => {
  return (
    <div className="upside">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-sm-0">
            <div className="">
                <Link to="/latestupdatesdetails" style={{textDecoration:"none"}}>
                    <img src={ban} className="card-img-top" alt="..." />
                    <div className="card mb-5">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </Link>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="">
              <img src={ban} className="card-img-top" alt="..." />
              <div className="card mb-5">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestUpdates