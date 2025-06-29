import React from 'react';

const UserNameInput = ({ userName, setUserName }) => {
  return (
    <div className="mb-6">
      <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-2">
        Your Name
      </label>
      <input
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        placeholder="Enter your name to start the test"
        maxLength={50}
      />
    </div>
  );
};

export default UserNameInput;