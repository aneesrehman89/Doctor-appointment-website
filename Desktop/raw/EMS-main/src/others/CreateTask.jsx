import React from 'react';

const CreateTask = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 p-4'>
      <div className='w-full max-w-5xl bg-gray-800 p-6 md:p-10 rounded-lg shadow-md'>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
          {/* Left Section */}
          <div className='grid grid-cols-1 gap-6'>
            {/* Task Title */}
            <div className='flex flex-col'>
              <label className='text-gray-400 text-sm font-medium mb-1'>
                Task Title
              </label>
              <input
                type='text'
                placeholder='Make a UI design'
                className='bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg px-4 py-2'
              />
            </div>

            {/* Date */}
            <div className='flex flex-col'>
              <label className='text-gray-400 text-sm font-medium mb-1'>
                Date
              </label>
              <input
                type='date'
                placeholder='dd/mm/yyyy'
                className='bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg px-4 py-2'
              />
            </div>

            {/* Assign To */}
            <div className='flex flex-col'>
              <label className='text-gray-400 text-sm font-medium mb-1'>
                Assign to
              </label>
              <input
                type='text'
                placeholder='employee name'
                className='bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg px-4 py-2'
              />
            </div>

            {/* Category */}
            <div className='flex flex-col'>
              <label className='text-gray-400 text-sm font-medium mb-1'>
                Category
              </label>
              <input
                type='text'
                placeholder='design, dev, etc'
                className='bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg px-4 py-2'
              />
            </div>
          </div>

          {/* Right Section */}
          <div className='flex flex-col justify-between h-full'>
            {/* Description */}
            <div className='flex flex-col flex-grow'>
              <label className='text-gray-400 text-sm font-medium mb-1'>
                Description
              </label>
              <textarea
                rows='10'
                placeholder='Add a description...'
                className='bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg px-4 py-2 h-full'
              ></textarea>
            </div>

            {/* Button */}
            <div className='mt-4'>
              <button
                type='submit'
                className='w-full bg-emerald-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all'
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
