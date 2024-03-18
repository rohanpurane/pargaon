import React from 'react'
import ban from '../../../media/ban3.jpg'

const GovernmentSchemes = () => {
    return (
        <div class="container py-5">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-sm-10">
                    <div class="row row-cols-1 row-cols-md-2 g-4 py-5">

                        <div class="col">
                            <div class="card text-center mb-5">
                                <div class="card-header">विद्यार्थ्यांसाठी भारत सरकारच्या योजना.</div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href={ban} download={ban} class="btn button" style={{ textDecoration: "none", border: "none" }}>PDF मिळवा</a>
                                </div>
                                <div class="card-footer text-muted">2 days ago</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center mb-5">
                                <div class="card-header">व्यवसायासाठी भारत सरकारच्या योजना.</div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href={ban} download={ban} class="btn button" style={{ textDecoration: "none", border: "none" }}>PDF मिळवा</a>
                                </div>
                                <div class="card-footer text-muted">2 days ago</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center mb-5">
                                <div class="card-header">प्रवासासाठी भारत सरकारच्या योजना.</div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href={ban} download={ban} class="btn button" style={{ textDecoration: "none", border: "none" }}>PDF मिळवा</a>
                                </div>
                                <div class="card-footer text-muted">2 days ago</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center mb-5">
                                <div class="card-header">शेतकऱ्यांसाठी भारत सरकारच्या योजना.</div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href={ban} download={ban} class="btn button" style={{ textDecoration: "none", border: "none" }}>PDF मिळवा</a>
                                </div>
                                <div class="card-footer text-muted">2 days ago</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GovernmentSchemes