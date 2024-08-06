'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../landingpage.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';

const landingPage = () => {

    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>

            <div className='banner-section' style={{
                backgroundColor: "#ffdc54"

            }}>
                {/* <Navbar/> */}
                <div className='main-banner'>
                    <div className='banner-content'>
                        <h1 className='banner-heading'>
                            Land Your Dream Job With This Ultimate <nbsp />
                            <span className='text-warning'>
                                Interview Preparation Course
                            </span>
                        </h1>
                        <p className='banner-paragraph'>
                            Learn Proven Strategies and Techniques to
                            Ace Any Interview with Expert Guidance from Interview Coach
                            <strong>Diksha Arora</strong>
                            . Get access to
                            200+ Sample Answers that will fit any Job Role.
                        </p>
                        <div className='banner-btn-block'>
                            <button type="button" class="btn btn-warning" id='btn-banner-2'>Register Now</button>

                        </div>
                        <div className='featured-section'>
                            <p className="heading-featured">Featured In:</p>
                            <div className='featured-section-content1'>
                                <img src='../images/telegraph.svg' alt='img' />
                                <img src='../images/cnbc.svg' alt='img' />
                                <img src='../images/moneycontrol.svg' alt='img' />

                            </div>
                            <div className='featured-section-content2'>
                                <img src='../images/news18.png' alt='img' style={{ width: "149px", height: "56px" }} />
                                <img src='../images/enterepenuer.png' alt='img' style={{ width: "149px", height: "56px" }} />
                                <img src='../images/deccan.png' alt='img' style={{ width: "149px", height: "56px" }} />

                            </div>
                        </div>
                    </div>
                    <div className='banner-img'>
                        <img className='img' src='../images/banner-image.png' alt='image' style={{ height: "700px" }} />

                    </div>

                </div>

                <div className='logo-section '>
                    <h6 className="small-heading-2 logo-heading">Our Students are Placed at Top Companies</h6>
                    <div className='logo-section-content container'>
                        <Slider arrows={false} {...settings}>
                            <img src='../images/ey.png' alt='img' className='img-slick' />
                            <img src='../images/inforses.png' className='img-slick' alt='img' />
                            <img src='../images/hcl.png' className='img-slick' alt='img' />
                            <img src='../images/accenture.png' className='img-slick' alt='img' />
                            <img src='../images/amazon.png' className='img-slick' alt='img' />
                            <img src='../images/pifizer.png' className='img-slick' alt='img' />
                            <img src='../images/relience.png' className='img-slick' alt='img' />
                        </Slider>
                    </div>
                </div>
            </div >

            <div className='section-2'>
                <div className='section-2-heading'>
                    <h2 className='heading-text'> What are you going to learn?</h2>

                </div >

                <div className='section-2-content container-fluid'>
                    <div className='row  section-2-border'>


                        <div className='section-2-paragraph col-xl-7'>
                            <h3 className="learn-heading h3">How to present yourself for the interview for the perfect first impression?</h3>
                            <p className="paragraph-46 p">If you fail to correctly answer the very first interview question “Tell me about yourself”, you will lose your chances of securing your dream job. In this course, I will teach you the right technique to kick start your interview and how to leave that lasting impression on the interviewer. You will learn how to tackle this question with the help of 10+ sample answers. Whether you are a fresher or a working professional, you will get hold of the right strategy to impress the recruiter and stand out from the crowd.</p>
                        </div>
                        <div className='col-sm-2'>

                        </div>
                        <div className='section-2-image col-xl-3'>

                            <img src='../images/new1.svg' alt='img' className='section-2-img  img-fluid' />

                        </div>
                    </div>
                    {/* row-2 */}
                    <div className='row  section-2-border'>
                        <div className='section-2-image col-xl-3'>

                            <img src='../images/new2.svg' alt='img' className='section-2-img img-fluid' />

                        </div>
                        <div className='col-sm-2'>

                        </div>
                        <div className='section-2-paragraph col-xl-7'>
                            <h3 className="learn-heading h3 ">How to present yourself for the interview for the perfect first impression?</h3>
                            <p className="paragraph-46 p">If you fail to correctly answer the very first interview question “Tell me about yourself”, you will lose your chances of securing your dream job. In this course, I will teach you the right technique to kick start your interview and how to leave that lasting impression on the interviewer. You will learn how to tackle this question with the help of 10+ sample answers. Whether you are a fresher or a working professional, you will get hold of the right strategy to impress the recruiter and stand out from the crowd.</p>
                        </div>


                    </div>

                    {/* row-3 */}
                    <div className='row  section-2-border'>


                        <div className='section-2-paragraph col-xl-7'>
                            <h3 className="learn-heading h3">How to present yourself for the interview for the perfect first impression?</h3>
                            <p className="paragraph-46 p">If you fail to correctly answer the very first interview question “Tell me about yourself”, you will lose your chances of securing your dream job. In this course, I will teach you the right technique to kick start your interview and how to leave that lasting impression on the interviewer. You will learn how to tackle this question with the help of 10+ sample answers. Whether you are a fresher or a working professional, you will get hold of the right strategy to impress the recruiter and stand out from the crowd.</p>
                        </div>
                        <div className='col-sm-2'>

                        </div>
                        <div className='section-2-image col-xl-3'>

                            <img src='../images/new3.svg' alt='img' className='section-2-img img-fluid' />

                        </div>
                    </div>
                </div>

            </div>

            <div className='section-3'>
                <div className='section-3-heading'>
                    <h2 class="section-heading_text-2 center">Who is this course for?</h2>
                </div>
                <div className='container-fluid'>
                    <div className='row section-3-row'>

                        <div className='col-sm-5  section-3-border'>
                            <h4 class="section-workshop_item-heading_text-2 h4">Freshers</h4>
                            <img src='../images/new4.svg' alt='img' className='img-fluid section-3-img' />
                            <p className="paragraph-46 p">This course is tailored for freshers to improve their interview skills and gain a competitive edge in the job market. With expert coaching and practical training, they can learn valuable skills and techniques to confidently navigate the interview process and secure their dream job.</p>
                        </div>
                        <div className='col-sm-1'>

                        </div>
                        <div className='col-sm-5 section-3-border'>
                            <h4 class="section-workshop_item-heading_text-2 h4">Freshers</h4>
                            <img src='../images/new4.svg' alt='img' className='img-fluid section-3-img' />
                            <p className="paragraph-46 p">This course is tailored for freshers to improve their interview skills and gain a competitive edge in the job market. With expert coaching and practical training, they can learn valuable skills and techniques to confidently navigate the interview process and secure their dream job.</p>
                        </div>
                    </div>

                    <div className='row section-3-row2'>

                        <div className='col-sm-5  section-3-border'>
                            <h4 class="section-workshop_item-heading_text-2 h4">Freshers</h4>
                            <img src='../images/new4.svg' alt='img' className='img-fluid section-3-img' />
                            <p className="paragraph-46 p">This course is tailored for freshers to improve their interview skills and gain a competitive edge in the job market. With expert coaching and practical training, they can learn valuable skills and techniques to confidently navigate the interview process and secure their dream job.</p>
                        </div>
                        <div className='col-sm-1 '>

                        </div>
                        <div className='col-sm-5 section-3-border'>
                            <h4 class="section-workshop_item-heading_text-2 h4">Freshers</h4>
                            <img src='../images/new4.svg' alt='img' className='img-fluid section-3-img' />
                            <p className="paragraph-46 p">This course is tailored for freshers to improve their interview skills and gain a competitive edge in the job market. With expert coaching and practical training, they can learn valuable skills and techniques to confidently navigate the interview process and secure their dream job.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-4'>
                <div className='section-4-heading'>
                    <h2 class="section-heading_text-2 center">1000+ candidates placed in the top companies</h2>
                </div>
                <div className='section-4-content'>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                    <div className='section-4-card'>
                        <div className='section-card-logo'>
                            <img src='../images/comma.svg' alt='img' />
                        </div>
                        <div className='section-card-paragraph'>
                            <p>I got offer letters from 3 top companies. I am glad I was under the mentorship of Diksha. She helped to prepare the most important interview questions in the right manner. Thank you so much Diksha for your help and guidance.</p>
                        </div>
                        <div className='section-card-name'>
                            <h4>Shilpa Ajmeri</h4>
                            <p>3 Offer Letters: Capgemini, Reliance, HDFC</p>

                        </div>

                    </div>
                  

                </div>


            </div>

        </>
    )
}
export default landingPage;