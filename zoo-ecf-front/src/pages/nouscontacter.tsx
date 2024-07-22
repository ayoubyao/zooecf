import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";

interface Props {}

const Restauration: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div>
        <HeaderComponent />
        <br />
        <div>
          <section className="bg-white dark:bg-green-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-900 dark:text-white">
                Nous contacter
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-green-500 dark:text-green-400 sm:text-xl">
                Vous avez un problème technique ? Vous souhaitez envoyer des
                commentaires sur une fonctionnalité bêta? Besoin de détails sur
                notre plan Business ? Faites le nous savoir.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300"
                  >
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@votremail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-green-300"
                  >
                    Objet du message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-green-900 bg-green-50 rounded-lg border border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Dites-nous comment nous pouvons vous aider"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-green-900 dark:text-green-400"
                  >
                    votre message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-green-900 bg-green-50 rounded-lg shadow-sm border border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Laissez un commentaire..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Envoyer
                </button>
                <br />
                <br />
              </form>
            </div>
          </section>
        </div>
      </div>
      <FooterComponent />{" "}
    </>
  );
};

export default Restauration;
