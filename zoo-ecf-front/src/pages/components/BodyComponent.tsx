import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const BodyComponent: NextPage<Props> = ({}) => {
  return (
    <div>
      <div>
        <p className="text-4xl font-black text-gray-900 dark:text-white">
          Le Zoo Arcadia
        </p>
        <br />
        <p className="mb-3 text-black-500 dark:text-black-400">
          Fondé en 1960, notre zoo offre une immersion authentique dans le monde
          naturel avec une collection d&apos;animaux exceptionnels répartis sur
          différents habitats, y compris la savane africaine vibrante,
          l&apos;introspection dense de la jungle et les eaux tranquilles des
          marais.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          Notre engagement pour le bien-être animal est une priorité absolue,
          avec des équipes expertes qui se déplacent quotidiennement au zoo pour
          effectuer des contrôles médicaux préventifs et garantir un
          environnement sain. Nous avons également développé une approche de
          gestion financière solide, ce qui a permis à notre directeur éminent,
          José, d&apos;acquérir l&apos;ambition de nous rendre plus que
          seulement une attraction locale - c&apos;est maintenant la porte vers
          un voyage sans limite dans le monde animal.
        </p>
        <p className="mb-3 text-black-500 dark:text-black-400">
          Nous avons hâte de vous accueillir au zoo Arcadia pour une aventure
          épique, des rencontres inoubliables et des leçons d&apos;écologie qui
          vont changer votre vie. Découvrez nos parcours animaliers avec nous
          aujourd&apos;hui !
        </p>
        <br />

        <img className="h-auto max-w-full" src="image.png" alt="" />
        <br />
      </div>

      <div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/service">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Découvrez nos Services
          </h5>
        </Link>
        <br />
        <Link
          href="/service"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Voir les services
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <br />
      <br />
      <p className="text-4xl font-black text-gray-900 dark:text-white">
        Les Habitats
      </p>
      <br />
      <p className="mb-3 text-black-500 dark:text-black-400">
        Découvrez les habitats uniques qui abritent nos résidents exceptionnels.
      </p>
      <p className="mb-3 text-black-500 dark:text-black-400">
        Plongez dans un monde fascinant où chaque espace est soigneusement conçu
        pour recréer l&apos;environnement naturel de nos animaux. Explorez des
        habitats divers, de la luxuriante jungle tropicale aux vastes plaines
        africaines.
      </p>
      <p className="mb-3 text-black-500 dark:text-black-400">
        À travers nos installations, nous nous engageons à offrir à chaque
        habitant un lieu sûr et confortable, où ils peuvent s&apos;épanouir et
        exprimer pleinement leur nature. Rejoignez-nous pour une immersion
        captivante dans la vie de nos pensionnaires, tout en soutenant notre
        engagement envers le bien-être animal et la conservation de la
        biodiversité.
      </p>
      <br />
      <img
        className="h-auto max-w-full"
        src="/docs/images/examples/image-1@2x.jpg"
        alt=""
      />
      <br />
      <div className="grid grid-cols-3 gap-4">
        <Link
          href="/savane"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Savane
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Découvrir cette habitat
          </p>
          <br />
          <img src="4fd8d9ddbbfb.jpg" alt="" />
        </Link>

        <Link
          href="/marias"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Marais
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Découvrir cette habitat.
          </p>
          <br />
          <img src="b802d4ed329f.jpg" alt="" />
        </Link>

        <Link
          href="/jungle"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jungle
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Découvrir cette habitat.
          </p>
          <br />
          <img src="e0ce66feff4b.jpg" alt="" />
        </Link>
      </div>
      <br />
      <div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/habitat">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            D&apos;autres habitats à découvrir
          </h5>
        </Link>
        <br />
        <Link
          href="/habitat"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Voir tout les habitats
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <br />
      </div>
      <br />
      <div>
        <img className="h-auto max-w-full" src="panda.png" alt="" />
      </div>
      <br />
      <div className="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Laissez-nous votre avis
          </h5>
        </Link>
        <br />
        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Laisser un avis
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <br />
      </div>
      <br />
      <div className="relative overflow-x-auto">
        <p className="text-4xl font-black text-gray-900 dark:text-white">
          Horaires d&apos;ouverture
        </p>
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
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lundi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Mardi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Mercredi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Jeudi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Vendredi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Samedi
              </th>
              <td className="px-6 py-4">08h30 - 18h30</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dimanche
              </th>
              <td className="px-6 py-4">Fermé</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BodyComponent;
