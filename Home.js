import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css'
import a1 from './images/a1.webp'
import a2 from './images/a2.webp'
import a3 from './images/a3.webp'
import a4 from './images/a4.webp'
import a5 from './images/a5.webp'
import a6 from './images/a6.webp'
import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
import c3 from './images/c3.jpg'
import c4 from './images/c4.jpeg'
import sponsors1 from './images/sponsors1.png'
import sponsors2 from './images/sponsors2.png'
import sponsors3 from './images/sponsors3.png'
import sponsors4 from './images/sponsors4.png'
import sponsors5 from './images/sponsors5.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import s1 from './images/s1.avif'
import s2 from './images/s2.avif'
import s3 from './images/s3.avif'
import s4 from './images/s4.avif'
import s5 from './images/s5.jpg'
import s6 from './images/s6.jpg'
import h1 from './images/h1.webp'
import h2 from './images/h2.webp'
import h3 from './images/h3.webp'
import h4 from './images/h4.webp'
import h5 from './images/h5.webp'
import h6 from './images/h6.webp'
import h7 from './images/h7.webp'
import h8 from './images/h8.webp'
import heading from './images/heading.png'
import m1 from './images/m1.jpg'
import m2 from './images/m2.png'
import m3 from './images/m3.jpg'
import m4 from './images/m4.jpg'
import m5 from './images/m5.avif'
import m6 from './images/m6.jpg'
import m7 from './images/m7.avif'
import v1 from './images/v1.jpg'
import v2 from './images/v2.jpg'
import v3 from './images/v3.jpg'
import v4 from './images/v4.jpg'




