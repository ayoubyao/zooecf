import { NextPage } from 'next'

interface Props {}

const FooterComponent: NextPage<Props> = ({}) => {
  return <div>
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Arcadia</a>. Copyright
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <link href="/" className="hover:underline me-4 md:me-6">Acceuil</link>
          </li>
          <li>
            <link href="/" className="hover:underline me-4 md:me-6">Nos Services</link>
          </li>
          <li>
            <link href="/habitat" className="hover:underline me-4 md:me-6">Nos Habitats</link>
          </li>

          <li>
            <link href="/nouscontacter" className="hover:underline me-4 md:me-6">Nous contacter</link>
          </li>
          <li>
            <link href="/connexion" className="hover:underline me-4 md:me-6">Connexion</link>
          </li>
          <li>
            <link href="#" className="hover:underline me-4 md:me-6">A propos</link>
          </li>
          <li>
            <link href="#" className="hover:underline me-4 md:me-6">Mention légale</link>
          </li>

        </ul>
      </footer>
  </div>
}

export default FooterComponent