import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    homeroomClass: '',
    studentId: '',
    favoriteLunch: '',
  });

  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '20px' }}>
      <h1>Student Registration Form</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Homeroom Class Number:
          <input
            type="text"
            name="homeroomClass"
            value={formData.homeroomClass}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
        </label>
        <br />
        <fieldset>
          <legend>Favorite Lunch Option:</legend>
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="Pizza"
              checked={formData.favoriteLunch === 'Pizza'}
              onChange={handleChange}
            />
            Pizza
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="Salad"
              checked={formData.favoriteLunch === 'Salad'}
              onChange={handleChange}
            />
            Salad
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="Sandwich"
              checked={formData.favoriteLunch === 'Sandwich'}
              onChange={handleChange}
            />
            Sandwich
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="favoriteLunch"
              value="Pasta"
              checked={formData.favoriteLunch === 'Pasta'}
              onChange={handleChange}
            />
            Pasta
          </label>
        </fieldset>
      </form>
      <label>
        Choose Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </label>
      <h2>Entered Information:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Address: {formData.address}</p>
      <p>Homeroom Class Number: {formData.homeroomClass}</p>
      <p>Student ID: {formData.studentId}</p>
      <p>Favorite Lunch: {formData.favoriteLunch}</p>
    </div>
  );
}

export default StudentForm;

