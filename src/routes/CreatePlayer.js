import React, { useState } from 'react';
import { API } from 'aws-amplify';
import NavBar from './NavBar';
import './FormComponent.css'; 

function FormComponent() {
  const initialFormData = {
    firstname: '',
    lastname: '',
    position: '',
    number: 0,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Check if the input is a file input (for image)
    if (type === 'file') {
      const imageFile = files[0];
      setFormData({ ...formData, [name]: imageFile });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiName = 'myapi';
    const path = '/players';

    const myInit = {
      body: formData, // Convert the form data to JSON
    };

    try {
      // Create a FormData object to send the image file
      const formDataToSend = new FormData();
      formDataToSend.append('firstname', formData.firstname);
      formDataToSend.append('lastname', formData.lastname);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('number', formData.number);
      const response = await API.post(apiName, path, myInit);
      console.log('Response:', response);

      // Set success message and reset form values
      setSuccessMessage(true);
      setFormData(initialFormData);
      console.log(formData);
      
    } catch (error) {
      console.log(formData);
      console.error('Error:', error);
    }
  };

  return (
    <div className="center">
      <NavBar />
      <div className="form-container">
        <h2>Create a new player</h2>
        {successMessage && (
          <div className="success-message">
            Player has been successfully created.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select Position</option>
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Forward">Forward</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              inputMode="numeric" // Specify input mode as numeric
              min="0" // Set minimum value to 0 to prevent negative numbers
              style={{
                /* Use inline styles for CSS styling */
                appearance: 'textfield', // Hide up and down arrows in some browsers
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                fontSize: '16px',
              }}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept=".jpeg, .png, .jpg" // Specify accepted file types (only .png in this case)
              required
            />
          </div> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
