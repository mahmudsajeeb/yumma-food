import React from 'react'

function Quote() {
  return (
    <div className='my-container mt-6'>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/home-cooked-happiness-1536x1024.jpg" alt="" className="w-full   object-cover" />
 
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <p className='text-orange-700'>WHO WE ARE?</p>
        <div className="p-4">
          <h2 className="text-5xl font-bold mb-2">One thousand flavors in one place.</h2>
          <p className="text-gray-700 mb-8 mt-4">Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque. </p>               
          <p className="text-gray-700">Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque. </p>               
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Quote