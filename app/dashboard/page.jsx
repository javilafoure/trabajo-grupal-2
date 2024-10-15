import React from 'react'
import Menu from '../componets/aside'

function Dashboard() {
    return (
        <div className='flex text-center font-serif'>
            <Menu />
            <div className='flex flex-col py-4'>
                <h1 className='text-black text-3xl font-semibold m-3 underline decoration-text '>Welcome</h1>
                <p className='text-black p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat delectus eius maiores voluptas perferendis culpa quos,<br/> labore placeat ratione odio explicabo tenetur, est excepturi fugiat.</p>
            </div>
        </div>
    )
}

export default Dashboard
