import React from 'react'
import './Footer2.scss'

const Footer2 = () => {
  return (
    <div>
        <div className="mt-0">

            <footer className="text-white text-center text-lg-start footerColor">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!--Grid row--> */}
                <div className="row mt-4">
                {/* <!--Grid column--> */}
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About company</h5>

                    <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti.
                    </p>

                    <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias.
                    </p>

                    <div className="mt-4">
                    {/* <!-- Facebook --> */}
                    <a type="button" className="btn btn-floating btn-light btn-lg" href='/'><i className="fab fa-facebook-f"></i></a>
                    {/* <!-- Dribbble --> */}
                    <a type="button" className="btn btn-floating btn-light btn-lg" href='/'><i className="fab fa-dribbble"></i></a>
                    {/* <!-- Twitter --> */}
                    <a type="button" className="btn btn-floating btn-light btn-lg" href='/'><i className="fab fa-twitter"></i></a>
                    {/* <!-- Google + --> */}
                    <a type="button" className="btn btn-floating btn-light btn-lg" href='/'><i className="fab fa-google-plus-g"></i></a>
                    {/* <!-- Linkedin --> */}
                    </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                    <div className="form-outline form-white mb-4">
                    <input type="text" id="formControlLg" className="form-control form-control-lg" />
                    <label className="form-label text-success" for="formControlLg">Search</label>
                    </div>

                    <ul className="fa-ul" id="address">
                    <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                    </li>
                    <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
                    </li>
                    <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
                    </li>
                    </ul>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                    <h5 className="text-uppercase mb-4">Opening hours</h5>

                    <table className="table text-center">
                    <tbody className="fw-normal bg-dark">
                        <tr>
                        <td className="footerColor text-white">Mon - Thu:</td>
                        <td className="footerColor text-white">8am - 9pm</td>
                        </tr>
                        <tr>
                        <td className="footerColor text-white">Fri - Sat:</td>
                        <td className="footerColor text-white">8am - 1am</td>
                        </tr>
                        <tr>
                        <td className="footerColor text-white">Sunday:</td>
                        <td className="footerColor text-white">9am - 10pm</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" id='footer-bg'>
                
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>

        </div>
            {/* <!-- End of .container --> */}
    </div>
  )
}

export default Footer2