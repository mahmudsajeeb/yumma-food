import React, { useEffect, useState } from "react";
import SingeleChef from "./SingeleChef";
 
import {  useNavigation } from 'react-router-dom'
import LoadingSpinner from "./LoadingSpinner";

function Chef() {
  const [chefs, setChef] = useState([]);

  useEffect(() => {
    fetch("https://server-saifurrahmansajib37-gmailcom.vercel.app/chef")
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);
  const navigation = useNavigation() 
  if (navigation.state === 'loading') {
    return <LoadingSpinner />
  }
  return (
    <div className="my-container">
    <h1 className="text-center text-4xl mt-9 mb-4">All Chefs</h1>
      <div className="grid lg:grid-cols-3  gap-4 mb-2">
        {
          chefs.map(chef=>  <SingeleChef chef={chef} key={chef.id} />)
        }
      </div>
    </div>
  )
}

export default Chef