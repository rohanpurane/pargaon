// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './Contact.scss'
import map from '../../../media/map.jpg'

function Contact() {
  return (
    <div className="container">
      <div className="row  align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="col-sm-5 ">
          <div className="box">
            <div className="card p-4 p-sm-5 mx-3 mt-4 mb-5 slide-in-blurred-left">
              <div className="card small-card ">
                <h2 className="text-center text-white py-5">Contact</h2>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Akshay Kumar" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="9921569358" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Subject</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="button" className='btn text-white'>Submit</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 img-position">
          <img src={map} width={'100%'} style={{ borderRadius: '20px' }} alt="" srcset="" />
        </div>
      </div>
    </div>

  );
}

export default Contact;