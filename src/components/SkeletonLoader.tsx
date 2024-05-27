import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="max-w-lg rounded shadow-lg bg-bookMainBG dark:bg-gray-900  text-white animate-pulse mb-6 mx-4">
      <div className="relative">
        <div className="w-full h-420 bg-gray-700"></div>
        <div className="absolute top-0 left-0 bg-dark px-7 py-4 flex items-center justify-center"></div>
        <div className="absolute top-0 right-0 bg-dark px-9 py-4  flex items-center justify-center"></div>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-1">
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        </div>
        <div className="h-6 bg-gray-700 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        <div className="text-white bg-dark px-9 py-4  mt-3 inline-block rounded-5"></div>

      </div>
    </div>
  );
};

export default SkeletonLoader;
