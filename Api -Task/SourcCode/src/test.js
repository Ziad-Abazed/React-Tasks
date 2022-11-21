import React, { useState, useEffect } from "react";

const Data = () => {
  const [hasError, setErrors] = useState(false);
  const [info, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, );

  return (
    <div>{
    
        info.map((item) => { return (
        <ol key = { item.id } >
       User_Name: { item.username }

    
        </ol>
    )
      
    } 
        
      
        )}

    </div>
  );
};
export default Data;