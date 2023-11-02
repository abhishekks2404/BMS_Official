import React, { useState } from 'react';
import axios from 'axios';

const AddForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    // Define form fields based on your PostgreSQL table columns
    employee_name: '',
    department: '',
    project_name:'',
    portfolio:'',
    employee_role: '',
    availability:'',
    is_active:'',
    // Add other fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5004/api/add', formData);
      // Assuming your server returns the added data
      const addedData = response.data;
      onAdd(addedData);
      onClose();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Render form fields based on formData */}
        {/* Example: */}
        <input type="text" name="employee_name" value={formData.employee_name} onChange={handleChange} />
        {/* Add other form fields here */}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
