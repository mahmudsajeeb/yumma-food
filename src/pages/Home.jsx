import React from 'react' 
import './Home.css'
import LatestArticle from './LatestArticle'
import Quote from './Quote'
import Chef from './Chef'
function Home() {
  return (
    <>
    <div className='banner flex justify-center items-center'>
      <div className='text-center'>
      <h1 className='text-6xl text-orange-600 font-bold'>Boiled</h1>
        <h3 className='text-4xl font-bold'>no matter how you cook, <br /> Yumma has many the,<br /> recipes</h3>
        <p className='text-2xl'>Spaghetti carbonara is a delicious and satisfying dish that is easy to <br />make and perfect for any occasion.</p>
      </div>
    </div>
    <Quote />
    <Chef />
    <LatestArticle />
    
    </>
  )
}

export default Home