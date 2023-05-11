

const VFT = () => {
    return (
        <div className="form__container container">

            <h2 className="form__title">Registration form</h2>


            <div className="form__content">
                <h3 className="form__name">Vacation Fun Tabir</h3>

                <div className="form__dates">
                    <div className="form__dates-item">
                        <input type="checkbox" id="03July" name="date" value="03July" />
                        <label htmlFor="03July">03 July — 07 July</label>
                    </div>

                    <div className="form__dates-item">
                        <input type="checkbox" id="17July" name="date" value="17July" />
                        <label htmlFor="17July">17 July — 21 July</label>
                    </div>

                    <div className="form__dates-item">
                        <input type="checkbox" id="24July" name="date" value="24July" />
                        <label htmlFor="24July">24 July — 28 July</label>
                    </div>

                    <div className="form__dates-item">
                        <input type="checkbox" id="14August" name="date" value="14August" />
                        <label htmlFor="14August">14 August — 18 August</label>
                    </div>

                    <div className="form__dates-item">
                        <input type="checkbox" id="21August" name="date" value="21August" />
                        <label htmlFor="21August">21 August — 25 August</label>
                    </div>
                </div>

                <h3 className="form__childtitle">Children&#39;s personal data</h3>
                <div className="form__childrens">
                    <div className="form__child">
                        <div className="form__child-gender">
                            <p>Gender</p>
                            <div className="form__child-gender-checkbox">
                                <div>
                                    <input type="radio" name="gender" id="boy" value="boy" />
                                    <label htmlFor="boy">Boy</label>
                                </div>

                                <div>
                                    <input type="radio" name="gender" id="girl" value="girl" />
                                    <label htmlFor="girl">Girl</label>
                                </div>
                            </div>
                        </div>

                        <div className="form__cuaet">
                            <p>Arrived according to the program CUAET ?</p>

                            <div>
                                <input type="radio" name="cuaet" id="cuaet-yes" value="cuaet-yes" />
                                <label htmlFor="cuaet-yes">Yes</label>
                            </div>

                            <div>
                                <input type="radio" name="cuaet" id="cuaet-no" value="cuaet-no" />
                                <label htmlFor="cuaet-no">No</label>
                            </div>

                        </div>

                        <div className="form__cuaet-date">
                            <p>If Yes the date of arrival</p>
                            <input type="date" name="cuaet-date" id="cuaet-date" />
                        </div>
                    </div>

                    <div className="form__child-main">
                        <div className="form__child-name">
                            <label htmlFor="fname-child"> First name * </label>
                            <input type="text" name="fname-child" id="fname-child" />
                        </div>
                        <div className="form__child-lname">
                            <label htmlFor="lname-child"> Last name * </label>
                            <input type="text" name="lname-child" id="lname-child" />
                        </div>

                        <div className="form__child-bday">
                            <label htmlFor="bday-child">Date of birth *</label>
                            <input type="date" name="bday-child" id="bday-child" min="2010-01-01" max="2016-01-01" />
                        </div>

                        <div className="form__child-grade">
                            <label htmlFor="grade-child">Child's most recent grade completed *</label>
                            <input type="number" id="grade-child" min="1" max="11" />
                        </div>

                        <div className="form__child-lang">
                            <label htmlFor="lang-child">Languages Spoken *</label>
                            <input type="text" id="lang-child" />
                        </div>

                        <div className="form__child-allergies">
                            <label htmlFor="allergies-child">Allergies & Dietary restrictions</label>
                            <input type="text" id="allergies-child" />
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default VFT;