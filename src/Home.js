import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css'
import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import discover1 from './images/discover1.jpg'
import discover2 from './images/discover2.jpg'
import discover4 from './images/discover4.jpg'
import place1 from './images/place1.jpg'
import place2 from './images/place2.jpg'
import place3 from './images/place3.jpg'
import place4 from './images/place4.jpg'
import place5 from './images/place5.jpg'
import sponsors1 from './images/sponsors1.png'
import sponsors2 from './images/sponsors2.png'
import sponsors3 from './images/sponsors3.png'
import sponsors4 from './images/sponsors4.png'
import sponsors5 from './images/sponsors5.png'



const Home = () => {
    return (

        <div><br />
            <div className='container-fluid'>
                <div className="image-container">
                    <img className="homeimage" src={home1}></img>
                    <p className="overlay-text"> Discover your place</p>
                    <h1 className='h1'>Explore The<br />Best Beautiful<br />Beaches</h1>

                    <button className='button'>Explore</button>
                    <img className="homeimage2" src={home2}></img>



                </div>


            </div><br /><br /><br /><br></br>

            <div className='container-fluid'>
                <div className='row g-3'>
                    <div className='col col-sm-12 col-md-7 col-lg-7'><br /><br />
                        <div className='top'>
                            <h2 className='h21'>More Information About The Best Beaches</h2><br />
                            <p className='p'>You can find the most beautiful and pleasant places at the best prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.</p>
                            <br />
                            <button className='button2'>Reserve a place</button>
                        </div>


                    </div>
                    <div className='col col-sm-6 col-md-2 col-lg-2'><br />
                        <div >
                            <img style={{ width: "150px" }} src={about1}></img>
                        </div>

                    </div>
                    <div className='col col-sm-6 col-lg-3'>
                        <div>
                            <img style={{ width: "180px" }} src={about2}></img>
                        </div>

                    </div>

                </div>

            </div><br /><br /><br /><br /><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col center'>
                        <h2>Discover the most<br />
                            attractive places</h2>

                    </div>
                </div><br />


                <div className='row justify-content-center align-items-center g-3'>
                    <div className=" col col-md-3  col-sm-6 col-lg-3">
                        <div className="image-containers"><br /><br />
                            <img src={discover4} alt="Place 1" className="place-image" />
                            <p className="overlays-texts">Whitehaven</p>
                            <p className='over'>32 tours available</p>

                        </div>
                    </div>

                    <div className=" col col-md-3  col-sm-6 col-lg-3">
                        <div className="image-containers">
                            <img src={discover1} alt="Place 1" className="place-image" />
                            <p className="overlay-texts">Bali</p>
                            <p className='over'>24 tour available</p>
                        </div>
                    </div>

                    <div className=" col col-md-3  col-sm-6 col-lg-3">
                        <div className="image-containers"><br /><br />
                            <img src={discover2} alt="Place 1" className="place-image" />
                            <p className="overlay-texts">Hawali</p>
                            <p className='over'>15 tours available</p>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col center'>
                        <h2>With ur Experience<br />We Will Serve You</h2>
                    </div>
                </div><br /><br />

                <div className='row justify-content-center align-items-center g-3'>
                    <div className='col col-md-2 col-sm-4 col-lg-2'>
                        <h3 style={{ color: "teal" }}>20</h3>
                        <p style={{ color: "teal" }}>Year Experience</p>

                    </div>
                    <div className=' col col-md-2 col-sm-4 col-lg-2'>
                        <h3 style={{ color: "teal" }}>75</h3>
                        <p style={{ color: "teal" }}>Complete tour</p>

                    </div>
                    <div className=' col col-md-2 col-sm-4 col-lg-2'>
                        <h3 style={{ color: "teal" }}>650+</h3>
                        <p style={{ color: "teal" }}>Tourist Destination</p>

                    </div>
                </div>
            </div><br /><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col center'>
                        <h2>Video Tour</h2><br />
                        <p style={{ color: "teal" }}>Find out more with our video of the most beautiful and <br />pleasant places for you and your family.</p>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center'>
                    <div className='col  text-center '>
                        <img src={home2}></img>
                    </div>
                </div>
            </div><br /><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col center'>
                        <h2>Choose Your Place</h2>
                    </div>
                </div><br />

                <div className='row d-flex justify-content-center align-items-center g-4'>
                    <div className='col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center'>
                        <div class="card" style={{ width: "15rem", border: "none" }}>
                            <img src={place1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Bali</h5>
                                <p>indonesia</p>
                                <strong>$2499</strong><br />
                                <button className='button3'>Book Now</button>
                            </div>
                        </div>
                    </div>


                    <div className='col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center'>
                        <div class="card" style={{ width: "15rem", border: "none" }}>
                            <img src={place2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Bora Bora</h5>
                                <p>Polinesia</p>
                                <strong>$1599</strong><br />
                                <button className='button3'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center'>
                        <div class="card" style={{ width: "15rem", border: "none" }}>
                            <img src={place3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Hawaii</h5>
                                <p>EE.UU</p>
                                <strong>$3499</strong><br />
                                <button className='button3'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center'>
                        <div class="card" style={{ width: "15rem", border: "none" }}>
                            <img src={place4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Whitehaven</h5>
                                <p>Australia</p>
                                <strong>$2499</strong><br />
                                <button className='button3'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center'>
                        <div class="card" style={{ width: "15rem", border: "none" }}>
                            <img src={place5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-text">Hvar</h5>
                                <p>Croacia</p>
                                <strong>$1999</strong><br />
                                <button className='button3'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />


            <div className='container-fluid box'>
                <div className='row'>
                    <div className='col centers'><br /><br />
                        <h2>Subscribe Our<br />
                            Newsletter</h2><br />
                        <p>Subscribe to our newsletter and get a special 30% discount.</p>
                        <br />
                        <input placeholder='Enter email' style={{ padding: "4px", margin: "5px" }}></input>
                        <button className='button3'>Subscribe</button>
                    </div>
                </div><br /><br />
            </div><br /><br /><br />

            <div className='container-fluid'>
                <div className='row g-4'>
                    <div className='col'>
                        <img src={sponsors1} class="card-img-top" style={{ width: "90px" }} alt="..." />
                    </div>

                    <div className='col'>
                        <img src={sponsors2} class="card-img-top" style={{ width: "90px" }} alt="..." />
                    </div>

                    <div className='col'>
                        <img src={sponsors3} class="card-img-top" style={{ width: "90px" }} alt="..." />
                    </div>

                    <div className='col'>
                        <img src={sponsors4} class="card-img-top" style={{ width: "90px" }} alt="..." />
                    </div>

                    <div className='col'>
                        <img src={sponsors5} class="card-img-top" style={{ width: "90px" }} alt="..." />
                    </div>

                </div>
            </div><br /><br /><br />


            <div className='container-fluid'>
                <div className='row g-3' id="row">
                    <div className='col col-sm-6 col-md-4 col-lg-4 '>
                        <h5>Travel</h5>
                        <p>Travel you choose the<br />
                            destination, we offer you the<br />
                            experience.
                        </p>
                        <div className='font'>
                        <i class='bx bxl-facebook-square'></i>
                        <i class='bx bxl-twitter'></i>
                        <i class='bx bxl-instagram-alt'></i>
                        <i class='bx bxl-youtube'></i>

                        </div>
               


                    </div>

                    <div className='col col-sm-6 col-md-4 col-lg-4'>
                        <h5>About</h5>
                        <p>About Us</p>
                        <p>Features</p>
                        <p>New & Blog</p>

                    </div>

                    <div className='col col-sm-6 col-md-4 col-lg-4'>
                        <h5>Company</h5>
                        <p>Team</p>
                        <p>Plan Y Pricing</p>
                        <p>Become a Member</p>

                    </div>

                    <div className='col col-sm-6 col-md-4 col-lg-4'>
                        <h5>Support</h5>
                        <p>FAQs</p>
                        <p>Support Center</p>
                        <p>Contact Us</p>
                    </div>
                </div><br/><br/><br/>

                <div className='row g-3 '>
                    <div className='col col-sm-12 col-md-12 col-lg-12 align-text-center text-center'>
                        <p>© 2021 Bedimcode. All rigths reserved.</p>
                        <p>Terms & Agreements
                            Privacy Policy</p>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Home;