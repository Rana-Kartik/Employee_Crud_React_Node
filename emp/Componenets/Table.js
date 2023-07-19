import { BiEdit,BiTrashAlt } from "react-icons/bi"

export default function Table(){
    return(
        <table className="min-w-full table-auto gap-100">
        <thead>
            <tr className='bg-white-800'>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Name</span>
                </th>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Email</span>
                </th>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Salary</span>
                </th>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Status</span>
                </th>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Birthday</span>
                </th>
                <th className='px-16 py-2'>
                    <span className="text-gray-200">Actions</span>
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr className="bg-red-50 text-center">
                <td className="px-16 py-2 flex-row items-center"> 
                    <img src="#" alt=""/>
                    <span className="text-center ml-2 font-semibold">Daily Tution</span>
                </td>
                <td className="px-16 py-2">
                    <span>aa@gmail.com</span>
                </td>
                <td className="px-16 py-2">
                    <span>$20000</span>
                </td>
                <td className="px-16 py-2">
                    <span>Active</span>
                </td>
                <td className="px-16 py-2">
                    <span>10-5-2022</span>
                </td>
                <td className="px-16 py-2">
                    <button className="cursor"><span className="bg-green-500 text-white px-5 py-1">Active</span></button>
                </td>
                <td className="px-16 py-2 flex justify-around gap-10">
                    <button className="cursor"><BiEdit size={27} color={"rgb(34,197,194)"}></BiEdit></button>
                    <button className="cursor"><BiTrashAlt size={27} color={"rgb(244,63,94)"}></BiTrashAlt></button>
                </td>
            </tr>
        </tbody>
      </table>
    )
}