import React from 'react'
import './Business.scss'
import Carousel from '../traiding/carousel/Carousel'
const BusinessDetail = () => {
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
                  <h2 class="business-title">Shree Sudrikeshwar Import-Export</h2>
                  <div class="business-details">
                    <p class="founder text">Founder: <span>Akshay Kumar</span></p>
                    <p class="since text">Since: <span>March 1990.</span></p>
                    <p class="address text">Address: <span>Pargaon Sudrik, Shrigonda, Ahemadnagar 413702.</span></p>
                  </div>

                  <div class="product-detail">
                    <h2 className="text">about this item: </h2>
                    <p className="text">Some varieties of black grapes are much higher in antioxidants than green or red grapes. These chemical compounds help protect your cells from damage. They protect against diseases like cancer, diabetes, Alzheimer's, Parkinson's, and heart disease. They can also help you heal from illness faster.</p>
                    {/* <!-- <p>द्राक्षातील पोषक घटक कर्करोग, डोळ्यांच्या समस्या, हृदय व रक्तवाहिन्यासंबंधी रोग आणि इतर आरोग्य परिस्थितींपासून संरक्षण करण्यास मदत करू शकतात. रेस्वेराट्रोल हे द्राक्षातील एक महत्त्वाचे पोषक तत्व आहे जे आरोग्यासाठी फायदे देऊ शकते. द्राक्षे फायबर, पोटॅशियम आणि जीवनसत्त्वे आणि इतर खनिजांचा एक चांगला स्रोत आहेत.</p> --> */}
                    <ul>
                    <div className="">
                        <i class="fas fa-star product-rating d-inline"></i><p className='text d-inline'>Office Time : Mon to Sat - 11AM to 06PM</p>
                      </div>
                      <div className="">
                        <i class="fas fa-star product-rating d-inline"></i><p className='text d-inline'>Contact No. : 1234567890</p>
                      </div>
                      <div className="">
                        <i class="fas fa-star product-rating d-inline"></i><p className='text d-inline'>email ID : contactus@sudrikeshwarimportexport.com</p>
                      </div>
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
    // <div className='container my-5 pt-5'>
    //     <img src={ban} className='info-img mb-3' alt="" srcset="" />

    //     <h1 className="text-center my-3 text">भारत हा देश मानवी इतिहासातील प्राचीन देश.</h1>
    //     <p className='text'>
    //     भारत हा देश मानवी इतिहासातील प्राचीन देशांमध्ये गणला जातो. येथील लिखित इतिहास २,५०० वर्षांपूर्वीचा असून इतर पुराव्यांनुसार भारतात ७०,००० वर्षांपूर्वीपासून मानवी अस्तित्व 
    //     आणि इतिहास आहे. भारताचा इतिहास वैभवसंपन्न आणि सामर्थ्यशाली असाच राहिलेला आहे भारतामध्ये प्राचीन काळापासून ते आधुनिक काळापर्यंत अनेक राजवटी सत्ताकेंद्री आल्या या             राजवटीने भारतामध्ये अनेक काळापर्यंत राज्य केलं यामधील सर्वात प्रभावी आणि सामर्थ्यशाली राज्य म्हणजे मौर्य साम्राज्य होय. मौर्य साम्राज्य ज्याला गुप्त राज्य असेही म्हटले जाते.हे भारताच्या पहिले प्रभावी असे केंद्रीय शासन होते भारतामध्ये सत्ताही मोठ्या काळापर्यंत टिकून राहिली देशातील ती पहिली केंद्रीकृत अशी सत्ता होते या काळामध्ये राज्यकर्त्यांनी मोठा भूप्रदेश आपल्या अंमलाखाली आणला आणि प्रजा कल्याणकारी शासन व्यवस्था निर्माण करण्याचा प्रयत्न केला.
    //     मध्यप्रदेशातील भीमबेटका येथील पाषाणयुगातील भित्तिचित्रे हे मानवी अस्तित्वाचे सर्वांत जुने पुरावे आहेत. पुराणतज्ज्ञांनुसार आदिमानवाने भारतात सत्तर हजार वर्षांपूर्वी प्रवेश केला. साधारणपणे ९,००० 
    //     वर्षांपूर्वी भारतात ग्रामीण व शहरी स्वरूपांची मानवी वस्ती होऊ लागली व सिंधू नदीच्या काठावर त्याचे हळूहळू सिंधू संस्कृतीत रूपांतर झाले.[१]. इसवी सन पूर्व ३५००चा सुमार सिंधू संस्कृतीचा काल मानला जातो. या सिंधू संस्कृतीची सुरुवात भारताच्या वायव्य प्रांतात म्हणजेच आजच्या पाकिस्तानात झाली. मोहेंजोदडो व हडप्पा ही उत्खननात सापडलेली शहरे आज पाकिस्तानात असली तरी भारतीय इतिहासातच गणली जातात. ह्या शहरांचा शोध दयारामजी सहानी यांनी लावला. काही इतिहासकार मान्य करतात की युरोप व मध्य आशियातून आलेल्या आर्य लोकांच्या टोळ्यांनी सातत्याने आक्रमणे करून सिंधू संस्कृती नष्ट केली व त्यानंतर वैदिक काळ सूरू झाला.पूर्वीच्या संशोधकांच्या मान्यतेपेक्षा अजून प्राचीन हडप्पा व मोहोंदोजडोची संस्कृती या एकच होत्या. हा वादाचा मुद्दा असला तरी सिंधू संस्कृती व वैदिक काळातील घडामोडी या सिंधू व सरस्वती नद्यांच्या काठी घडल्या होत्या यात दुमत नाही. यातील सरस्वती नदी ही काळाच्या ओघात पृष्ठीय बदलांमुळे लुप्त पावली. प्राचीन सरस्वती नदी ही पंजाब, राजस्थान व कच्छ, गुजरातमधून वाहत होती हे शास्त्रीय पुराव्यातून सिद्ध झाले आहे. वैदिक काळातच भारतीय संस्कृतीची मुळे रोवली गेली. मध्य वैदिक काळात सिंधू काठची वैदिक संस्कृती गंगेच्या खोऱ्यात पसरली.[२] साधारणपणे इसवी सन पूर्व १००० ते इसवी सन पूर्व ६०० हा कालखंड म्हणजे वैदिक उत्तर कालखंड मानला जातो या काळात जनपदे अस्तित्वात आली.     
    //     आर्य लोकांच्या टोळ्यांनी सातत्याने आक्रमणे करून सिंधू संस्कृती नष्ट केली व त्यानंतर वैदिक काळ सूरू झाला.
    //     </p>
    //     <div className="">
    //         <Gallery galleryImages={galleryImages} />
    //     </div>
    // </div>
  )
}

export default BusinessDetail