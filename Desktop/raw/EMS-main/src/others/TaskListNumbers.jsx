import React from 'react';

const TaskListNumbers = ({newData}) => {
  return (
    <div className='flex flex-wrap justify-between gap-6 mt-10 p-4'>
      <div className='rounded-xl w-full sm:w-[45%] md:w-[22%] py-6 px-9 bg-blue-400 shadow-lg'>
        <h2 className='text-3xl font-bold'>{newData.taskCount.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-full sm:w-[45%] md:w-[22%] py-6 px-9 bg-green-400 shadow-lg'>
        <h2 className='text-3xl font-bold'>{newData.taskCount.completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-full sm:w-[45%] md:w-[22%] py-6 px-9 bg-yellow-400 shadow-lg'>
        <h2 className='text-3xl text-black font-bold'>
        {newData.taskCount.active}
        </h2>
        <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl w-full sm:w-[45%] md:w-[22%] py-6 px-9 bg-red-400 shadow-lg'>
        <h2 className='text-3xl font-bold'>{newData.taskCount.failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
