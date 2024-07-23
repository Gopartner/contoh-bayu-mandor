import React from 'react';

const RegisterForm = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Daftar</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400">Username</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400">Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400">Ulangi Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400">Alamat Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-400">Nomor Handphone</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-blue-500 p-2 rounded text-white font-bold">Daftar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

