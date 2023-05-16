import React, { useState } from "react";

function Checkboxes() {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, value: "Checkbox 1", isChecked: false },
        { id: 2, value: "Checkbox 2", isChecked: false },
        { id: 3, value: "Checkbox 3", isChecked: false },
        { id: 4, value: "Checkbox 4", isChecked: false },
        { id: 5, value: "Checkbox 5", isChecked: false },
    ]);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.value === name
                ? { ...checkbox, isChecked: !checkbox.isChecked }
                : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const getCheckedCount = () => {
        return checkboxes.filter((checkbox) => checkbox.isChecked).length;
    };

    return (
        <div>
            <h1>Checkboxes</h1>
            {checkboxes.map((checkbox) => (
                <div key={checkbox.id}>
                    <label htmlFor={checkbox.value}>{checkbox.value}</label>
                    <input
                        type="checkbox"
                        name={checkbox.value}
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange}
                        disabled={
                            checkbox.isChecked === false &&
                            getCheckedCount() >= 2 &&
                            (getCheckedCount() === 2 && checkbox.isChecked === false)
                        }
                    />
                </div>
            ))}
        </div>
    );
}

export default Checkboxes;