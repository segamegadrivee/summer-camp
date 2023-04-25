import church from '../assets/church.svg';
import kids from '../assets/hero.png';
import paper from '../assets/Flying-Paper.svg';
import click from '../assets/Finger-Click.svg';
import like from '../assets/Thumb-Up.svg';
import hero from '../assets/main-picture.png';
import sign from '../assets/sign-exp.svg';

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
                            <button className="common__button">Register</button>
                        </div>

                    </div>

                    <img className='hero__img' src={hero} alt="hero-img" />

                </div>
            </section>

            <section className='apply'>
                <div className="apply__container container">
                    <div>
                        <h2 className='apply__title'>How to apply</h2>
                    </div>
                    <div className="apply__cards">
                        <div className="card">
                            <img src={paper} alt="img" />
                            <div className="card__text">
                                <p className='card__title'>Read the General Rules </p>
                                <p className='card__subtitle'>Reviewed by both parent and child. You do neet to sign and submit after confirmation of registration this Behavior <a href="#">Guidelines here </a> </p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={click} alt="img" />
                            <div className="card__text">
                                <p className='card__title'>Complete online registration form </p>
                                <p className='card__subtitle'>Complete the online registration form, providing all necessary information <a href="#">Register here</a>  </p>
                            </div>
                        </div>


                        <div className="card">
                            <img src={like} alt="img" />
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
                    <div className="experience__text">
                        <p className='experience__text-header'>At Summer Camp, children aged 7 years and above will have an exciting and
                            unforgettable summer experience filled with adventure, learning and make friends</p>

                        <div className="experience__text-main">

                            <div className="experience__item">
                                <img src={sign} alt="exp" />
                                <p className='item__title'>Outdoor Activities</p>
                                <p className='item__text'>The camp offers various outdoor activities such as hiking and team-building exercises.
                                    The children will enjoy exploring nature while building their physical skills and teamwork abilities.</p>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default HomePage;