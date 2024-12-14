import React from 'react'

const CompleteTask = () => {
  return (
<div
        id="tasklist"
        className="h-full w-[300px] rounded-xl bg-emerald-400 flex-shrink-0 p-5 overflow-auto"
      >
        <div className="flex justify-between items-center">
          <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm">
            High
          </p>
          <p className="font-bold text-sm tracking-tighter">15 Dec 2024 </p>
        </div>
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, consequatur error exercitationem.
        </p>
      </div>  )
}

export default CompleteTask