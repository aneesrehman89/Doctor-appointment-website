import React from 'react';

const TaskList = () => {
  return (
    <div
      id='tasklist'
      className='h-full overflow-x-auto flex items-center justify-center lg:justify-start gap-10 md:gap-20 lg:gap-5 flex-wrap w-full p-4 mt-10'
    >
        <div className='flex-shrink-0 h-full w-full sm:w-[45%] md:w-[300px] p-5 bg-blue-400 rounded-xl shadow-lg'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>
              High
            </h3>
            <h4 className='text-sm text-gray-800'>20 Feb 2024</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold text-gray-900'>
            Make a YouTube video
          </h2>

          <p className='text-sm mt-2 text-gray-700 pb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam reiciendis magni, vero ducimus architecto quas quisquam.
          </p>
        </div>

        <div className='flex-shrink-0 h-full w-full sm:w-[45%] md:w-[300px] p-5 bg-green-400 rounded-xl shadow-lg'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>
              High
            </h3>
            <h4 className='text-sm text-gray-800'>20 Feb 2024</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold text-gray-900'>
            Make a YouTube video
          </h2>

          <p className='text-sm mt-2 text-gray-700 pb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam reiciendis magni, vero ducimus architecto quas quisquam.
          </p>
        </div>

        <div className='flex-shrink-0 h-full w-full sm:w-[45%] md:w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>
              High
            </h3>
            <h4 className='text-sm text-gray-800'>20 Feb 2024</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold text-gray-900'>
            Make a YouTube video
          </h2>

          <p className='text-sm mt-2 text-gray-700 pb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam reiciendis magni, vero ducimus architecto quas quisquam.
          </p>
        </div>

        <div className='flex-shrink-0 h-full w-full sm:w-[45%] md:w-[300px] p-5 bg-red-400 rounded-xl shadow-lg'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>
              High
            </h3>
            <h4 className='text-sm text-gray-800'>20 Feb 2024</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold text-gray-900'>
            Make a YouTube video
          </h2>

          <p className='text-sm mt-2 text-gray-700 pb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam reiciendis magni, vero ducimus architecto quas quisquam.
          </p>
        </div>
      </div>
  );
};

export default TaskList;
