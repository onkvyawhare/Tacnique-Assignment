import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Form = ({ id, firstName, lastName, email,department, onUpdate, add, onAdd }) => {

   
      // State variable to control modal open/close
  const [open, setOpen] = useState(false);
  
  // Function to handle modal open
  const handleOpen = () => setOpen(true);
  
  // Function to handle modal close
  const handleClose = () => setOpen(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (add) {
      onAdd(formData); // Call onAdd function for adding new data
    } else {
      onUpdate(formData); // Call onUpdate function for updating existing data
    }
    handleClose(); // Close the modal after submission
  };

  // State variable and function to manage form data
  const [formData, setFormData] = useState({
    firstName: add ? "" : firstName,
    lastName: add ? "" : lastName,
    email: add ? "" : email,
    department: add ? "" : department,
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    <div>
      {/* Button to trigger modal */}
      <Button onClick={handleOpen} color="secondary">
        {add ? 'Add new data' : 'Edit →'}
      </Button>

      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Box
          sx={{
            maxWidth: 500,
            width: '100%',
            margin: 'auto',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: 'background.paper',
          }}
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            {add ? 'Add User Data' : 'Update User Data'}
          </h2>

          {/* Form inside the modal */}
          <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
            {/* Input fields for first name and last name */}
            <Box display="flex" flexDirection="column" gap={2} mb={3}>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Box>

            {/* Input field for email */}
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            {/* Input field for company */}
            <TextField
              label="department"
              variant="outlined"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            {/* Submit button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: 3 }}
            >
              {add ? 'Add' : 'Update'}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default Form
