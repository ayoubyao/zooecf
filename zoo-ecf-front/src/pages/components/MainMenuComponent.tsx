import { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props { }


const MainMenuComponent: NextPage<Props> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (




    <><><><><><><><><><>
    <header className='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
    <section
      className='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
  
  
      <a href="javascript:void(0)" className="shrink-0"><img src="logo.png" alt="logo"
          className='md:w-[170px] w-36' />
      </a>
  
      <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
  
        <div className="inline-block cursor-pointer border-gray-300">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
            className="hover:fill-[#007bff]">
            <circle cx="10" cy="7" r="6" data-original="#000000" />
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000" />
          </svg>
          
        </div>
      </div>
    </section>
  
    <div className='flex flex-wrap justify-center px-10 py-3 relative'>
  
      <div id="collapseMenu"
        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
  
        <ul
          className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
            </a>
          </li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='/'
              className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Acceuil</a>
          </li>

          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='/service'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Nos services<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-3'>
                <a href='/restauration'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  Restauration
                </a>
              </li>
              <li className='border-b py-3'>
                <a href='/visite-habitat'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  Visite des habitats avec un guide
                </a>
              </li>
              <li className='border-b py-3'>
                <a href='/visit-zoo'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  visite du zoo en train
                </a>
              </li>
            </ul>
          </li>

          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='/habitat'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Nos habitats<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-3'>
                <a href='/jungle'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  Jungle
                </a>
              </li>
              <li className='border-b py-3'>
                <a href='/marias'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  Marias
                </a>
              </li>
              <li className='border-b py-3'>
                <a href='/savane'
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  Savane 
                </a>
              </li>
            </ul>
          </li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <a href='/nouscontacter'
              className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Nous contacter</a>
              </li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Connexion</a>
          </li>
        </ul>
      </div>
  
      <div id="toggleOpen" className='flex ml-auto lg:hidden'>
        <button>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  <div className="max-w-2xl mx-auto">

<div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">

    <div className="relative h-80 md:h-96" data-carousel-inner>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                className="object-cover w-full h-full" alt="Slide 1"/>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
        </div>
 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="object-cover w-full h-full" alt="Slide 2"/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="object-cover w-full h-full" alt="Slide 3"/>
        </div>
    </div>

    <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
    </div>
  
    <button type="button"
        className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        data-carousel-prev>
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
    </button>
    <button type="button"
        className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        data-carousel-next>
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
    </button>
</div>

<p className="mt-5 text-center text-gray-700 dark:text-gray-300">
    This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
    by going to the official
    <a className="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
        target="_blank">
        Flowbite Documentation
    </a>.
</p>
<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>

</div>
    
    
    
    
    
    
    
    
    </><div>
        <p className="text-4xl font-black text-gray-900 dark:text-white">Le Zoo Arcadia</p>
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">Fondé en 1960, notre zoo offre une immersion authentique dans le monde naturel avec une collection d'animaux exceptionnels répartis sur différents habitats, y compris la savane africaine vibrante, l'introspection dense de la jungle et les eaux tranquilles des marais.</p>
        <p className="mb-3 text-black-500 dark:text-black-400">Notre engagement pour le bien-être animal est une priorité absolue, avec des équipes expertes qui se déplacent quotidiennement au zoo pour effectuer des contrôles médicaux préventifs et garantir un environnement sain. Nous avons également développé une approche de gestion financière solide, ce qui a permis à notre directeur éminent, José, d'acquérir l'ambition de nous rendre plus que seulement une attraction locale - c'est maintenant la porte vers un voyage sans limite dans le monde animal.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">Nous avons hâte de vous accueillir au zoo Arcadia pour une aventure épique, des rencontres inoubliables et des leçons d'écologie qui vont changer votre vie. Découvrez nos parcours animaliers avec nous aujourd'hui !</p>
        <br />

        <img className="h-auto max-w-full" src="image.png" alt="" />
        <br />

      </div></>
      <div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/service">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Découvrez nos Services</h5>
        </a>
        <br />
        <a href="/service" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Voir les services
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div></>
      <br /></>
      <br />
      <p className="text-4xl font-black text-gray-900 dark:text-white">Les Habitats</p>
      <br />
      <p className="mb-3 text-black-500 dark:text-black-400">Découvrez les habitats uniques qui abritent nos résidents exceptionnels.</p>
      <p className="mb-3 text-black-500 dark:text-black-400">Plongez dans un monde fascinant où chaque espace est soigneusement conçu pour recréer l'environnement naturel de nos animaux. Explorez des habitats divers, de la luxuriante jungle tropicale aux vastes plaines africaines.</p>
      <p className="mb-3 text-black-500 dark:text-black-400">À travers nos installations, nous nous engageons à offrir à chaque habitant un lieu sûr et confortable, où ils peuvent
        s'épanouir et exprimer pleinement leur nature. Rejoignez-nous pour une immersion captivante dans la vie de nos pensionnaires, tout en soutenant notre engagement envers le bien-être animal et la conservation de la biodiversité.</p>
      <br />

      <img className="h-auto max-w-full" src="/docs/images/examples/image-1@2x.jpg" alt="" />
      <br /></>
      <div className="grid grid-cols-3 gap-4">
        <a href="/savane" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Savane</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Découvrir cette habitat</p>
          <br />
          <img src="4fd8d9ddbbfb.jpg" alt="" />
        </a>

        <a href="/marias" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marais</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400"> Découvrir cette habitat.</p>
          <br />
          <img src="b802d4ed329f.jpg" alt="" />
        </a>

        <a href="/jungle" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jungle</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400"> Découvrir cette habitat.</p>
          <br />
          <img src="e0ce66feff4b.jpg" alt="" />
        </a>
      </div>
    </>
      <br />

      <div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/habitat">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">D'autres habitats à découvrir</h5>
        </a>
        <br />
        <a href="/habitat" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Voir tout les habitats
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <br />
      </div>
      <br />
      <div>
        <img className="h-auto max-w-full" src="panda.png" alt="" />

      </div>
      <br />
    </><div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laissez-nous votre avis</h5>
        </a>
        <br />
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Laisser un avis
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <br />
      </div></>
      <br />
      <div className="relative overflow-x-auto">
        <p className="text-4xl font-black text-gray-900 dark:text-white">Horaires d'ouverture</p>
        <br />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Jour
              </th>
              <th scope="col" className="px-6 py-4">
                Horaire
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Lundi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Mardi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Mercredi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jeudi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Vendredi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Samedi
              </th>
              <td className="px-6 py-4">
                08h30 - 18h30
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Dimanche
              </th>
              <td className="px-6 py-4">
                Fermé
              </td>
            </tr>
          </tbody>
        </table>
      </div></><footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Arcadia</a>. Copyright
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">Acceuil</a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">Nos Services</a>
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


  );
}

export default MainMenuComponent