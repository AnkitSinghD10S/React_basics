import React, { useEffect, useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] =useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AnkitSinghD10S')
    //     .then(response=> response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    
  return (
    <div className=' text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} alt="Git hub profile picture"  width={300 } height={400} />
    </div>
  )
}

export default Github

export const githubInfoLoader =async()=>{
    const response=await fetch('https://api.github.com/users/AnkitSinghD10S')
    return response.json()
}