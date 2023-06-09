import church from '../assets/church.svg';
import paper from '../assets/Flying-Paper.svg';
import click from '../assets/Finger-Click.svg';
import like from '../assets/Thumb-Up.svg';
import hero from '../assets/main-picture.png';
import hero2 from '../assets/main-picture2.png';
import volunteer from '../assets/volunte.png';
import sign from '../assets/sign-exp.svg';
import experience from '../assets/experience.png';
import slider1 from '../assets/slider/1264.png';
import slider2 from '../assets/slider/711.png';
import slider3 from '../assets/slider/937.png';
import slider4 from '../assets/slider/2022.png';
import slider5 from '../assets/slider/938.png';
import slider6 from '../assets/slider/940.png';
import spons1 from '../assets/sponsors/1spons.png';
import spons2 from '../assets/sponsors/2spons.png';
import spons3 from '../assets/sponsors/3spons.png';
import spons4 from '../assets/sponsors/4spons.png';
import spons5 from '../assets/sponsors/5spons.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

let HomePage = () => {

    return (
        <div className="homepage__wrapper">
            <section className="hero">
                <div className="hero__container container">
                    <div className="hero__text">
                        <div className="hero__header">
                            <h1 className="hero__title">Fun Vacation</h1>
                            <h2 className="hero__subtitle">kids summer day Camp</h2>
                        </div>

                        <p className="hero__description">We invite all children to the summer camp <br /> the Assumption of the BVM Ukrainian
                            <br /> Greek-Catholic Church, Calgary</p>

                        <div className="hero__register">
                            <Link to="/camps"><button className="common__button">Register</button></Link>
                        </div>

                    </div>

                    <img className='hero__img' src={hero} alt="hero-img" />
                    {/* <img src={hero2} alt="" /> */}

                </div>
            </section>

            <section className='apply'>
                <div className="apply__container container">
                    <div>
                        <h2 className='apply__title'>How to apply</h2>
                    </div>
                    <div className="apply__cards">
                        <div className="card">
                            <img className='card__img' src={paper} alt="img" />
                            <div className="card__text">
                                <p className='card__title'>Read the General Rules </p>
                                <p className='card__subtitle'>Reviewed by both parent and child. You do neet to sign and submit after confirmation of registration this Behavior <a href="#">Guidelines here </a> </p>
                            </div>
                        </div>

                        <div className="card">
                            <img className='card__img' src={click} alt="img" />
                            <div className="card__text">
                                <p className='card__title'>Complete online registration form </p>
                                <p className='card__subtitle'>Complete the online registration form, providing all necessary information <a href="#">Register here</a>  </p>
                            </div>
                        </div>


                        <div className="card">
                            <img className='card__img' src={like} alt="img" />
                            <div className="card__text">
                                <p className='card__title'>Confirmation  </p>
                                <p className='card__subtitle'>Wait for the camp to contact you and confirm your child's registration</p>
                            </div>
                        </div>

                    </div>

                </div>




            </section>


            <section>
                <div className="experience__container container">
                    <h2 className='experience__title'>Experience the joy of summer with friends and faith</h2>
                    <div className='experience__main'>
                        <img className='experience__img' src={experience} alt="exp-img" />
                        <div className="experience__text">
                            <p className='experience__text-header'>At Summer Camp, children aged 7 years and above will have an exciting and
                                unforgettable summer experience filled with adventure, learning and make friends</p>

                            <div className="experience__text-main">

                                <div className="experience__item">
                                    <img src={sign} alt="exp" />
                                    <div className="item__content">
                                        <p className='item__title'>Outdoor Activities</p>
                                        <p className='item__text'>The camp offers various outdoor activities such as hiking and team-building exercises.
                                            The children will enjoy exploring nature while building their physical skills and teamwork abilities.</p>
                                    </div>
                                </div>

                                <div className="experience__item">
                                    <img src={sign} alt="exp" />
                                    <div className="item__content">
                                        <p className='item__title'>Arts and Crafts</p>
                                        <p className='item__text'>Campers will have the chance to explore their creative side through various arts and crafts projects.
                                            They will make friendship bracelets, paint and draw, and create beautiful memories.</p>
                                    </div>
                                </div>

                                <div className="experience__item">
                                    <img src={sign} alt="exp" />
                                    <div className="item__content">
                                        <p className='item__title'>Games</p>
                                        <p className='item__text'>Camp offers a variety of games
                                            that children will enjoy playing. From sports to board games, there is something for everyone.</p>
                                    </div>
                                </div>

                                <div className="experience__item">
                                    <img src={sign} alt="exp" />
                                    <div className="item__content">
                                        <p className='item__title'>Music and Dance </p>
                                        <p className='item__text'>Kids will have fun while learning how to move their bodies in rhythm.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className='photo'>
                <div className="photo__container container">
                    <h2 className='photo__title'>Photo reports</h2>
                    <div className="photo__swiper">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide><img src={slider1} alt="slider" /></SwiperSlide>
                            <SwiperSlide><img src={slider2} alt="slider" /></SwiperSlide>
                            <SwiperSlide><img src={slider3} alt="slider" /></SwiperSlide>
                            <SwiperSlide><img src={slider4} alt="slider" /></SwiperSlide>
                            <SwiperSlide><img src={slider5} alt="slider" /></SwiperSlide>
                            <SwiperSlide><img src={slider6} alt="slider" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>


            <section>
                <div className="volunteer__container container">
                    <h2 className='volunteer__title'>Volunteer opportunities</h2>
                    <div className="volunteer__content">
                        <div className="volunteer__text">
                            <p className='volunteer__text-title'>Please join our Volunteer Team and share your skills</p>

                            <p>Are you looking for a meaningful way to spend your summer? Consider volunteering at our children's camp! We're
                                looking for enthusiastic individuals who want to make a positive impact on the lives of children.</p>
                            <p>As a volunteer, you'll have the opportunity to participate in a variety of activities and help create a safe and fun environment for our campers. Whether
                                you have experience working with children or not, we welcome volunteers of all backgrounds and skill levels.</p>
                            <p>To learn more about volunteering at our camp and to apply, please contact us via email at <a href="mailto:camp@abvmcalgary.com">camp@abvmcalgary.com</a> </p>
                        </div>

                        <img className='volunteer__img' src={volunteer} alt="img" />

                    </div>
                </div>
            </section>

            <section>
                <h2 style={{ textAlign: "center" }}>Our sponsors</h2>
                <div className="sponsor__container container">

                    <div className='sponsor__img'> <img src={spons1} alt="sponsor" /></div>
                    <div className='sponsor__img'> <img src={spons2} alt="sponsor" /></div>
                    <div className='sponsor__img'><img src={spons3} alt="sponsor" /></div>
                    <div className='sponsor__img'> <img src={spons4} alt="sponsor" /></div>
                    <div className='sponsor__img'> <img src={spons5} alt="sponsor" /></div>
                </div>
            </section>
        </div >
    )
}

export default HomePage;