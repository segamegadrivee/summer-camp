import React, { useState } from "react";

function Checkboxes() {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, value: "03 July - 07 July", isChecked: false },
        { id: 2, value: "17 July — 21 July", isChecked: false },
        { id: 3, value: "24 July — 28 July", isChecked: false },
        { id: 4, value: "14 August — 18 August", isChecked: false },
        { id: 5, value: "21 August — 25 August", isChecked: false },
    ]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.value === value
                ? { ...checkbox, isChecked: !checkbox.isChecked }
                : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const getCheckedCount = () => {
        return checkboxes.filter((checkbox) => checkbox.isChecked).length;
    };

    return (
        <div className="childreninfo__checkboxes">

            {checkboxes.map((checkbox) => (
                <div className="childreninfo__checkboxes-item" key={checkbox.id}>
                    <input
                        type="checkbox"
                        value={checkbox.value}
                        name="camp"
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange}
                        disabled={
                            checkbox.isChecked === false &&
                            getCheckedCount() >= 2 &&
                            (getCheckedCount() === 2 && checkbox.isChecked === false)
                        }
                    />
                    <label htmlFor={checkbox.value}>{checkbox.value}</label>
                </div>
            ))}
        </div>
    );
}

export default Checkboxes;