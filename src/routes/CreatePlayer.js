import React, { useState } from 'react';
import { API } from 'aws-amplify';
import NavBar from './NavBar';

function FormComponent() {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    position: '',
    number: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace 'YourApiName' with the name of your AWS Amplify API
      const apiName = 'myapi';
      const path = '/players'; // Replace with your actual API endpoint
      const myInit = {
        body: formData,
      };

      const response = await API.post(apiName, path, myInit);
      
      // Handle success or show a success message
      console.log('Response:', response);
    } catch (error) {
      // Handle error or show an error message
      console.log(formData)
      console.error('Error:', error);
    }
  };

  return (
    <div className="center">
    <NavBar />
    <div>
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
            Number:
            <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
            />
            </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default FormComponent;