const Home = () => {
    return (

        <div><br />

            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={c1} className="d-block w-100" alt="Image 1" />
                    </div>

                    <div className="carousel-item">
                        <img src={c2} className="d-block w-100" alt="Image 2" />
                    </div>

                    <div className="carousel-item">
                        <img src={c3} className="d-block w-100" alt="Image 3" />
                    </div>

                    <div className="carousel-item">
                        <img src={c4} className="d-block w-100" alt="Image 4" />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <h1 style={{ color: "green", textAlign: "center" }}>Top Categories</h1>
                </div><br />

                <div className='row'>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a1}></img>
                        <p style={{ marginTop: "7px", marginLeft: '20%' }}>Beach</p>
                    </div>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a2}></img>
                        <p style={{ marginTop: "7px", marginLeft: '12%' }} >Heritage</p>
                    </div>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a3}></img>
                        <p style={{ marginTop: "7px", marginLeft: '1%' }}>Religious Places</p>
                    </div>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a4}></img>
                        <p style={{ marginTop: "7px", marginLeft: '12%' }}>Snow Peaks</p>
                    </div>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a5}></img>
                        <p style={{ marginTop: "7px", marginLeft: '12%' }}>Forest</p>
                    </div>
                    <div className='col col-lg-2 col-md-4 col-sm-6'>
                        <img className="imagesize" src={a6}></img>
                        <p style={{ marginTop: "7px", marginLeft: '12%' }} >Mountain</p>
                    </div>


                </div>
            </div><br /><br /><br /><br />


            <div className='container-fluid' id="back"><br />
                <div className='row'>
                    <div className='col col-sm-6 col-md-3 col-lg-3'>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-container">
                                <img src={s1} className="card-img" alt="Image 1" />
                                <img src={s2} className="card-img" alt="Image 2" />
                                <img src={s3} className="card-img" alt="Image 3" />
                            </div>
                        </div>
                    </div>

                    <div className='col col-sm-6 col-md-3 col-lg-6'>
                        <div className='boxes'>
                            <p>An Award Winning</p>
                            <h4 style={{ color: "green" }}>Destination Management Company<br />
                                &<br />
                                Travel Agency</h4>
                            <p>Discover your dream holiday with Swosti India! Our extensive range of high-quality travel deals is just a
                                click away. With unbeatable prices on high-end tour packages and affordable cab rides, you can be
                                sure to get the most from your next adventure. We are a leading Travel Agency and Destination Management
                                Company in India, with headquartered in Bhubaneswar and branch offices in New Delhi and Kolkata. We are
                                proud to be regarded as the best tour operator in Bhubaneswar for international holiday booking and India Tour
                                packages.
                            </p>
                        </div>
                    </div>

                    <div className='col col-sm-6 col-md-3 col-lg-3'>
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-container">
                                <img src={s4} className="card-img" alt="Image 1" />
                                <img src={s5} className="card-img" alt="Image 2" />
                                <img src={s6} className="card-img" alt="Image 3" />
                            </div>
                        </div>
                    </div>
                </div><br />
            </div><br /><br /><br /><br />

            <div className='container-fluid'>
                <div className='row g-4'>
                    <div className='col on'>
                        <h3>Special Deals On <cite style={{ color: "green" }}> Holidays</cite></h3>
                        <p>Take a look at our special offers and best deals to some of the most popular destinations. We have a wide
                            <br />range of tour programes for you to browse including destination-specific holidays such as affordable
                            <br />tours to Odisha, Rajasthan, Maldives, Phuket, Mauritius, Bali and Singapore.</p>
                    </div>
                </div><br />

                <div className="row g-3">
                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h1} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">11 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h2} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">14 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h3} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">20 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h4} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">55 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h5} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">35 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h6} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text"> 40 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h7} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">25 % Offer</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-6 col-md-2 col-lg-3">
                        <div className="card" style={{ width: "16rem" }}>
                            <div className="card-img-containerss">
                                <img src={h8} className="card-img-top" alt="Kashmir" />
                                <h6 className="image-text">65 % Offer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br />



            <div className='container-fluid' id="back">
                <div className='row'>
                    <div className='col col-sm-12 col-lg-12 col-md-12 ' style={{ textAlign: "center" }}><br /><br />
                        <h2>Explore best selling <cite style={{ color: "green" }}>International packages</cite></h2>
                        <img src={heading}></img>
                    </div>

                    <div className='row'>
                        <div id="carouselExamples" class="carousel slide" data-bs-ride="carousel"><br /><br />
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="row  justify-content-center">
                                        <div class="col-6 d-flex justify-content-center">
                                            <div class="card" style={{ width: "27rem" }}>
                                                <img src={s1} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <div class="card-text off">
                                                        <h5>Singapore packages</h5>
                                                        <p style={{ color: "red" }}>Price On Request</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-6  d-flex justify-content-center">
                                            <div class="card" style={{ width: "27rem" }}>
                                                <img src={s2} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <div class="card-text off">
                                                        <h5>Thailand packages</h5>
                                                        <p style={{ color: "red" }}>Price On Request</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Second slide --> */}
                                <div class="carousel-item">
                                    <div class="row  justify-content-center">
                                        <div class="col-6  d-flex justify-content-center">
                                            <div class="card" style={{ width: "27rem" }}>
                                                <img src={s3} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <div class="card-text off">
                                                        <h5>Malaysia packages</h5>
                                                        <p style={{ color: "red" }}>Price On Request</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6  d-flex justify-content-center">
                                            <div class="card" style={{ width: "27rem" }}>
                                                <img src={s4} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <div class="card-text off">
                                                        <h5>indonesia packages</h5>
                                                        <p style={{ color: "red" }}>Price On Request</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Carousel controls --> */}
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamples" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExamples" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div><br /><br />

            </div><br /><br />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col center'>
                        <h2>With ur Experience<br />We Will Serve You</h2>
                    </div>
                </div><br />

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
            </div><br /><br /><br /><br />


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-sm-12 col-lg-12 col-md-12'>
                        <h2>Explore <cite style={{ color: "green" }}>Holiday Destinations</cite></h2>
                    </div>
                </div><br />

                <div className='row d-flex flex-nowrap overflow-auto your-container'>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m1} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text ">Honeymoon Holidays Tour packages</h5>
                                <p>24+ destination</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m5} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text ">Cruise Tour</h5>
                                <p>13+ destination</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m3} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text">Luxury packages</h5>
                                <p>2+ destination</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m4} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text">Mounument Holidays</h5>
                                <p>26+ destination</p>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m2} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text ">Family Tour packages</h5>
                                <p>2+ destination</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m6} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text">Wildlife Holiday </h5>
                                <p>22+ destination</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={m7} class="card-img-tops" alt="..." />
                            <div class="card-body ok">
                                <h5 class="card-text">Nature Holiday</h5>
                                <p>24+ destination</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br />

            <div className='container-fluid' id="back"><br /><br />
                <div className='row'>
                    <div className='col-lg-12 col-sm-12 col-md-12 ' style={{ textAlign: "center" }}>
                        <h2>Odisha at a <cite style={{ color: "green" }}>- Glance</cite></h2>
                        <img src={heading}></img>
                    </div>
                </div><br />
                <div className='row'>

                    <div className='col col-sm-12 col-md-6 col-lg-6 no'>
                        <img src={s1} style={{ width: "27rem" }}></img>

                        <p style={{ width: "27rem" }}>At Swosti Travels, we focus on promoting hassle free and end to end travel experience for travelers.
                            You can select your International holiday packages by interest or by themes like Beach tour, Romantic tour, Family vacations,
                            honeymoon, Nature tour, wildlife, sightseeing and more international vacation packages for families, Friends, solo tourists or couples.<br /><br />

                            We can make your Odisha holiday tour a life time memory. As India's leading Destination Management company (DMC)
                            and travel agency, all our international tour packages include return flight, hotel accommodations, sightseeing and
                            extensive guidance to make your international vacation tour stress free and memorable.</p>

                    </div>

                    <div className='col col-sm-12 col-md-6 col-lg-6'>
                        <div>
                            <p>We provide a wide range of Odisha destinations that best meet your requirement. Whether you want to take a tour to
                                Newzealand, Maldives, Singapore, Malaysia, Indonesia or any other place, we can customized International tour packages.
                                Pick your destinations and we will fulfill your world tour dreams. you can explore our romantic beach holidays in Maldives,
                                Mauritius, Bali, Srilanka, Thailand and Dubai. You name your preferred international tour, Swosti Travels the leading tour
                                and travel agency will deliver it for you from/to India..
                            </p>
                        </div><br />

                        <div>
                            <div className='ce'>
                                <div className='col' style={{ textAlign: "center" }}>
                                    <h5>Trending <cite style={{ color: "green" }}>Travel Destinations</cite> In Odisha</h5>
                                    <img src={heading}></img>
                                </div><br />

                                <div className='carsoual ' >
                                    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">

                                            <div class="carousel-item active">
                                                <div class="row g-0">
                                                    <div class="col-6">
                                                        <div class="card" style={{ width: "15rem" }}>
                                                            <img src={v1} class="card-img-tope" alt="..." />
                                                            <div class="card-body">
                                                                <div class="card-text off">
                                                                    <h6>Puri</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card" style={{ width: "15rem" }}>
                                                            <img src={v2} class="card-img-tope" alt="..." />
                                                            <div class="card-body">
                                                                <div class="card-text off">
                                                                    <h6>Chilika</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="row g-0">
                                                    <div class="col-6">
                                                        <div class="card" style={{ width: "15rem" }}>
                                                            <img src={v3} class="card-img-tope" alt="..." />
                                                            <div class="card-body">
                                                                <div class="card-text off">
                                                                    <h6>Bhubaneswar</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card" style={{ width: "15rem" }}>
                                                            <img src={v4} class="card-img-tope" alt="..." />
                                                            <div class="card-body">
                                                                <div class="card-text off">
                                                                    <h6>Konark</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div><br /><br />
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>
            


            <div class="container my-5">
                <div className='row'>
                    <div className='col col-sm-12 col-lg-12 col-md-12' style={{textAlign:"center"}}>
                        <h2>Customer <cite style={{color:"green"}}>Review</cite></h2>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card review-card shadow-sm">
                            <div class="card-body">

                                <h5 class="card-title">John Doe</h5>
                                <p class="review-date">March 22, 2024</p>


                                <div class="review-rating mb-3">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-alt"></i>
                                    <i class="fa fa-star text-muted"></i>
                                    <span class="ms-2">4.5/5</span>
                                </div>


                                <p class="card-text">
                                    "The product is great! I really enjoyed using it. It met all my expectations and more. I highly recommend it to others."
                                </p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="card review-card shadow-sm">
                            <div class="card-body">

                                <h5 class="card-title">Jane Smith</h5>
                                <p class="review-date">March 15, 2024</p>


                                <div class="review-rating mb-3">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-alt"></i>
                                    <span class="ms-2">4.8/5</span>
                                </div>


                                <p class="card-text">
                                    "This is a fantastic item! It exceeded my expectations. Will definitely purchase again in the future!"
                                </p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="card review-card shadow-sm">
                            <div class="card-body">

                                <h5 class="card-title">Jane Smith</h5>
                                <p class="review-date">March 15, 2024</p>


                                <div class="review-rating mb-3">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-alt"></i>
                                    <span class="ms-2">4.8/5</span>
                                </div>


                                <p class="card-text">
                                    "This is a fantastic item! It exceeded my expectations. Will definitely purchase again in the future!"
                                </p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Add more cards as needed --> */}
                </div>
            </div><br/><br/><br/>







            <section className="tours">
                <div className="row">
                    <div className="col-12 content-col"><br /><br />
                        <h1>UPCOMING TOURS & DESTINATION</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quisquam, autem omnis reiciendis voluptates ducimus dolores voluptatum recusandae voluptatibus, excepturi sint quo? Voluptatum earum rerum modi corrupti numquam, tempora rem?</p>
                        <a href="#" className="btns">Learn More</a>
                    </div>
                    <div className="row image-col">
                        <div className="col-6">
                            <img src={img3} alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <img src={img4} alt="Image 2" className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <img src={img5} alt="Image 3" className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <img src={img6} alt="Image 4" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </section><br /><br /><br /><br />



            <div className='container-fluid box'>
                <div className='row'>
                    <div className='col centers'><br /><br />
                        <h2>Subscribe Our
                            Newsletter</h2><br />
                        <p>Subscribe to our newsletter and get a special 30% discount.</p>
                        <br />
                        <input placeholder='Enter email' style={{ padding: "4px", margin: "5px" }}></input>
                        <button className='button3'>Subscribe</button>
                    </div>
                </div><br /><br />
            </div><br /><br /><br /><br />



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
            </div><br /><br /><br /><br /><br />


            <div className='container-fluid'>
                <div className='row g-3' id="row">
                    <div className='col col-sm-6 col-md-3 col-lg-3 '>
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

                    <div className='col col-sm-6 col-md-3 col-lg-3'>
                        <h5>About</h5>
                        <p>About Us</p>
                        <p>Features</p>
                        <p>New & Blog</p>
                    </div>

                    <div className='col col-sm-6 col-md-3 col-lg-3'>
                        <h5>Company</h5>
                        <p>Team</p>
                        <p>Plan Y Pricing</p>
                        <p>Become a Member</p>
                    </div>

                    <div className='col col-sm-6 col-md-3 col-lg-3'>
                        <h5>Support</h5>
                        <p>FAQs</p>
                        <p>Support Center</p>
                        <p>Contact Us</p>
                    </div>
                </div><br /><br /><br />

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