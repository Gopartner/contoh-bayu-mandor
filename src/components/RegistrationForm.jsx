// src/RegistrationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { database } from '../firebaseConfig';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    bankName: 'CIMB',
    accountName: '',
    accountNumber: '',
  });
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);

  const navigate = useNavigate();

  const banks = ['BCA', 'BNI', 'BRI', 'CIMB', 'DANA', 'Danamon', 'GOPAY', 'MANDIRI', 'MAYBANK', 'OVO', 'PANIN'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBankSelection = (bank) => {
    setFormData({ ...formData, bankName: bank });
    setIsBankModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Kirim data ke Firebase
    const registrationsRef = ref(database, 'registrations');
    push(registrationsRef, formData)
      .then(() => {
        // Redirect ke halaman profil
        navigate('/profile', { state: { formData } });
      })
      .catch((error) => alert('Error submitting form: ' + error.message));
  };

  return (
    <div className="bg-gray-800 text-white p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label>Konfirmasi Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Konfirmasi Password"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Alamat email anda"
          />
        </div>
        <div className="mb-3">
          <label>No. Telp/HP</label>
          <div className="flex">
            <span className="flex items-center bg-yellow-500 text-black px-2 rounded-l">+62</span>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 rounded-r bg-gray-700"
              placeholder="Nomor telepon anda"
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Referral</label>
          <input
            type="text"
            value="gifters168"
            readOnly
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
          />
        </div>
        <hr className="my-4" />
        <h3 className="text-lg mb-2 font-bold">Pengaturan Bank</h3>
        <div className="mb-3">
          <label>Nama Bank</label>
          <button
            type="button"
            onClick={() => setIsBankModalOpen(true)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-left"
          >
            {formData.bankName}
          </button>
        </div>
        <div className="mb-3">
          <label>Nama Rekening</label>
          <input
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Nama rekening anda"
          />
          <p className="text-xs mt-1">* Nama lengkap anda sesuai dibuku tabungan</p>
        </div>
        <div className="mb-3">
          <label>Nomor Rekening</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Nomor rekening"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full"
        >
          Daftar
        </button>
      </form>

      {isBankModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black w-80 p-4 rounded">
            <h3 className="text-xl mb-4">Pilih Nama Bank</h3>
            <ul>
              {banks.map((bank) => (
                <li
                  key={bank}
                  onClick={() => handleBankSelection(bank)}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {bank}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsBankModalOpen(false)}
              className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

