import geo from '../assets/geo_contacts.svg';
import call from '../assets/call_contacts.svg';
import message from '../assets/message_contact.svg';


let Contacts = () => {
    return (
        <div className="contacts__container container">
            <h2 className="contacts__title" >Contacts</h2>

            <div className="contacts__main">
                <div className="contacts__text">

                    <div className="contacts__paragraph">
                        <p>The summer camp for children will be
                            held on the premises of Assumption of the Blessed Virgin Mary Ukrainian Catholic Church</p>
                        <div className="contacts__paragraph-info">
                            <img src={geo} alt="contact" />
                            <span>704 6 St NE Calgary, Alberta Canada, T2E 3Y7.</span>
                        </div>
                    </div>

                    <div className="contacts__paragraph">
                        <p>We always welcome your inquiries and are ready to assist with any questions you may have regarding our church communit.
                            If you have any questions, suggestions, or issues, please don't hesitate to contact us</p>
                        <div className="contacts__paragraph-info">
                            <img src={call} alt="contact" />
                            <a href="tel:+14032307013">+1 (403) 230-7013</a>
                        </div>
                    </div>

                    <div className="contacts__paragraph">
                        <p>If you have any questions, requests, or proposals, please to contact us via email</p>
                        <div className="contacts__paragraph-info">
                            <img src={message} alt="contact" />
                            <a href="mailto:camp@abvmcalgary.com">camp@abvmcalgary.com</a>
                        </div>
                    </div>


                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5076.927044708215!2d30.47802415983276!3d50.48833035333716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf2313b56c1%3A0x56bf0f2538c74671!2z0JzQsNCz0LDQt9C40L0g0LrQvtC20Lgg0JDQu9C40LPQviDQk9GA0YPQv9C_!5e0!3m2!1sru!2sua!4v1683407780948!5m2!1sru!2sua"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
        </div >
    )
}

export default Contacts;