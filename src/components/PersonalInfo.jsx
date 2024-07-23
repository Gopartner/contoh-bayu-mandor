import React from 'react';

const PersonalInfo = ({ name, onNameChange, email, onEmailChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
        </label>
        <input
            id="name"
            type="text"
            value={name}
            onChange={onNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
        </label>
        <input
            id="email"
            type="email"
            value={email}
            onChange={onEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
);

export default PersonalInfo;

