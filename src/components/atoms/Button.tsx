import React from 'react'
interface IButton {
    label: string;
    onClick: void;
}
const Button = ({ label, onClick }: IButton) => {
    return (
        <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' role='button' onClick={()=>onClick}>{label}</button>
    )
}



export default Button