import React from 'react'
import { Link } from 'react-router-dom'
function SingeleChef({chef}) {
  const {name,image,like,recipes,experience} =chef 
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
         
        <img className="w-96 h-72 " src={image} alt="Card image" />
        
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">
            Experience: {experience} years
          </p>
          <p className="text-gray-700 text-base">
            Recipe:{recipes}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-600 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M13.225 2.027a6.5 6.5 0 018.932 8.747l-.797.929-1.608-1.39.006-.007a4.5 4.5 0 10-6.259-6.515l-.012.012L12.09 4.047l-.002-.002a2.5 2.5 0 00-3.563 3.486l.017.018 1.414 1.414-4.242 4.242L.25 15.492a1.5 1.5 0 002.121 2.121l3.11-3.109.001.001 4.242-4.242 1.414 1.414.018.017a2.5 2.5 0 003.486-3.563l-.002-.002-1.414-1.414-.707-.707 2.293-2.293zm2.353 10.267a3.5 3.5 0 11-4.95-4.95 3.5 3.5 0 014.95 4.95z" clipRule="evenodd" />
              </svg>
              {like} likes
            </div>
          <Link to={`/chefrecipes/${chef.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Recipes
            </button>
          </Link>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default SingeleChef