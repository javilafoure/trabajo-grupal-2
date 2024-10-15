import React from 'react'
import Menu from '../componets/aside'


export default function Users() {
    return (
        <div className='flex'>

            <Menu />

            <div className='flex flex-col p-10 w-full'>
                <h2 className='text-black font-bold'>Usuarios</h2>
                <table className='text-black text-center w-full' border="1">
                    <thead className='border border-collapse border-solid border-indigo-700'>
                        <tr>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className='border border-solid border-indigo-700'>
                        <tr>
                            <td>name</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>role</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
