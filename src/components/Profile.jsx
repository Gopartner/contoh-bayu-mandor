// src/Profile.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div className="bg-gray-800 text-white p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Profile</h2>
      <div className="mb-3">
        <h3 className="text-lg mb-2 font-bold">User Information</h3>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>No. Telp/HP:</strong> {formData.phoneNumber}</p>
      </div>
      <div className="mb-3">
        <h3 className="text-lg mb-2 font-bold">Bank Information</h3>
        <p><strong>Bank Name:</strong> {formData.bankName}</p>
        <p><strong>Account Name:</strong> {formData.accountName}</p>
        <p><strong>Account Number:</strong> {formData.accountNumber}</p>
      </div>
    </div>
  );
};

export default Profile;

