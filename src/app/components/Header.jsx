"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'

function Header() {

        const router = useRouter();

        const [pokeName, setPokeName] = useState("");

        console.log(pokeName)

        const handleInput = (e) => {
            setPokeName(e.target.value);
        }

        const handleForm = (e) => {
            e.preventDefault();
            
            router.push(`/pokesearch/${pokeName}`)
        }

    return (
   <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 h-[300px] flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-white text-5xl'>LECOSOET Color Finder App</h1>
            <p className='text-white text-2xl'>QA Team color internal website</p>
            <form onSubmit={handleForm} className='flex mt-2'>
                <input 
                    type="text" className='w-full rounded-md border-gray-300 px-3 py-2 text-gray-700 shadow-md'
                    placeholder='Color type, Material and color name ...' 
                    onChange={handleInput}
                />
                <button className='inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md' type="submit">Search</button>
            </form>
        </div>
   </header>
  )
}

export default Header
