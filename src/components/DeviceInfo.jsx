import React from 'react';

const DeviceInfo = ({ deviceInfo }) => (
    <div className="mb-4">
        <input
            type="hidden"
            value={deviceInfo}
        />
    </div>
);

export default DeviceInfo;

