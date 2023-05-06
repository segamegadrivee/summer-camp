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


                </div>
            </div>
        </div >
    )
}

export default Contacts;