import React, { useState } from 'react';
import ButtonFarmDirect from '../components/ButtonFarmDirect';
import ButtonCancel from '../components/ButtonCancel';

const UserFarmerShoperModal = ({ closeModal }) => {
    const [selectedOption, setSelectedOption] = useState('farmer'); // Set the default selected option to 'farmer'

    const handleOptionChange = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-filter backdrop-blur-sm">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>

            {/* modal background white */}
            <div className="relative w-[90%] h-[90vh] bg-white rounded-lg shadow-lg py-2 px-2">

                {/* top title */}
                <div className='flex items-center justify-between'>
                    <h2 className="text-xl font-bold mx-auto">Edit User General Details</h2>
                    <button onClick={closeModal} className="p-2 text-[#000000] hover:text-[#010101] transition-all ease-in duration-300 focus:outline-none border-[#D8D8DA] border-2 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {/* Option Checkbox */}
                <div className="text-center mb-4">
                    <div class="relative flex flex-col text-gray-700 bg-white rounded-xl bg-clip-border">
                        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                            <div role="button" onClick={() => handleOptionChange('shopper')} className={`flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedOption === 'shopper' ? 'bg-blue-gray-50 bg-opacity-80 text-blue-gray-900' : ''}`}>
                                <label htmlFor="vertical-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
                                    <div className="grid mr-3 place-items-center">
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                                                <input id="vertical-list-react" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" checked={selectedOption === 'shopper'} onChange={() => handleOptionChange('shopper')} />
                                                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900" onClick={() => handleOptionChange('shopper')} >I’m a Shopper</p>
                                </label>
                            </div>
                            <div role="button" onClick={() => handleOptionChange('farmer')} className={`flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${selectedOption === 'farmer' ? 'bg-blue-gray-50 bg-opacity-80 text-blue-gray-900' : ''}`}>
                                <label htmlFor="vertical-list-vue" className="flex items-center w-full px-3 py-2 cursor-pointer">
                                    <div className="grid mr-3 place-items-center">
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-vue">
                                                <input id="vertical-list-vue" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" checked={selectedOption === 'farmer'} onChange={() => handleOptionChange('farmer')} />
                                                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900" onClick={() => handleOptionChange('farmer')}>I’m a Farmer (Farmer can shop)</p>
                                </label>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* button */}
                <div className='absolute w-[96%] bottom-5 p-2'>
                    <div className='flex items-center justify-between flex-row'>
                        <ButtonCancel onClick={closeModal} />
                        <ButtonFarmDirect title="Save" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFarmerShoperModal;
