import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const FooterComponent: NextPage<Props> = ({}) => {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-green-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-green-800 dark:border-green-600">
        <span className="text-sm text-green-500 sm:text-center dark:text-green-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Arcadia
          </a>
          . Copyright
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-green-500 dark:text-green-400 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Acceuil
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Nos Services
            </Link>
          </li>
          <li>
            <Link href="/habitat" className="hover:underline me-4 md:me-6">
              Nos Habitats
            </Link>
          </li>

          <li>
            <Link
              href="/nouscontacter"
              className="hover:underline me-4 md:me-6"
            >
              Nous contacter
            </Link>
          </li>
          <li>
            <Link href="/connexion" className="hover:underline me-4 md:me-6">
              Connexion
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              A propos
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Mention légale
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FooterComponent;
