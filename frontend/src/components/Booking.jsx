import bookingItem from '../assets/booking-item.svg';
import { Link } from 'react-router-dom';


let Booking = () => {

    return (
        <div className="booking__container container">
            <h2 className="booking__title">Choose your camp</h2>

            <div className="booking__row">
                <div className="booking__card">

                    <h3 className="booking__card-title">Vacation Fun Tabir</h3>

                    <div className="booking__main">
                        <div className="booking__card-text">

                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>For children aged 7 to 12</p>
                            </div>

                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>Time of activity is from 9 am to 4 pm each day</p></div>

                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>Limit of campers per week
                                    35</p>
                            </div>

                        </div>

                        <Link to={'/camps/vacation-fun-tabir'}><button className="booking__button common__button">Book</button></Link>
                    </div>
                </div>

                <div className="booking__card">
                    <h3 className="booking__card-title">Youth Leadership</h3>
                    <div className="booking__main">
                        <div className="booking__card-text">
                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>For children aged 13 to 17</p>
                            </div>

                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>Time of activity is from 9 am to 4 pm each day</p>
                            </div>

                            <div className="booking__card-item">
                                <img src={bookingItem} alt="img" />
                                <p>Limit of campers per week
                                    30</p>
                            </div>

                        </div>

                        <Link to={'/camps/youth-leadership'}><button className="booking__button common__button">Book</button></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Booking;