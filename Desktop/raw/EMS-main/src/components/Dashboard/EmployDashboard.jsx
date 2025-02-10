import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployDashboard = ({data}) => {

  return (
    <div>
        <div className='max-w-7xl mx-auto'>
        <TaskListNumbers newData ={data} />
        <TaskList/>
        </div>
        
    </div>
  )
}

export default EmployDashboard