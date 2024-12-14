import React from 'react'

const FailedTask = () => {
  return (
<div
        id="tasklist"
        className="h-full w-[300px] rounded-xl bg-yellow-400 flex-shrink-0 p-5 overflow-auto text-black"
      >
        <div className="flex justify-between items-center">
          <p className="bg-red-700 px-3 py-1 font-semibold rounded-md text-sm text-white">
            LOW
          </p>
          <p className="font-bold text-sm tracking-tighter">16 Dec 2024 </p>
        </div>
        <h2 className="font-bold mt-7 text-2xl tracking-tighter">
          Ek aur Task
        </h2>
        <p className="mt-3 text-xl tracking-tighter">
          Kuch karan hy jindagi mein Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam, sequi, consequatur error exercitationem
          nisi delectus quos nam earum officiis corrupti ab mollitia omnis
          repudiandae. Sequi asperiores cumque ratione repellat ullam.
        </p>
      </div>  )
}

export default FailedTask