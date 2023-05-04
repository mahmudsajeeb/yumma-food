import React, { useEffect, useState } from "react";
import SingeleChef from "./SingeleChef";


function Chef() {
  const [chefs, setChef] = useState([]);

  useEffect(() => {
    fetch("https://server-saifurrahmansajib37-gmailcom.vercel.app/chef")
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="my-container">
    <h1 className="text-center text-4xl mt-9 mb-4">All Chefs</h1>
      <div className="grid grid-cols-3 gap-4 mb-2">
        {
          chefs.map(chef=>  <SingeleChef chef={chef} />)
        }
      </div>
    </div>
  )
}

export default Chef