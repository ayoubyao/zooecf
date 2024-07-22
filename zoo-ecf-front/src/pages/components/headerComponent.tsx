import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const HeaderComponent: NextPage<Props> = ({}) => {
  const router = useRouter();
  return (
    <div>
      <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
        <nav className="bg-lime-900 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="shrink-0">
              <img src="logo.png" alt="logo" className="md:w-[170px] w-36" />
            </Link>

            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={() => {
                  router.push("connexion");
                }}
                className="bg-lime-900 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-green-800"
              >
                Connexion
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="bg-lime-900 flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="bg-lime-900 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Acceuil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className=" bg-lime-900 block py-2 px-3 text-gray-900 rounded hover:bg-lime-600 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:dark:hover:text-green-400 dark:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Nos Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/habitat"
                    className="bg-lime-900 block py-2 px-3 text-gray-900 rounded hover:bg-lime-600 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:dark:hover:text-green-400 dark:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Nos habitats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nouscontacter"
                    className="bg-lime-900 block py-2 px-3 text-gray-900 rounded hover:bg-lime-600 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:dark:hover:text-green-400 dark:text-green dark:hover:bg-green-700 dark:hover:text-green md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
