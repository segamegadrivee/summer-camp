import church from '../assets/church.svg';
import kids from '../assets/hero.png';
import paper from '../assets/Flying-Paper.svg';
import click from '../assets/Finger-Click.svg';
import like from '../assets/Thumb-Up.svg';

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


                </div>
            </section>

            <section className='apply'>
                <div className="apply__container container">
                    <div className="apply__content">
                        <div className="apply__header">
                            <h2 className='apply__title'>How to aply?</h2>
                        </div>


                        <div className="apply__cards">

                            <div className="apply__cards-card">
                                <img className='card__icon' src={paper} alt="img" />
                                <p className='card__title'>Read the Behavioral Guideline </p>
                                <p className='card__description'>Reviewed by both parent and child. You do <br /> neet to sign and submit after confirmation <br /> of registration this Behavior Guidelines here </p>
                            </div>

                            <div className="apply__cards-card">
                                <img className='card__icon' src={click} alt="img" />
                                <p className='card__title'>Complete online registration form </p>
                                <p className='card__description'>Complete the online registration form,<br /> providing all necessary information Register <br /> here</p>
                            </div>

                            <div className="apply__cards-card">
                                <img className='card__icon' src={like} alt="img" />
                                <p className='card__title'>Confirmation  </p>
                                <p className='card__description'>Wait for the camp to contact you and <br /> confirm your child's registration </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default HomePage;