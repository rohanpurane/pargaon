import React from "react";
import "./Traiding.scss";
import Carousel from './carousel/Carousel'

const TraidingDetails = () => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="col-lg-8 col-xl-9">
                        <div className="row">
                            <div className="col-lg-6 pt-5 traid-right">
                                <Carousel />
                            </div>
                            <div className="col-lg-6 traid-left">
                                <div class="product-content">
                                    <h2 class="product-title text">Green Grapes</h2>
                                    <a href="#" class="product-link  text">visit Pargaon Sudrik</a>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span className=" text">4.5</span>
                                    </div>

                                    <div class="product-price">
                                        <p class="last-price text">Old Price: <span>Rs.257.0</span></p>
                                        <p class="new-price text">New Price: <span>Rs.249.0 / kg</span></p>
                                    </div>

                                    <div class="product-detail">
                                        <h2 className="text">about this item: </h2>
                                        <p className="text">Some varieties of black grapes are much higher in antioxidants than green or red grapes. These chemical compounds help protect your cells from damage. They protect against diseases like cancer, diabetes, Alzheimer's, Parkinson's, and heart disease. They can also help you heal from illness faster.</p>
                                        {/* <!-- <p>द्राक्षातील पोषक घटक कर्करोग, डोळ्यांच्या समस्या, हृदय व रक्तवाहिन्यासंबंधी रोग आणि इतर आरोग्य परिस्थितींपासून संरक्षण करण्यास मदत करू शकतात. रेस्वेराट्रोल हे द्राक्षातील एक महत्त्वाचे पोषक तत्व आहे जे आरोग्यासाठी फायदे देऊ शकते. द्राक्षे फायबर, पोटॅशियम आणि जीवनसत्त्वे आणि इतर खनिजांचा एक चांगला स्रोत आहेत.</p> --> */}
                                        <ul>
                                            <li className="text">Quantity : <span>20 Tonnes</span></li>
                                            <li className="text">Qaulity : <span>A1</span></li>
                                            <li className="text">Available In: <span>February to April</span></li>
                                        </ul>
                                    </div>

                                    <div class="social-links mt-5">
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-whatsapp"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraidingDetails;
