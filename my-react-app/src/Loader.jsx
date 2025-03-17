import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
