import SteinStore from "stein-js-client";
import { useState } from "react";

const store = new SteinStore(process.env.REACT_APP_STEIN_KEY);

const VFT = () => {
    const [forms, setForms] = useState([{
        gender: "", cuaet: "", arrivalDate: "",
        firstName: "", lastName: "", dateOfBirth: "", gradeCompleted: "",
        langSpoken: "", allergies: ""
    }]);
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
                errors.push(`Form ${index + 1}: Languages Spoken is required.`);
            }
        });
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }
        const checkedBoxes = Array.from(document.querySelectorAll('input[name="camp"]:checked')).map(checkbox => checkbox.value);
        console.log(checkedBoxes);
        console.log(forms);
        for (let i = 0; i < checkedBoxes.length; i++) {
            store
                .append(checkedBoxes[i], forms)
                .then(res => {
                    console.log(res);
                });
        }
    };


    const handleAddForm = () => {
        if (forms.length < 3) {
            setForms([...forms, {
                gender: "", cuaet: "", arrivalDate: "",
                firstName: "", lastName: "", dateOfBirth: "", gradeCompleted: "",
                langSpoken: "", allergies: ""
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


    return (
        <div className="form__container container">

            <h2 className="form__title">Registration form</h2>


            <form onSubmit={handleSubmit} >
                {forms.map((form, index) => (
                    <div key={index}>
                        <h3>Child {index + 1}</h3>

                        <div className="checkboxes">
                            <input type="checkbox" value="Sheet1" name="camp" />
                            <input type="checkbox" value="Sheet2" name="camp" />
                            <input type="checkbox" value="three" name="camp" />
                        </div>
                        <label>
                            Gender:
                            <br />
                            <input type="radio" name="gender" value="Boy" checked={form.gender === "Boy"} onChange={(e) => handleChange(e, index)} /> Boy
                            <br />
                            <input type="radio" name="gender" value="Girl" checked={form.gender === "Girl"} onChange={(e) => handleChange(e, index)} /> Girl
                        </label>
                        <br />
                        CUAET:
                        <label>
                            <input type="radio" name="cuaet" value="YES" checked={form.cuaet === "YES"} onChange={(e) => handleChange(e, index)} />
                            YES
                        </label>
                        <label>
                            <input type="radio" name="cuaet" value="NO" checked={form.cuaet === "NO"} onChange={(e) => {
                                handleChange(e, index);
                                if (form.cuaet === "NO") {
                                    form.arrivalDate = "";
                                }
                            }} />
                            NO
                        </label>
                        {form.cuaet === "YES" && (
                            <>
                                <br />
                                <label>
                                    Arrival Date:
                                    <input type="date" name="arrivalDate" value={form.arrivalDate} onChange={(e) => handleChange(e, index)} />
                                </label>
                            </>
                        )}
                        <br />
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={form.firstName} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={form.lastName} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />
                        <label>
                            Date of Birth:
                            <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />
                        <label>
                            Child's most recent grade completed *
                            <input type="number" name="gradeCompleted" min={1} max={11} value={form.gradeCompleted} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />
                        <label>
                            Languages Spoken *
                            <input type="text" name="langSpoken" value={form.langSpoken} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />
                        <label>
                            Allergies & Dietary restrictions
                            <input type="text" name="allergies" placeholder="Optional" value={form.allergies} onChange={(e) => handleChange(e, index)} />
                        </label>
                        <br />

                        <button type="button" onClick={() => handleDeleteForm(index)}>Delete Form</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddForm}>Add Form</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VFT;