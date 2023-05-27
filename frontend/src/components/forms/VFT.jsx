import delbtn from '../../assets/del_btn.svg';
import addbtn from '../../assets/add_btn.svg';
import SteinStore from "stein-js-client";
import { useState } from "react";
import Checkboxes from "./Checkboxes";
import { useNavigate } from 'react-router-dom';



const store = new SteinStore(process.env.REACT_APP_STEIN_KEY);

const VFT = () => {


    const [forms, setForms] = useState([{
        gender: "", cuaet: "", arrivalDate: "",
        firstName: "", lastName: "", dateOfBirth: "", gradeCompleted: "",
        langSpoken: "", allergies: ""
    }]);

    const [parentForm, setParentForm] = useState({
        parentFirstName: "", parentSecondName: "", parentMail: "",
        parentSupport: "", parentPhone: "", parentPhone2: "", parentAddress: "",
        parentSupportDetails: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = [];

        forms.forEach((form, index) => {
            if (form.gender === "") {
                errors.push(`Form ${index + 1}: Gender is required.`);
            }
            if (form.cuaet === "") {
                errors.push(`Form ${index + 1}: CUAET is required.`);
            }
            if (form.cuaet === "YES" && form.arrivalDate === "") {
                errors.push(`Form ${index + 1}: Arrival date is required when CUAET is YES.`);
            }
            if (form.firstName === "") {
                errors.push(`Form ${index + 1}: First name is required.`);
            }
            if (form.lastName === "") {
                errors.push(`Form ${index + 1}: Last name is required.`);
            }
            if (form.dateOfBirth === "") {
                errors.push(`Form ${index + 1}: Date of birth is required.`);
            }
            if (form.gradeCompleted === "") {
                errors.push(`Form ${index + 1}: Grade completed is required.`);
            }
            if (form.langSpoken === "") {
                errors.push(`Child ${index + 1}: Languages Spoken is required.`);
            }


        });


        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }
        const formsWithParentForm = forms.map(form =>
            Object.assign({}, form, parentForm)
        );

        console.log("i AM HERE", formsWithParentForm);


        const checkedBoxes = Array.from(document.querySelectorAll('input[name="camp"]:checked')).map(checkbox => checkbox.value);
        console.log(checkedBoxes);
        console.log(forms);
        console.log(parentForm);
        for (let i = 0; i < checkedBoxes.length; i++) {
            store.read(checkedBoxes[i]).then(data => {
                console.log("READED", data);
                console.log(data.length);
                if (data.length >= 51) {
                    console.log("MAX FORMS");
                    alert(`Sorry, form ${checkedBoxes[i]} closed`)
                    return;
                }
                else {
                    store
                        .append(checkedBoxes[i], formsWithParentForm)
                        .then(res => {
                            console.log(res);
                            alert(`Data to form ${checkedBoxes[i]} added`)

                        });
                }
            });

        }


        navigate('/thankyou');
    };

    const handleAddForm = () => {
        if (forms.length < 3) {
            setForms([...forms, {
                gender: "", cuaet: "", arrivalDate: "",
                firstName: "", lastName: "", dateOfBirth: "", gradeCompleted: "",
                langSpoken: "", allergies: "",
            }]);
        }
    };


    const handleDeleteForm = (index) => {
        const newForms = forms.filter((form, i) => i !== index);
        setForms(newForms);
    };


    const handleChange = (event, index) => {
        const { name, value } = event.target;
        const newForms = [...forms];
        newForms[index][name] = value;
        setForms(newForms);
    };

    const handleParentChange = (e) => {
        setParentForm({ ...parentForm, [e.target.name]: e.target.value });
    };


    return (
        <div className="form__container container">

            <h2 className="form__title">Registration form </h2>

            <form onSubmit={handleSubmit} >

                <div className="parentinfo">
                    <h3>Parent information</h3>

                    <div className="parentinfo__main">
                        <div className="parentinfo__main-item">
                            <label htmlFor="parentFirstName">First name of parent or guardian *</label>
                            <input type="text" name="parentFirstName" onChange={handleParentChange} required />
                        </div>

                        <div className="parentinfo__main-item">
                            <label htmlFor="parentSecondName">Last name of parent or guardian *</label>
                            <input type="text" name="parentSecondName" onChange={handleParentChange} required />
                        </div>

                        <div className="parentinfo__main-item">
                            <label htmlFor="parentMail">Email address *</label>
                            <input type="mail" name="parentMail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={handleParentChange} required />
                        </div>

                        <div className="parentinfo__main-item">
                            <label htmlFor="parentAddress">Address *</label>
                            <input type="text" name="parentAddress" onChange={handleParentChange} required />
                        </div>

                        <div className="parentinfo__main-item">
                            <label htmlFor="parentPhone">Phone number *</label>
                            <input type="tel" name="parentPhone" maxLength={15} onChange={handleParentChange} required />

                        </div>

                        <div className="parentinfo__main-item">
                            <label htmlFor="parentPhone2">Additional phone number</label>
                            <input type="tel" name="parentPhone2" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder=" Optional" onChange={handleParentChange} />
                        </div>

                    </div>

                    <div className="parentinfo__help">
                        <h3>Request for Financial Support</h3>

                        <p className="parentinfo__help-text">The cost of the camp is $175 per child, with a discounted
                            rate of $75 for additional children from the same family.
                            We understand that financial circumstances may vary,
                            so we offer camp bursaries for families based on financial need. The
                            minimum weekly fee is $50 per child, and fees can be reduced or
                            waived based on family and financial circumstances.
                            Please indicate whether you require financial assistance</p>

                        <div className="parentinfo__help-radio">
                            <p>Do you require financial assistance to pay for the camp?</p>
                            <div className="parentinfo__help-support">
                                <label>
                                    <input type="radio" name="parentSupport" value="YES" checked={parentForm.parentSupport === "YES"} onChange={handleParentChange} required />
                                    Yes
                                </label>
                                <label>
                                    <input className="parentinfo__help-no" type="radio" name="parentSupport" value="NO" checked={parentForm.parentSupport === "NO"}
                                        onChange={(e) => {
                                            handleParentChange(e);
                                            if (parentForm.parentSupport === "NO") {
                                                parentForm.parentSupport = "";
                                            }
                                        }} required />
                                    No
                                </label>
                                {parentForm.parentSupport === "YES" && (
                                    <>
                                        <p style={{ marginBottom: '10px' }}> If Yes, please explain your need. All replies are confidential.</p>

                                        <textarea name="parentSupportDetails" onChange={handleParentChange} cols="30" rows="10" required></textarea>

                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="childreninfo">
                    <h3 className='childreninfo__title'>Children's personal data</h3>


                    <Checkboxes />

                    {forms.map((form, index) => (
                        <div key={index}>
                            <div className="childreninfo__header">
                                <p>Child {index + 1}</p>

                                <img className='childreninfo__header-dell' src={delbtn} onClick={() => handleDeleteForm(index)} />
                            </div>
                            <div className="childreninfo__gender">

                                <p>Gender:</p>

                                <div className="childreninfo__gender-radio">
                                    <label htmlFor="gender"><input type="radio" name="gender" value="Boy" checked={form.gender === "Boy"} onChange={(e) => handleChange(e, index)} /> Boy</label>
                                    <label htmlFor="gender"><input type="radio" name="gender" value="Girl" checked={form.gender === "Girl"} onChange={(e) => handleChange(e, index)} /> Girl</label>

                                </div>

                            </div>

                            <div className="childreninfo__cuaet">

                                <p>Arrived according to the program CUAET:</p>

                                <div className="childreninfo__cuaet-radio">
                                    <label htmlFor="cuaet">
                                        <input type="radio" name="cuaet" value="YES" checked={form.cuaet === "YES"} onChange={(e) => handleChange(e, index)} />
                                        Yes
                                    </label>

                                    <label>
                                        <input type="radio" name="cuaet" value="NO" checked={form.cuaet === "NO"} onChange={(e) => {
                                            handleChange(e, index);
                                            if (form.cuaet === "NO") {
                                                form.arrivalDate = "";
                                            }
                                        }} />
                                        No
                                    </label>
                                </div>
                                {form.cuaet === "YES" && (
                                    <div className="childreninfo__arrival">
                                        <label>
                                            <p>Arrival Date:</p>
                                            <input type="date" className='childreninfo__cuaet-date' name="arrivalDate" value={form.arrivalDate} onChange={(e) => handleChange(e, index)} />
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div className="childreninfo__main">
                                <div className="childreninfo__main-item">
                                    <p>First Name:</p>
                                    <input type="text" name="firstName" value={form.firstName} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="childreninfo__main-item">
                                    <p>Last Name:</p>
                                    <input type="text" name="lastName" value={form.lastName} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="childreninfo__main-item">
                                    <p>Date of Birth:</p>
                                    <input type="date" name="dateOfBirth" min="2000-01-01" max="2023-05-21" value={form.dateOfBirth} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="childreninfo__main-item">
                                    <p>Child's most recent grade completed *</p>
                                    <input type="number" name="gradeCompleted" min={1} max={11} value={form.gradeCompleted} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="childreninfo__main-item">
                                    <p>Languages Spoken *</p>
                                    <input type="text" name="langSpoken" value={form.langSpoken} onChange={(e) => handleChange(e, index)} />
                                </div>

                                <div className="childreninfo__main-item">
                                    <p>Allergies & Dietary restrictions</p>
                                    <input type="text" name="allergies" placeholder="Optional" value={form.allergies} onChange={(e) => handleChange(e, index)} />
                                </div>

                            </div>

                        </div>
                    ))}
                    {/* <button type="button" onClick={handleAddForm}>Add Form</button> */}

                    <img src={addbtn} onClick={handleAddForm} />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* that's what i call procoding */}
                    <p>Don't click submit multiple times</p>
                    <br />
                    <p>It takes a few seconds to send form.</p>
                    <br />
                    <br />


                    <button className='common__button' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default VFT;