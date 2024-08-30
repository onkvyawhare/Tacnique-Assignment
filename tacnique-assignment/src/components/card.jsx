import React, { useState } from 'react';
import Form from './Form';
import { patchUser } from "../api";


const Card = ({ id, firstName, lastName, email, company, removeElem }) => {
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    company,
  });

  const [open, setOpen] = useState(false);

  const handleUpdate = async (updatedFormData) => {
    try {
      const response = await patchUser(updatedFormData, id);

      if (response.status === '200') {
        setFormData(updatedFormData);
        setOpen(false); // Close modal after successful update
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    removeElem(id);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] relative">
      {/* Card Number */}
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
        {/* You can set this to any card number or index */}
        #{id}
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">
          {formData.firstName}
        </p>
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">
          {formData.lastName}
        </p>
      </div>

      <div>
        <p className="text-gray-600 font-normal text-sm text-left">
          {formData.email}
        </p>
      </div>

      <div>
        <p className="text-gray-500 font-normal text-sm text-left">
          {formData.company}
        </p>
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        {/* Edit Button */}
        <button
          className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
          onClick={() => setOpen(true)}
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          className="border-2 border-red-600 text-red-600 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-red-600"
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