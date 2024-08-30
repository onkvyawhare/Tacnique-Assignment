import React, { useState } from 'react';
import Form from './Form';
import { patchUser } from '../api';

const Card = ({ id, firstName, lastName, email, company, removeElem }) => {
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    company: company,
  });

  const [open, setOpen] = useState(false);

  const handleUpdate = async (updatedFormData) => {
    try {
      let response = await patchUser(updatedFormData, id);

      if (response.status === 200) {
        setFormData(updatedFormData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    removeElem(id);
  };

  const handleEditClick = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 hover:scale-110 transition-all duration-300 ease-in gap-4 p-8 mt-8 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] relative w-full max-w-lg">
      {/* Card Number */}
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
        #{id}
      </div>

      <div className='mx-auto' >
      <div >
        <p className="text-gray-700 font-semibold text-xl text-left truncate">
          First Name: {formData.firstName}
        </p>
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-xl text-left truncate">
          Last Name: {formData.lastName}
        </p>
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-base text-left">
          Email: {formData.email}
        </p>
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-base text-left">
          Company: {formData.company}
        </p>
      </div>

      
      </div>
      <div className="flex justify-end items-center w-full mt-4">
        {/* Delete Button */}
        <button
          className="border-2 border-red-600 text-red-600 uppercase font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in hover:text-white hover:bg-red-600 mx-auto"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

      {/* Modal component */}
      <Form
        id={id}
        firstName={formData.firstName}
        lastName={formData.lastName}
        email={formData.email}
        company={formData.company}
        onUpdate={handleUpdate}
        add={false} // Indicates that this is an edit operation
        onAdd={() => {}} // No action needed here
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Card;
