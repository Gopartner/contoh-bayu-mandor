import React from 'react';

const Ewallet = ({ ewallet, onEwalletChange, phoneNumber, onPhoneNumberChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ewallet">
            E-wallet
        </label>
        <select
            id="ewallet"
            value={ewallet}
            onChange={onEwalletChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
            <option value="Dana">Dana</option>
            <option value="OVO">OVO</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
        </label>
        <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
);

export default Ewallet;

