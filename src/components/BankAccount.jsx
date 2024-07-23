import React from 'react';

const BankAccount = ({ bank, onBankChange, accountNumber, onAccountNumberChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank">
            Bank
        </label>
        <select
            id="bank"
            value={bank}
            onChange={onBankChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
            <option value="BCA">BCA</option>
            <option value="BRI">BRI</option>
            <option value="BNI">BNI</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
            Account Number
        </label>
        <input
            id="accountNumber"
            type="text"
            value={accountNumber}
            onChange={onAccountNumberChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
);

export default BankAccount;

