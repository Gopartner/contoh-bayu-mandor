import React from 'react';

const Otp = ({ otp }) => (
    <div className="mb-4">
        <input
            type="hidden"
            value={otp}
        />
    </div>
);

export default Otp;

