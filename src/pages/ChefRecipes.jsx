import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ChefRecipes() {
  const chefrecipes = useLoaderData()
  console.log(chefrecipes.name)
  return (
    <div>
      <h1>{chefrecipes.name}</h1>
    </div>
  )
}

export default ChefRecipes