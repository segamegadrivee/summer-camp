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

                            <b>704 6 St NE Calgary, Alberta Canada, T2E 3Y7.</b>
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


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.727655341963!2d-114.05056072293115!3d51.05811637171466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165500d2dd3ab%3A0x9489d0158d603439!2z0KPQutGA0LDRl9C90YHRjNC60LAg0JPRgNC10LrQvi3QmtCw0YLQvtC70LjRhtGM0LrQsCDQn9Cw0YDQsNGE0ZbRjyDQo9GB0L_RltC90L3RjyDQn9GA0LXRgdCy0Y_RgtC-0Zcg0JHQvtCz0L7RgNC-0LTQuNGG0ZY!5e0!3m2!1suk!2sua!4v1683931716848!5m2!1suk!2sua"


                    style={{
                        border: 0,
                        maxWidth: '600px',
                        maxHeight: '100%',
                        width: '100%',

                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>





            </div>
        </div >
    )
}

export default Contacts;