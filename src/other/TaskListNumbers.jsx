import React from 'react'

const TaskListNumbers = (props) => {

    const {active, completed, failed, newTask} = props.data.taskNumbers

  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className="w-[40%] bg-blue-400 px-10 py-6 rounded-xl">
            <h2 className='text-4xl font-semibold mb-2'>{newTask}</h2>
            <h3 className="text-2xl font-medium tracking-tighter">New Task</h3>
        </div>
        <div className="w-[40%] bg-emerald-500 px-10 py-6 rounded-xl">
            <h2 className='text-4xl font-semibold mb-2'>{completed}</h2>
            <h3 className="text-2xl font-medium tracking-tighter">Completed Tasks</h3>
        </div>
        <div className="w-[40%] bg-yellow-500 px-10 py-6 rounded-xl text-black">
            <h2 className='text-4xl font-semibold mb-2'>{active}</h2>
            <h3 className="text-2xl font-medium tracking-tighter">Accepted Tasks</h3>
        </div>
        <div className="w-[40%] bg-red-600 px-10 py-6 rounded-xl">
            <h2 className='text-4xl font-semibold mb-2'>{failed}</h2>
            <h3 className="text-2xl font-medium tracking-tighter">Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers