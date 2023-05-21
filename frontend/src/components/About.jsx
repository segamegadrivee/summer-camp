import tab from '../assets/tab_about.svg'
import tabmob from '../assets/tab-mob.svg'


const About = () => {
    return (
        <div className="about__container container">
            <h2>Welcome
                to summer camp at the Assumption of the BVM Ukrainian Greek-Catholic Church</h2>

            <div className="about__content">
                <div className="about__text">
                    <p>Our summer camp offers two different types of camps for children aged 7 to 12 and
                        13 to 17. Our camps provide a unique opportunity for children to explore their faith,
                        make new friends, and experience fun activities in a safe and supportive environment.</p>
                    <p>Campers aged 7 to 12 will participate in a variety of activities, including outdoor games, arts and crafts.</p>
                    <p>Older campers aged 13 to 17 will engage in more advanced activities,
                        including leadership and team-building exercises, as well as discussions
                        about the challenges of being a teenager in today's world.</p>
                    <p>The cost of the camp is  $175 per child, with a discounted rate of $75 for additional children from the same family. We understand that financial circumstances may vary, so we offer camp bursaries for families based on financial need. The minimum weekly fee is $50 per child, and fees can be reduced or waived based on family
                        and financial circumstances.
                        Please indicate your request for a fee reduction during registration.</p>
                    <p>We are excited to welcome your child to our summer camp and look forward to providing them with a memorable and enriching experience!</p>
                </div>

                <div className="about__tab">
                    <img src={tab} alt="tab" />

                </div>
                <div className="about__tabm">
                    <img src={tabmob} alt="tab" />

                </div>
            </div>
        </div>
    )

}

export default About;