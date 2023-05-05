import React,{useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import Toastify from "toastify-js";
function ChefRecipes() {
  const chefrecipes = useLoaderData()
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    Toastify({
      text: "This recipe is now your favorite!",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#F97316",
      color:"#fff",
      stopOnFocus: true,
    }).showToast();
  };
  return (
    <div>
      <div className='card grid grid-cols-2 gap-2 my-container'>
          <div>
            <img src={chefrecipes.image} alt="" />
          </div>
          <div>
              <h1 > <span className='text-4xl'>Recipe name:</span>
              {chefrecipes.recipe_name}</h1>
              
              <p><span className='text-2xl font-semibold'>Short Bio:</span>{chefrecipes.chef_bio}</p>
              <p><span className='text-2xl font-semibold'>Cooking Method:</span>{chefrecipes.cooking_method}</p>
              <p><span className='text-2xl font-semibold'>Recipe:</span>{chefrecipes.recipe}</p>
              <h1><span className='text-2xl font-semibold'>Ingredients:</span> {chefrecipes.ingredients}</h1>
              
               
                <button
                    disabled={isFavorite}
                    onClick={handleFavoriteClick}
                    className="bg-white-500 shadow-lg text-3xl font-semibold text-black py-2 px-4 rounded cursor-pointer"
                  >
                    {isFavorite ? "" : "Favorites"}
                  </button>
          </div>
      </div>
    </div>
  )
}

export default ChefRecipes