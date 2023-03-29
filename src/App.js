import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        birthYear: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData));
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">ФИО:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Номер телефона:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="birthYear">Год рождения:</label>
                <input type="number" id="birthYear" name="birthYear" value={formData.birthYear} onChange={handleInputChange} />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default RegistrationForm;
