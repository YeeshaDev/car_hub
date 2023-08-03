import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const SearchModal = ({ onClose }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-[0.75] z-[9999]">
      <div className=" p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search Car..."
          className="w-[90vw] p-2 border border-b-8 border-t-0 border-x-0 border-gray-200 rounded-md bg-transparent mt-10 text-white"
          onKeyDown={handleKeyPress}
        />
        <button className="absolute top-5 right-10 mt-2 px-4 py-2 bg-[var(--primary)] text-white rounded-md" onClick={onClose}>
          <FaTimesCircle/>
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
