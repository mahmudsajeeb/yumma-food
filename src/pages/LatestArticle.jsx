import React from 'react' 
import './LatestArticle.css'
function LatestArticle() {
  return (
    <div className='my-container'  >
      <div className='text-center '>
        <h6 className='text-2xl'>KEEP READING</h6>
        <h1  className='text-6xl font-semibold mb-7'>Lates article & news</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/greek-salad-and-boiled-eggs--1536x1074.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg hover:text-orange-600 font-medium text-gray-800 mb-2">
          How to Peel Hard Boiled Eggs Perfectly, Every Single Time
          </h2>
          
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/lemon-ice-cream-1536x1024.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg  hover:text-orange-600 font-medium text-gray-800 mb-2">
          Of Course Ina Garten’s Ice Cream Hack Is Totally Brilliant
          </h2>
           
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/top-view-of-matza-cookies-and-wine-on-table-passover-tale-concept-1536x1025.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg  hover:text-orange-600 font-medium text-gray-800 mb-2">
          Passover Seder for $25? Totally Possible
          </h2>
         
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/old-cook-book-with-ingredients-1536x1024.jpg"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-medium  hover:text-orange-600 text-gray-800 mb-2">
          Salad Freaks Unite—Our Cookbook Is Finally Here
          </h2>
          </div>
      </div>
    </div>
    </div>
  )
}

export default LatestArticle