import { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props { }

const Restauration: NextPage<Props> = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return <><div>
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/" className="shrink-0"><img src="logo.png" alt="logo"
                    className='md:w-[170px] w-36' />
                </a>
     
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" onClick={() => { router.push("connexion"); }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connexion</button>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Acceuil</a>
                    </li>
                    <li>
                        <a href="/service" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nos Services</a>
                    </li>
                    <li>
                        <a href="/habitat" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nos habitats</a>
                    </li>
                    <li>
                        <a href="/nouscontacter" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nous contacter</a>
                    </li>
                </ul>
            </div>
        </div></nav>
    <br />
        <div>
            <br />
            <br />
            <br />
            <br />
            <p className="text-4xl font-black text-gray-900 dark:text-white">Habitat</p>
            <br />
            <br />
            <p className="mb-3 text-black-500 dark:text-black-400">Explorez les différents habitats du Zoo Arcadia.
            </p>
            <br />
        </div>
        <div className="grid grid-cols-3 gap-4">
            <a href="/savane" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Savane</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Découvrir cette habitat</p>
                <br />
                <img src="4fd8d9ddbbfb.jpg" alt="" />
            </a>

            <a href="/marias" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marias</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Découvrir cette habitat </p>
                <br />
                <img src="b802d4ed329f.jpg" alt="" />
            </a>

            <a href="/jungle" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jungle</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Découvrir cette habitat</p>
                <br />
                <img src="e0ce66feff4b.jpg" alt="" />
            </a>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Arcadia</a>. Copyright
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/" className="hover:underline me-4 md:me-6">Acceuil</a>
                </li>
                <li>
                    <a href="/service" className="hover:underline me-4 md:me-6">Nos Services</a>
                </li>
                <li>
                    <a href="/habitat" className="hover:underline me-4 md:me-6">Nos Habitats</a>
                </li>
        
                <li>
                    <a href="/nouscontacter" className="hover:underline me-4 md:me-6">Nous contacter</a>
                </li>
                <li>
                    <a href="/connexion" className="hover:underline me-4 md:me-6">Connexion</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">A propos</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Mention légale</a>
                </li>
        
            </ul>
        </footer></>

}

export default Restauration